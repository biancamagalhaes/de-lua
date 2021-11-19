import React from 'react';
import { SafeAreaView, StatusBar, View, Text, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import PatientDiariesContainer from '../../container/PatientDiaries';

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
    route: {params: {psychologistID: number}}
};

const AddDiary = ({ route, navigation }: Props) => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
          {console.log(route)}
            <SafeAreaView style={styles.safeAreaContainer}>
                <StatusBar barStyle="dark-content" />
                <PatientDiariesContainer 
                    navigateDiary={(id: number) => navigation.navigate('PatientDiary', {diaryID: id})}
                />
            </SafeAreaView>
        </View>
    );
};

export default AddDiary;
