import React from "react";
import { SVGAttributes } from "react";
import { IconCandy as TablerIconCandy } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconCandy = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconCandy 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconCandy.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconCandy;