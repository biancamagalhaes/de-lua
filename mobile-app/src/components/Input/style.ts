import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    container: {
        marginBottom: 10,
        minWidth: '80%'
    },
    input: {
        borderBottomColor: colors.white,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        lineHeight: 20,
        marginBottom: 5,
        color: colors.white,
        textTransform: 'lowercase',
    },
    description: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.white,
        marginBottom: 10
    },
    error: {
        fontSize: 10,
        color: colors.purpleLight
    }
});
