import React from "react";
import { SVGAttributes } from "react";
import { IconTournament as TablerIconTournament } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconTournament = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconTournament 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconTournament.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconTournament;