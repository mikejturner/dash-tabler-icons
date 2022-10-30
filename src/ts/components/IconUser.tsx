import React from "react";
import { SVGAttributes } from "react";
import { IconUser as TablerIconUser } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconUser = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconUser 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconUser.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconUser;