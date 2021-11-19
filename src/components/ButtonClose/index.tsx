import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './style';
import colors from '../../config/colors';

type Props = {
    onClick: () => void;
};

const Button = ({ onClick }: Props) => {
    return (
        <TouchableOpacity onPress={onClick} style={styles.container}>
            <AntDesign name="close" size={25} color={colors.white} />
        </TouchableOpacity>
    );
};

export default Button;
