// @ts-nocheck

const sizeMap = {
  small: 16,
  medium: 24,
  large: 32,
};

export default function getSvgProps({
  'aria-label': ariaLabel,
  className,
  fill = 'currentColor',
  size,
  style
  // verticalAlign,
  // svgDataByHeight
}) {
  const height = sizeMap[size] || size;
  const width = height * aspectRatio;
  // const width = height * (naturalWidth / naturalHeight)
  // const path = svgDataByHeight[naturalHeight].path

  return {
    'aria-hidden': ariaLabel ? 'false' : 'true',
    'aria-label': ariaLabel,
    role: 'img',
    className,
    // viewBox: `0 0 ${naturalWidth} ${naturalHeight}`,
    // width,
    height,
    fill,
    style: {
      ...style,
    },
    // style: {
    //   display: 'inline-block',
    //   userSelect: 'none',
    //   verticalAlign,
    //   overflow: 'visible'
    // },
  }
}
