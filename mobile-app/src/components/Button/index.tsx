import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './style';

type Props = {
    title: string;
    onClick: () => void;
};

const Button = ({ title, onClick }: Props) => {
    return (
        <TouchableOpacity onPress={onClick} style={styles.container}>
            <Text style={styles.description}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
