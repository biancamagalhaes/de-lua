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
    error?: string | undefined;
    hasSecurity?: boolean;
    type?: "numeric" | "email-address"| undefined;
    autoCapitalize?: "none" | undefined;
};

const Input = ({
    description,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    hasSecurity,
    type,
    autoCapitalize
}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.description}>{description}</Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={styles.input}
                secureTextEntry={hasSecurity}
                placeholderTextColor={colors.white}
                autoCapitalize={autoCapitalize}
                keyboardType = {type}
            />
            {error ? <Text style={styles.error}>Erro: {error}</Text> : null}
        </View>
    );
};

Input.defaultProps = {
    placeholder: '',
    hasSecurity: false
};

export default Input;
