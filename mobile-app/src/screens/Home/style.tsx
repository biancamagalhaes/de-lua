import colors from '../../config/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    safeAreaContainer: {
        alignItems: 'center',
        flex: 1,
        paddingTop: 100, 
        backgroundColor: colors.purple
    },
    buttonContainer: {
        minHeight: 250,
        paddingHorizontal: '20%',
        justifyContent: 'space-between'
    },
    formContainer: {
        justifyContent: 'center'
    },
    backgroundImage: {
        alignSelf: 'center',
        width: '100%',
        height: '30%',
        marginTop: 40,
        backgroundColor: colors.white
    },
    subtitle: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 30
    }
});
