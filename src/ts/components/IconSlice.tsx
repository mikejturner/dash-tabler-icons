import React from "react";
import { SVGAttributes } from "react";
import { IconSlice as TablerIconSlice } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconSlice = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconSlice 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconSlice.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconSlice;