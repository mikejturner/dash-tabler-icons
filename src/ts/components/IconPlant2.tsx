import React from "react";
import { SVGAttributes } from "react";
import { IconPlant2 as TablerIconPlant2 } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconPlant2 = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconPlant2 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconPlant2.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconPlant2;