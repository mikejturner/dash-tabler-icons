import React from "react";
import { SVGAttributes } from "react";
import { IconSignal4g as TablerIconSignal4g } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconSignal4g = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconSignal4g 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconSignal4g.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconSignal4g;