import React from "react";
import { SVGAttributes } from "react";
import { IconHandTwoFingers as TablerIconHandTwoFingers } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconHandTwoFingers = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconHandTwoFingers 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconHandTwoFingers.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconHandTwoFingers;