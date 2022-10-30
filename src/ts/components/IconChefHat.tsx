import React from "react";
import { SVGAttributes } from "react";
import { IconChefHat as TablerIconChefHat } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconChefHat = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconChefHat 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconChefHat.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconChefHat;