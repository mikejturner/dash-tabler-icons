import React from "react";
import { SVGAttributes } from "react";
import { IconKering as TablerIconKering } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconKering = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconKering 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconKering.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconKering;