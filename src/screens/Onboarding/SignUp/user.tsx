import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    View,
    Text,
    Image
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { createPatient, patient, getPatient } from "../../../ducks/user";

import styles from './style';
import colors from '../../../config/colors';

type RootStackParamList = {
    SignUpPatient: undefined;
    SignUpPsychologist: undefined;
    MainApp: undefined;
};

type OnboardingScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'SignUpPatient'
>;

type Props = {
    navigation: OnboardingScreenNavigationProp;
    createPatient: (data: patient) => Promise<void>;
};

const Onboarding = ({ navigation, createPatient }: Props) => {
      const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            name: '',
            password: '',
            cpf: '',
            age: 0
        }
    });

    const onSubmit = (data: patient) => {
        createPatient(data).then(() => {
            navigation.navigate('PatientStack');
        })
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <Image
                source={require('../../../images/second.png')}
                style={styles.backgroundImage}
            />
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.safeAreaContainer}>
                <View style={styles.formContainer}>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input 
                                description="Email"
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                type="email-address"
                                autoCapitalize='none'
                            />
                        )}
                        name="email"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input 
                                description="Senha"
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                hasSecurity={true}
                            />
                        )}
                        name="password"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input 
                                description="Nome"
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        )}
                        name="name"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input 
                                description="CPF"
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        )}
                        name="cpf"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}

                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input 
                                description="Idade"
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                type="numeric"
                            />
                        )}
                        name="age"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Criar conta"
                        onClick={handleSubmit(onSubmit)}
                    />
                    <Text style={styles.subtitle}> ou </Text>
                    <Button
                        title="Trocar para psicólogo"
                        onClick={() =>
                            navigation.navigate('SignUpPsychologist')
                        }
                    />
                </View>
                <Text style={styles.subtitle}>Criado por REGULE-SE</Text>
            </SafeAreaView>
        </View>
    );
};

export default connect(getPatient, (dispatch: any) => ({
    createPatient: (data: patient) =>
    dispatch(createPatient(data)),
}))(Onboarding);