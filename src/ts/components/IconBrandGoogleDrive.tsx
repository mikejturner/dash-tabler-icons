import React from "react";
import { SVGAttributes } from "react";
import { IconBrandGoogleDrive as TablerIconBrandGoogleDrive } from '@tabler/icons';
import { DefaultProps } from "../props";

type IconProps = {
    /** Icon size */
    size?: SVGAttributes<SVGElement>['width'];
    /** Icon color */
    color?: SVGAttributes<SVGElement>['stroke'];
    /** Stroke width */
    stroke?: SVGAttributes<SVGElement>['strokeWidth'];
} & DefaultProps;

const IconBrandGoogleDrive = (props: IconProps) => {
    const { size, color, stroke, setProps, ...other } = props;
    return <TablerIconBrandGoogleDrive 
        size={size} // set custom `width` and `height`
        color={color} // set `stroke` color
        stroke={stroke}  // set `stroke-width`
        {...other}
    />
}

IconBrandGoogleDrive.defaultProps = {
    size: 24,
    color: "currentColor",
    stroke: 2,
};



export default IconBrandGoogleDrive;