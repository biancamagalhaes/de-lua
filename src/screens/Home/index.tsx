import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    View,
    Text,
    Image
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import Button from '../../components/Button';
import styles from './style';

type RootStackParamList = {
    LoginPatient: undefined;
    LoginPsychologist: undefined;
    MainApp: undefined;
};

type OnboardingScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'LoginPatient'
>;

type Props = {
    navigation: OnboardingScreenNavigationProp;
};

const Home = ({ navigation }: Props) => {

    
    return (
        <View style={{ flex: 1 }}>
            <Image
                source={require('../../images/second.png')}
                style={styles.backgroundImage}
            />
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.safeAreaContainer}>
                <Text style={[styles.subtitle, { fontSize: 20, marginBottom: 40 }]}>
                    Você pode:
                </Text>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Ver diários"
                        onClick={() => navigation.navigate('ViewDiaries')}
                    />
                    <Text style={styles.subtitle}> ou </Text>
                    <Button
                        title="Criar diário"
                        onClick={() => navigation.navigate('AddDiary')}
                    />
                    <Text style={styles.subtitle}> ou </Text>
                    <Button
                        title="Fazer logout"
                        onClick={() => navigation.navigate('Onboarding')}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Home;
