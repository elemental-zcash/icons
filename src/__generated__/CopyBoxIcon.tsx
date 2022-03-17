import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "@react-platform/svg";
const CopyIcon = React.forwardRef((props: SvgProps, ref) => (
  <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <Path
      d="M15 3.75H4.5V15.75H6V5.25H15V3.75ZM18.75 6.75H7.5V20.25H18.75V6.75ZM17.25 18.75H9V8.25H17.25V18.75Z"
      fill={props.color}
    />
    <Rect
      x={1}
      y={1}
      width={22}
      height={22}
      stroke={props.color}
      strokeWidth={2}
    />
  </Svg>
));
CopyIcon.defaultProps = {
  width: 24,
  height: 24,
};
export default CopyIcon;
