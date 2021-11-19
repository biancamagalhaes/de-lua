import React, {useState} from 'react';
import {
    SafeAreaView,
    StatusBar,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { loginPatient, getPatient } from "../../../ducks/user";

import styles from './style';
import colors from '../../../config/colors';

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
    loginPatient: (data: {email: string, password: string}) => Promise<void>;
};

const Onboarding = ({ navigation, loginPatient }: Props) => {
    const { control, handleSubmit, setError, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = (data: {email: string, password: string}) => {
        if(data.email !== '' && data.password !== ''){
            loginPatient(data).then((e) => {
                console.log(e);
                navigation.navigate('PatientStack');
            }).catch((e) => {
                if(e.message === "User not found"){
                    setError("email", {
                        type: "manual",
                        message: "Email não encontrado"
                    });
                }else if(e.message === "Incorrect password"){
                    setError("password", {
                        type: "manual",
                        message: "Senha incorreta"
                    });
                }
            })
        }else if (data.email === '' && data.password !== ''){
            setError("email", {
                type: "manual",
                message: "Este campo precisa ser preenchido!"
            });
        }else if (data.email !== '' && data.password === ''){
            setError("password", {
                type: "manual",
                message: "Este campo precisa ser preenchido!"
            });
        }else{
            setError("email", {
                type: "manual",
                message: "Este campo precisa ser preenchido!"
            });
            setError("password", {
                type: "manual",
                message: "Este campo precisa ser preenchido!"
            });
        }

        
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
                                error={errors?.email?.message}
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
                                error={errors?.password?.message}
                            />
                        )}
                        name="password"
                    />
                    <TouchableOpacity style={{ alignItems: 'flex-end' }}>
                        <Text style={[styles.subtitle, { fontSize: 12 }]}>
                            Esqueci a senha
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Entrar"
                        onClick={handleSubmit(onSubmit)}
                    />
                    <Text style={styles.subtitle}> ou </Text>
                    <Button
                        title="Trocar para psicólogo"
                        onClick={() => navigation.navigate('LoginPsychologist')}
                    />
                </View>
                <Text style={styles.subtitle}>Criado por REGULE-SE</Text>
            </SafeAreaView>
        </View>
    );
};

export default connect(getPatient, (dispatch: any) => ({
    loginPatient: (data: {email: string, password: string}) =>
    dispatch(loginPatient(data)),
}))(Onboarding);
