import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    input: {
        borderBottomColor: colors.white,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        lineHeight: 20,
        marginBottom: 5,
        color: colors.white
    },
    description: {
        fontSize: 14,
        color: colors.purpleDark,
        maxWidth: '90%',
        marginLeft: 10
    },
    error: {
        fontSize: 10,
        color: colors.gray
    }
});
