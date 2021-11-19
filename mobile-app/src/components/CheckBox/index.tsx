import React from 'react';
import { Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from './style';
import colors from '../../config/colors';

type Props = {
    description: string;
    value: boolean;
    onChange: (val: boolean) => void;
};

const CheckBoxComponent = ({ description, value, onChange }: Props) => {
    return (
        <View style={styles.container}>
            <CheckBox
                disabled={false}
                value={value}
                onValueChange={(newValue) => onChange(newValue)}
                tintColor={colors.purpleDark}
                onTintColor={colors.purpleDark}
                onCheckColor={colors.purpleDark}
            />
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

export default CheckBoxComponent;
