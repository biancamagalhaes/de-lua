import React, {useEffect} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { connect } from "react-redux";

import Button from '../../components/Button';
import styles from './style';
import colors from '../../config/colors';

import { loadDiary, diary, getDiary, comment } from "../../ducks/diary";

type Props = {
    buttonClick: () => void;
    navigationBack: () => void;
    loadDiary: (id: string) => void;
    diaryID: number
    diary: diary;
}

const ViewDiary = ({buttonClick, navigationBack, diaryID, loadDiary, diary} : Props) => {

    useEffect(() => {
        console.log('--------> ', diaryID);
        diaryID && loadDiary(diaryID.toString());
    }, []);

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{justifyContent: 'space-between'}}
        >
             <TouchableOpacity onPress={navigationBack}>
                <Image source={require('../../images/arrow.png')} style={styles.image}/>
            </TouchableOpacity>
            <View style={[styles.textContainer, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                <View>
                    <Text style={styles.title}>{diary.createdOn}</Text>
                    <Text style={styles.subtitle}>Sentimento: {diary.feeling}</Text>
                </View>
                <Image source={require('../../images/lua_raiva.png')} style={styles.emotion}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.subtitle}>Texto: </Text>
                <Text style={styles.text}>
                    {diary.text}
                </Text>
            </View>
            <View>
                <Text style={styles.subtitle}>Comentários do seu psicólogo: </Text>
                {diary.comments ?
                 diary.comments.map((item, index) => (
                    <DiaryComponent 
                        id={index}
                        createdOn={item.createdOn}
                        text={item.text}
                        type={item.type}
                    />
                )) : null}
                <View style={{marginTop: 10}}>
                    <Button onClick={buttonClick} title="Perguntar ao psicólogo"/>
                </View>
            </View>
        </ScrollView>
    );
};

const DiaryComponent = ({id, createdOn, text, type}: comment) => (
    <View  style={[styles.cardContainer, id! % 2 ? { backgroundColor: colors.purpleMid } : null]}>
        <View style={{flex: 2}}>
            <Text style={styles.cardTitle}>{type === 'comment' ? 'Psicólogo' : 'Você'} :</Text>
            <Text style={styles.cardSubtitle} numberOfLines={4}>{text}</Text>
        </View>
    </View>
);

export default connect(getDiary, (dispatch: any) => ({
    loadDiary: (id: string) => dispatch(loadDiary(id))
}))(ViewDiary);
