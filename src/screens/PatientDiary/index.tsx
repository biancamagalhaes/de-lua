import React from 'react';
import { SafeAreaView, StatusBar, View} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import PatientDiary from '../../container/PatientDiary';

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
    route: {params: {diaryID: number}}
};

const AddDiary = ({ route, navigation }: Props) => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <StatusBar barStyle="dark-content" />
                <PatientDiary
                    buttonClick={() => navigation.navigate('CommentPatient')}
                    navigationBack={() => navigation.goBack()}
                    diaryID={route.params.diaryID}
                />
            </SafeAreaView>
        </View>
    );
};

export default AddDiary;
