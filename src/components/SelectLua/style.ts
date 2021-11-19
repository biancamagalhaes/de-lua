import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

export default StyleSheet.create({
    container: {
        borderRadius: 5,
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
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
        fontSize: 14,
        color: colors.purpleDark,
        fontWeight: 'bold',
        paddingTop: 10
    },
    icon: {
        width: 80,
        height: 80,
        marginRight: 5
    }
});
