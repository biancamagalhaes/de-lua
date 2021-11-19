import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    container: {
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.yellow,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    icon: {
        width: 20,
        height: 30
    }
});
