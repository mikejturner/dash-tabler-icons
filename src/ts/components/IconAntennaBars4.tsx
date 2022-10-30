import React from "react";
import { SVGAttributes } from "react";
import { IconAntennaBars4 as TablerIconAntennaBars4 } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconAntennaBars4 = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconAntennaBars4 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconAntennaBars4.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconAntennaBars4;