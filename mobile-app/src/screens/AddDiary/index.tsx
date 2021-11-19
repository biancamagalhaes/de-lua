import React from 'react';
import { SafeAreaView, StatusBar, View} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import AddDiaryContainer from '../../container/AddDiary';

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

const AddDiary = ({ navigation }: Props) => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <SafeAreaView style={styles.safeAreaContainer}>
                <StatusBar barStyle="dark-content" />
                <AddDiaryContainer onClick={(id: number) => navigation.navigate('ViewDiaries', {userID: id})}/>
            </SafeAreaView>
        </View>
    );
};

export default AddDiary;
