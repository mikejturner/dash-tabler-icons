import React from "react";
import { SVGAttributes } from "react";
import { IconVariablePlus as TablerIconVariablePlus } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconVariablePlus = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconVariablePlus 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconVariablePlus.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconVariablePlus;