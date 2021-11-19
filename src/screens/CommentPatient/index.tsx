import React from 'react';
import { SafeAreaView, StatusBar, View} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import CommentPatientContainer from '../../container/CommentPatient';

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

const CommentPatient = ({ navigation }: Props) => {
    return (
        <View 
          style={{ flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#00000090', }}
        >
          <StatusBar barStyle="light-content" />
          <CommentPatientContainer navigationBack={() =>  navigation.goBack()}/>
        </View>
    );
};

export default CommentPatient;
