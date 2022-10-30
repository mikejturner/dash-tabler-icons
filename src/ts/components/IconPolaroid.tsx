import React from "react";
import { SVGAttributes } from "react";
import { IconPolaroid as TablerIconPolaroid } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconPolaroid = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconPolaroid 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconPolaroid.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconPolaroid;