import React, {useEffect} from 'react';
import { Image, View, Text, FlatList, ListRenderItemInfo, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import { setPsychologist, diary } from "../../ducks/diary";
import styles from './style';
import colors from '../../config/colors';

type DiaryProps = {
    index?: number;
    date: string;
    text: string;
    emotion: any;
    onClick: () => void;
}

type Props = {
    navigateDiary: (id: number) => void;
    diaries: any;
    psychologist: any;
    setPsychologist: (diaryID: string, psychologistID: string) => void;
}

const ViewDiaries = ({diaries, navigateDiary, psychologist, setPsychologist}: Props) => {

    const onClick = (diaryID: number) => {
        setPsychologist(diaryID.toString(), psychologist.psychologist.id.toString());
        navigateDiary(diaryID);

    }

    const {diaries: allDiaries} = diaries;

    return (
        <View
            style={styles.container}
        >
            <View style={styles.textContainer}>
                <Text style={styles.title}>Registros dos pacientes: </Text>
            </View>
            <FlatList 
                data={allDiaries}
                renderItem={(
                    item: ListRenderItemInfo<diary>,
                ) => (
                    <DiaryComponent
                        key={item.index} 
                        index={item.index}
                        date={item.item.createdOn!}
                        text={item.item.text}
                        emotion={item.item.feeling}
                        onClick={() => item.item.id && onClick(item.item.id)}
                    />
                )}
            />
           
        </View>
    );
};

const DiaryComponent = ({index, date, text, emotion, onClick}: DiaryProps) => (
    <TouchableOpacity 
        style={[styles.cardContainer, index! % 2 ? { backgroundColor: colors.purpleMid } : null]}
        onPress={onClick}
    >
        <View style={{flex: 2}}>
            <Text style={styles.cardTitle}>{date}</Text>
            <Text style={styles.cardSubtitle} numberOfLines={4}>{text}</Text>
        </View>
        <Image source={emotion} style={styles.emotion}/>
    </TouchableOpacity>
);

export default connect(
    (state: {diary: any, psychologist: any}) => ({
        diaries: state.diary,
        psychologist: state.user,
    }), (dispatch: any) => ({
        setPsychologist: (diaryID: string, psychologistID: string) => dispatch(setPsychologist(diaryID, psychologistID))
    }))(ViewDiaries);
