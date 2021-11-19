import colors from '../../config/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingHorizontal: '20%',
        justifyContent: 'space-between'
    },
    textContainer: {
        borderStyle: 'solid',
        borderBottomColor: colors.purpleDark,
        borderBottomWidth: 2,
        marginBottom: 20
    },
    image: {
        width: 20,
        height: 20,
        marginBottom: 20,
    },
    title: {
        color: colors.purpleDark,
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20
    },
    cardContainer:{
        backgroundColor: colors.purpleLight,
        borderRadius: 10,
        flexDirection: 'row',
        padding: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardTitle:{
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10
    },
    cardSubtitle:{
        fontSize: 14,
        fontWeight: '100',
        maxWidth: '85%',
    },
    emotion: {
        width: 70,
        height: 70,
    },
});
