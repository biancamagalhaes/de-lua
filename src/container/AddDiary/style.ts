import colors from '../../config/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    safeAreaContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.purple
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingHorizontal: '20%',
        justifyContent: 'space-between'
    },
    textContainer: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%'
    },
    backgroundImage: {
        alignSelf: 'center',
        width: '80%',
        height: '100%',
        backgroundColor: colors.white
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20
    },
    subtitle: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 30
    },
    error: {
        fontSize: 10,
        color: 'red',
        paddingHorizontal: 30,
        paddingVertical: 10,
    }
});
