import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginVertical: 10
    },
    input: {
        borderColor: colors.purpleDark,
        borderStyle: 'solid',
        borderWidth: 1,
        height: 250,
        lineHeight: 20,
        marginBottom: 5,
        padding: 10,
        color: colors.purpleDark
    },
    description: {
        fontSize: 18,
        color: colors.purpleDark,
        marginBottom: 20
    },
    error: {
        fontSize: 14,
        color: colors.purple,
        marginBottom: 20
    }

});
