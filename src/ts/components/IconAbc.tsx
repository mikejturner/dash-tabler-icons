import React from "react";
import { SVGAttributes } from "react";
import { IconAbc as TablerIconAbc } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconAbc = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconAbc 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconAbc.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconAbc;