import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from '../screens/Onboarding';
import LoginPatient from '../screens/Onboarding/SignIn/user';
import LoginPsychologist from '../screens/Onboarding/SignIn/psychologist';
import SignUpPatient from '../screens/Onboarding/SignUp/user';
import SignUpPsychologist from '../screens/Onboarding/SignUp/psychologist';

import {PatientStack} from './homeStack';
import {PsychologistStack} from './homeStack'

export type RootStackParamList = {
    Onboarding: undefined;
    LoginPatient: undefined;
    LoginPsychologist: undefined;
    SignUpPatient: undefined;
    SignUpPsychologist: undefined;
    PatientStack: undefined;
    PsychologistStack: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Onboarding"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="LoginPatient" component={LoginPatient} />
                <Stack.Screen
                    name="LoginPsychologist"
                    component={LoginPsychologist}
                />
                <Stack.Screen name="SignUpPatient" component={SignUpPatient} />
                <Stack.Screen
                    name="SignUpPsychologist"
                    component={SignUpPsychologist}
                />
                <Stack.Screen name="PatientStack" component={PatientStack} />
                <Stack.Screen name="PsychologistStack" component={PsychologistStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
