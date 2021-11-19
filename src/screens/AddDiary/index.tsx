import React from 'react';
import { SafeAreaView, StatusBar, View, TouchableOpacity, Image} from 'react-native';
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
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../images/arrow.png')} style={styles.image}/>
                </TouchableOpacity>
                <AddDiaryContainer onClick={() => navigation.navigate('ViewDiaries')}/>
            </SafeAreaView>
        </View>
    );
};

export default AddDiary;
