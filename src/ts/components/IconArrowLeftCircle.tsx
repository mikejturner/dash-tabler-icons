import React from "react";
import { SVGAttributes } from "react";
import { IconArrowLeftCircle as TablerIconArrowLeftCircle } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconArrowLeftCircle = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconArrowLeftCircle 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconArrowLeftCircle.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconArrowLeftCircle;