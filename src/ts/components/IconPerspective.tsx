import React from "react";
import { SVGAttributes } from "react";
import { IconPerspective as TablerIconPerspective } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconPerspective = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconPerspective 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconPerspective.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconPerspective;