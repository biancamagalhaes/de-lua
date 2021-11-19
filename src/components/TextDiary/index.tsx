import React from 'react';
import { TextInput, Text, View } from 'react-native';

import colors from '../../config/colors';

import styles from './style';

type Props = {
    description: string;
    placeholder?: string;
    value: string;
    onChange: (txt: string) => void;
    onBlur?: () => void;
    error?: string;
    height?: number;
    hasSecurity?: boolean;
};

const Input = ({
    description,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    hasSecurity,
    height
}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.description}>{description}</Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={[styles.input, height ? {minHeight: height} : null]}
                secureTextEntry={hasSecurity}
                placeholderTextColor={colors.white}
                multiline={true}
                numberOfLines={4}
            />
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};

Input.defaultProps = {
    placeholder: '',
    hasSecurity: false
};

export default Input;
