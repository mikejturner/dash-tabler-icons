import React from "react";
import { SVGAttributes } from "react";
import { IconToolsKitchen2Off as TablerIconToolsKitchen2Off } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconToolsKitchen2Off = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconToolsKitchen2Off 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconToolsKitchen2Off.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconToolsKitchen2Off;