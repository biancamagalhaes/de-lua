import React from 'react';
import { SafeAreaView, StatusBar, View, Text, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import Button from '../../components/Button';

import styles from './style';
import colors from '../../config/colors';

type RootStackParamList = {
    Onboarding: undefined;
    LoginPatient: undefined;
    SignUpPatient: undefined;
};

type OnboardingScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Onboarding'
>;

type Props = {
    navigation: OnboardingScreenNavigationProp;
};

const Onboarding = ({ navigation }: Props) => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <Image
                source={require('../../images/home.png')}
                style={styles.backgroundImage}
            />
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.safeAreaContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}> Como está sua Lua hoje? </Text>
                    <Text style={styles.subtitle}>
                        Um aplicativo terapéutico para te ajudar nos dias em que
                        sua lua estiver de cabeça para baixo!
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Criar conta"
                        onClick={() => navigation.navigate('SignUpPatient')}
                    />
                    <Button
                        title="Entrar"
                        onClick={() => navigation.navigate('LoginPatient')}
                    />
                </View>
                <Text style={styles.subtitle}>Criado por REGULE-SE</Text>
            </SafeAreaView>
        </View>
    );
};

export default Onboarding;
