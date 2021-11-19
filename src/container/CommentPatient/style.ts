import colors from '../../config/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.white,
        borderRadius: 10, 
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
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
        width: 10,
        height: 10,
        marginTop: 10,
        marginLeft: 10
    },
    title: {
        color: colors.purpleDark,
        fontWeight: 'bold',
        fontSize: 35,
        marginBottom: 20
    },
    subtitle: {
        color: colors.purpleDark,
        fontWeight: '600',
        fontSize: 20,
        marginBottom: 20
    },
    text: {
        color: colors.purpleDark,
        fontWeight: '300',
        fontSize: 18,
        marginBottom: 20
    },
    cardContainer:{
        backgroundColor: colors.purpleLight,
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
    },
    cardTitle:{
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10
    },
    cardSubtitle:{
        fontSize: 14,
        fontWeight: '100',
    },
    emotion: {
        width: 100,
        height: 100,
    },
});
