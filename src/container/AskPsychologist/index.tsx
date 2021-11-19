import React, {useState} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { connect } from "react-redux";


import { createComment, getDiary, comment, diary } from "../../ducks/diary";

import Button from '../../components/Button';
import TextDiary from '../../components/TextDiary';
import styles from './style';
import colors from '../../config/colors';

type Props = {
    navigationBack: () => void;
    createComment: (data: comment) => Promise<void>;
    diary: diary;
}

const AskPsychologist = ({navigationBack, diary, createComment}: Props) => {
    const [text, setText] = useState('');

    const onSubmit = () => {
        if(text !== ''){
            createComment({
                diaryID: diary.id!,
                text: text,
                type: 'ask'
            }).then(() => {
                navigationBack();
            })
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigationBack}>
                <Image source={require('../../images/close.png')} style={styles.image}/>
            </TouchableOpacity>
             <TextDiary
                value={text}
                onChange={(text) => setText(text)}
                description="Escreva aqui sua pergunta para o psicólogo: "
                height={150}
            />
            <Button title="Perguntar ao psicólogo" onClick={onSubmit}/>
        </View>
    );
};

export default connect(getDiary, (dispatch: any) => ({
    createComment: (data: comment) => dispatch(createComment(data))
}))(AskPsychologist);
