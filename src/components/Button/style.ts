import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    container: {
        borderRadius: 5,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.yellow,
        borderColor: colors.purpleDark,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    description: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.purpleDark
    }
});
