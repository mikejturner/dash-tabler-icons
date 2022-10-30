import React from "react";
import { SVGAttributes } from "react";
import { IconFlame as TablerIconFlame } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconFlame = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconFlame 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconFlame.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconFlame;