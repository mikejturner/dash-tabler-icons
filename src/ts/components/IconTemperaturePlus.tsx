import React from "react";
import { SVGAttributes } from "react";
import { IconTemperaturePlus as TablerIconTemperaturePlus } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconTemperaturePlus = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconTemperaturePlus 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconTemperaturePlus.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconTemperaturePlus;