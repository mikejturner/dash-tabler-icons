import React from "react";
import { SVGAttributes } from "react";
import { IconFidgetSpinner as TablerIconFidgetSpinner } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconFidgetSpinner = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconFidgetSpinner 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconFidgetSpinner.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconFidgetSpinner;