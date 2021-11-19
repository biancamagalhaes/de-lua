import React, {useEffect} from 'react';
import { Image, View, Text, FlatList, ListRenderItemInfo, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import { loadDiariesByUser, diary, getDiariesByUser } from "../../ducks/diary";

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
    navigateDiary: (id: number) =>  void;
    navigationBack: () =>  void;
    loadDiariesByUser: (id: string) => Promise<void>;
    diary: any;
    user: any
}

const ViewDiaries = ({navigateDiary, navigationBack, loadDiariesByUser, diary, user}: Props) => {

    useEffect(() => {
        loadDiariesByUser(user.patient.id.toString());
    }, []);

    const {diaries} = diary;

    return (
        <View
            style={styles.container}
        >
            <TouchableOpacity onPress={navigationBack}>
                <Image source={require('../../images/arrow.png')} style={styles.image}/>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Seus registros: </Text>
            </View>
            <FlatList 
                data={diaries}
                renderItem={(
                    item: ListRenderItemInfo<diary>,
                ) => (
                    <DiaryComponent
                        key={item.index} 
                        index={item.index}
                        date={item.item.createdOn!}
                        text={item.item.text}
                        emotion={item.item.feeling}
                        onClick={() => item.item.id && navigateDiary(item.item.id)}
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
    (state: {diary: any, user: any}) => ({
        diary: state.diary,
        user: state.user
    }), (dispatch: any) => ({
    loadDiariesByUser: (id: string) => dispatch(loadDiariesByUser(id))
}))(ViewDiaries);

