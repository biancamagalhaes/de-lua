import React from 'react';
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
import { createPsychologist, getPsychologist, psychologist } from "../../../ducks/user";

import styles from './style';
import colors from '../../../config/colors';

type RootStackParamList = {
    LoginPsychologist: undefined;
    LoginPatient: undefined;
    MainApp: undefined;
};

type OnboardingScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'LoginPsychologist'
>;

type Props = {
    navigation: OnboardingScreenNavigationProp;
    createPsychologist: (data: psychologist) => Promise<void>;
};

const Onboarding = ({ navigation, createPsychologist }: Props) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            name: '',
            password: '',
            crp: '',
            state: ''
        }
    });

    const onSubmit = (data: psychologist) => {
        createPsychologist(data).then(() => {
            navigation.navigate('PsychologistStack');
        });
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <Image
                source={require('../../../images/second.png')}
                style={styles.backgroundImage}
            />
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.safeAreaContainer}>
                <Text style={[styles.subtitle, { fontSize: 20 }]}>
                    PISICÓLOGO
                </Text>
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
                                description="CRP"
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        )}
                        name="crp"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                             <Input
                                description="Estado do CRP"
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        )}
                        name="state"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Criar conta"
                        onClick={handleSubmit(onSubmit)}
                    />
                    <Text style={styles.subtitle}> ou </Text>
                    <Button
                        title="Trocar para paciente"
                        onClick={() => navigation.navigate('LoginPatient')}
                    />
                </View>
                <Text style={styles.subtitle}>Criado por REGULE-SE</Text>
            </SafeAreaView>
        </View>
    );
};

export default connect(getPsychologist, (dispatch: any) => ({
    createPsychologist: (data: psychologist) =>
    dispatch(createPsychologist(data)),
}))(Onboarding);
