import React from "react";
import { SVGAttributes } from "react";
import { IconHistoryToggle as TablerIconHistoryToggle } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconHistoryToggle = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconHistoryToggle 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconHistoryToggle.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconHistoryToggle;