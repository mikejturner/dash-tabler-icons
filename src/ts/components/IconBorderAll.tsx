import React from "react";
import { SVGAttributes } from "react";
import { IconBorderAll as TablerIconBorderAll } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconBorderAll = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconBorderAll 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconBorderAll.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconBorderAll;