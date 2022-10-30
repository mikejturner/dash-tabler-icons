import React from "react";
import { SVGAttributes } from "react";
import { IconGenderGenderless as TablerIconGenderGenderless } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconGenderGenderless = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconGenderGenderless 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconGenderGenderless.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconGenderGenderless;