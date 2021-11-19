import React from 'react';
import {
    TouchableOpacity,
    Text,
    Image,
    FlatList,
    View,
    ListRenderItemInfo
} from 'react-native';

import colors from '../../config/colors';

import styles from './style';

type Props = {
    data:
        | {
              id: number;
              image: any;
              selected: boolean;
              description: string;
              onClick: () => void;
          }[]
        | null
        | undefined;
};

const ButtonIcon = ({ data }: Props) => {
    return (
        <View style={{paddingVertical: 10}}>
            <Text
                style={{
                    color: colors.purpleDark,
                    fontSize: 18,
                    paddingHorizontal: 20,
                    marginBottom: '5%'
                }}
            >
                Numa escala de luas, como você está se sentindo hoje?
            </Text>
            <FlatList
                horizontal={true}
                data={data}
                renderItem={(
                    item: ListRenderItemInfo<{
                        id: number;
                        image: any;
                        selected: boolean;
                        description: string;
                        onClick: () => void;
                    }>
                ) => (
                    <TouchableOpacity
                        onPress={item.item.onClick}
                        style={[styles.container, item.item.selected && {backgroundColor: colors.purple}]}
                    >
                        <Image source={item.item.image} style={styles.icon} />
                        <Text style={[styles.description, , item.item.selected && {color: colors.white}]}>{item.item.description}</Text>
                    </TouchableOpacity>
                )}
                style={{
                    backgroundColor: colors.purpleLight,
                    width: '100%',
                    paddingHorizontal: 5
                }}
            />
        </View>
    );
};

ButtonIcon.defaultProps = {
    backgroundColor: colors.white,
    color: colors.grayBlack
};

export default ButtonIcon;
