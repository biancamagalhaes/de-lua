import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import AddDiary from '../screens/AddDiary';
import ViewDiaries from '../screens/ViewDiaries';
import ViewDiary from '../screens/ViewDiary';
import AskPsychologist from '../screens/AskPsychologist';
import CommentPatient from '../screens/CommentPatient';
import PatientDiaries from '../screens/PatientDiaries';
import PatientDiary from '../screens/PatientDiary';

export type RootStackParamList = {
    Home: undefined;
    AddDiary: undefined;
    ViewDiaries: undefined;
    ViewDiary: undefined;
    PatientDiaries: undefined;
    PatientDiary: undefined;
    AskPsychologist: undefined;
    CommentPatient: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function PatientStack() {
    return (
        <Stack.Navigator
            initialRouteName= "Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Group>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AddDiary" component={AddDiary} />
                <Stack.Screen name="ViewDiaries" component={ViewDiaries} />
                <Stack.Screen name="ViewDiary" component={ViewDiary} />
                <Stack.Group screenOptions={{ presentation: 'transparentModal' }}>
                 <Stack.Screen name="AskPsychologist" component={AskPsychologist} />
                </Stack.Group>
            </Stack.Group>
        </Stack.Navigator>
    );
}

export function PsychologistStack() {
    return (
        <Stack.Navigator
            initialRouteName= "PatientDiaries"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Group>
                <Stack.Screen name="PatientDiaries" component={PatientDiaries} />
                <Stack.Screen name="PatientDiary" component={PatientDiary} />
                <Stack.Group screenOptions={{ presentation: 'transparentModal' }}>
                 <Stack.Screen name="CommentPatient" component={CommentPatient} />
                </Stack.Group>
            </Stack.Group>
        </Stack.Navigator>
    );
}

