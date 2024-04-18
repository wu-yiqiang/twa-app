import React, { FC } from 'react'
import './index.scss'
interface SvgIconProps {
  svgName: string // svg名字
  svgClass?: string // 自定义类名
  color?: string
  size: string// 填充颜色
}
const SvgIcon: FC<SvgIconProps> = (props) => {
    const {svgName, color, svgClass, size} = props;
    return (
        <svg className={`svg-class ${svgClass}`} style={{fontSize: size}}>
            <use xlinkHref={'#icon-' + svgName} fill={color} />
        </svg>
    );
};

export default SvgIcon;

