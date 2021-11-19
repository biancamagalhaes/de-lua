import React from 'react';
import { SafeAreaView, StatusBar, View, Text, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import ViewDiariesContainer from '../../container/ViewDiaries';

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
    route: {params: {userID: number}}
};

const AddDiary = ({ navigation, route }: Props) => {
    console.log(route);
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <StatusBar barStyle="dark-content" />
                <ViewDiariesContainer 
                    navigateDiary={(id: number) => navigation.navigate('ViewDiary', {diaryID: id})}
                    navigationBack={() => navigation.goBack()}
                    userID={route.params.userID}
                /> 
            </SafeAreaView>
        </View>
    );
};

export default AddDiary;
