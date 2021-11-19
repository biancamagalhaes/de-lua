import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
    return (
        <Svg
            width={45.059}
            height={40.587}
            viewBox="0 0 45.059 40.587"
            {...props}
        >
            <Path
                data-name={17079954331574331000}
                d="M4.096 20.723C-.447 14.602 1.067 5.421 8.64 2.36s12.116 3.061 13.63 6.121C23.785 5.42 29.843-.701 37.415 2.36s7.573 12.242 3.029 18.363S22.27 39.087 22.27 39.087 8.64 26.845 4.096 20.723z"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
            />
        </Svg>
    );
}

export default SvgComponent;
