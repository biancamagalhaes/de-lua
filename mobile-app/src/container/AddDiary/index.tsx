import React, {useState} from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from "react-redux";

import Button from '../../components/Button';
import ButtonIcon from '../../components/ButtonIcon';
import SelectLua from '../../components/SelectLua';
import TextDiary from '../../components/TextDiary';
import CheckBox from '../../components/CheckBox';

import { createDiary, diary } from "../../ducks/diary";
import { getPatient, patient } from "../../ducks/user";

import styles from './style';

type Props = {
    onClick: (id: number) => {};
    createDiary: (data: diary) => Promise<void>;
    patient: patient;
}

const AddDiary = ({onClick, createDiary, patient}: Props) => {
    const [selectedButton, setSelectedButton] = useState(0);
    const [errorButton, setErrorButton] = useState();
    const [textDiary, setTextDiary] = useState('');
    const [errorDiary, setErrorDiary] = useState();
    const [checkBox, setCheckBox] = useState(false);
    const [errorCheckBox, setErrorCheckBox] = useState();

    const dataFeelings = [
        {
            id: 1,
            image: require('../../images/lua_raiva.png'),
            description: 'Raiva',
            selected: selectedButton === 1,
            onClick: () => {setSelectedButton(1)},
        },
        {
            id: 2,
            image: require('../../images/lua_raiva.png'),
            description: 'Raiva',
            selected: selectedButton === 2,
            onClick: () => {setSelectedButton(2)},
        },
        {
            id: 3,
            image: require('../../images/lua_raiva.png'),
            description: 'Raiva',
            selected: selectedButton === 3,
            onClick: () => {setSelectedButton(3)},
        },
        {
            id: 4,
            image: require('../../images/lua_raiva.png'),
            description: 'Raiva',
            selected: selectedButton === 4,
            onClick: () => {setSelectedButton(4)},
        }
    ]

    const onSubmit = () => {
        setErrorButton(undefined);
        setErrorCheckBox(undefined);
        setErrorDiary(undefined);

        if(selectedButton === 0){
            setErrorButton('Você precisa selecionar uma emoção acima, para continuar!');
            return;
        }

        if(textDiary === ''){
            setErrorDiary('Você precisa escrever como está se sentido para que o diário se criado.');
            return;
        }

        if(checkBox === false){
            setErrorCheckBox('Você precisa consentir que o seu texto será divulgado para continuar!');
            return;
        }

        const data = {
            text: textDiary,
            feeling: dataFeelings[selectedButton].description,
            userID: patient.id!,
            agreement: checkBox
        }

        createDiary(data).then(() => {
            patient.id && onClick(patient.id);
            setSelectedButton(0);
            setTextDiary('');
            setCheckBox(false);
        })

    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'space-between',
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignContent: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 5
                }}
            >
                <Image
                    source={require('../../images/logo.png')}
                    style={styles.backgroundImage}
                />
                <ButtonIcon image={require('../../images/diary.png')} onClick={() => patient.id && onClick(patient.id)}/>
            </View>
            <SelectLua
                data={dataFeelings}
            />
            {errorButton ? <Text style={styles.error}>Erro: {errorButton}</Text> : null}
            <TextDiary
                value={textDiary}
                onChange={(text) => {setTextDiary(text)}}
                description="Agora você pode escrever com palavras porque você está se
                sentindo assim."
            />
            {errorDiary ? <Text style={styles.error}>Erro: {errorDiary}</Text> : null}
            <CheckBox
                value={checkBox}
                onChange={(value) => setCheckBox(value)}
                description="Concordo em compartilhar o meu diario com o meu psicólogo"
            />
            {errorCheckBox ? <Text style={styles.error}>Erro: {errorCheckBox}</Text> : null}
            <Button title="Salvar" onClick={onSubmit} /> 
        </View>
    );
};


export default connect(getPatient, (dispatch: any) => ({
    createDiary: (data: diary) =>
    dispatch(createDiary(data)),
}))(AddDiary);

