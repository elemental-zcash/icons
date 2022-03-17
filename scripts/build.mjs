import { transform } from '@svgr/core';
import fse from 'fs-extra';
import path from 'path';
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;

function pascalCase(str) {
  return str.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase())
}


// const srcDir = resolve(__dirname, '../src/__generated__')



const template = (variables, { tpl }) => {
  return tpl`
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = React.forwardRef((${variables.props}, ref) => (
  ${variables.jsx}
));

${variables.componentName}.defaultProps = {
  width: 24,
  height: 24,
};
 
${variables.exports};
`;
};

const main = async () => {
  const items = await fse.readdir(path.join(__dirname, '../icons'));
  await fse.rmdir(path.join(__dirname, '../src/__generated__'), { recursive: true });
  await fse.mkdir(path.join(__dirname, '../src/__generated__'));

  const filesList = [];

  // items.forEach((item) => {
  for (const item of items) {
    console.log({ item })
    const pathParts = path.parse(item);
    const name = `${pascalCase(pathParts.name)}Icon`;
    filesList.push(name);

    const rawSvgContents = await fse.readFile(path.join(__dirname, `../icons/${item}`));

    const jsCode = (await transform(
      rawSvgContents,
      {
        plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
        replaceAttrValues: { '#000': '{props.color}'},
        icon: true,
        template,
        svgProps: { width: '{props.width}', height: '{props.height}', ref: '{ref}' },
        native: true,
        typescript: true, prettier: true, prettierConfig: { printWidth: 80 }
      },
      { componentName: 'CopyIcon' },
    )).replace('"react-native-svg"', '"@react-platform/svg"');
  
    await fse.writeFile(path.join(__dirname, `../src/__generated__/${name}.tsx`), jsCode);
  }

  const iconsEntrypointCode = `${filesList.map((name) => `import { default as ${name} } from './${name}';`).join('\n')}

export {
  ${filesList.join(',\n  ')}
};
  `;

  await fse.writeFile(path.join(__dirname, '../src/__generated__/index.ts'), iconsEntrypointCode);
};

main();
