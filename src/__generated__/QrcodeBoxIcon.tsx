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
      d="M14.25 18.75H12.75V17.25H14.25V18.75ZM12.75 13.5H11.25V17.25H12.75V13.5ZM18.75 12H17.25V15H18.75V12ZM17.25 10.5H15.75V12H17.25V10.5ZM8.25 12H6.75V13.5H8.25V12ZM6.75 10.5H5.25V12H6.75V10.5ZM12 6.75H13.5V5.25H12V6.75ZM6.375 6.375V8.625H8.625V6.375H6.375ZM9.75 9.75H5.25V5.25H9.75V9.75ZM6.375 15.375V17.625H8.625V15.375H6.375ZM9.75 18.75H5.25V14.25H9.75V18.75ZM15.375 6.375V8.625H17.625V6.375H15.375ZM18.75 9.75H14.25V5.25H18.75V9.75ZM17.25 17.25V15H14.25V16.5H15.75V18.75H18.75V17.25H17.25ZM15.75 12H12.75V13.5H15.75V12ZM12.75 10.5H8.25V12H9.75V13.5H11.25V12H12.75V10.5ZM13.5 9.75V8.25H12V6.75H10.5V9.75H13.5ZM8.0625 6.9375H6.9375V8.0625H8.0625V6.9375ZM8.0625 15.9375H6.9375V17.0625H8.0625V15.9375ZM17.0625 6.9375H15.9375V8.0625H17.0625V6.9375Z"
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
