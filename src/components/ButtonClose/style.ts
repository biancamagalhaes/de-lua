import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    container: {
        borderRadius: 100,
        width: 35,
        height: 35,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        backgroundColor: colors.grayDark
    },
    description: {
        fontSize: 15,
        color: colors.white
    }
});
