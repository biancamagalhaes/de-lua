import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

import colors from '../../config/colors';

import styles from './style';

type Props = {
    image: number;
    onClick: () => void;
    backgroundColor?: string;
};

const ButtonIcon = ({ onClick, image, backgroundColor }: Props) => {
    return (
        <TouchableOpacity onPress={onClick} style={styles.container}>
            <Image source={image} style={styles.icon} />
        </TouchableOpacity>
    );
};

ButtonIcon.defaultProps = {
    backgroundColor: colors.white,
    color: colors.grayBlack
};

export default ButtonIcon;
