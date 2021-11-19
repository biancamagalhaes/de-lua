import { StyleSheet } from 'react-native';
import colors from '../config/colors';

export default StyleSheet.create({
    tabBarContainer: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingTop: 20
    },
    tabBarIconContainer: {
        borderBottomColor: colors.pinkMedium,
        borderBottomWidth: 4,
        paddingBottom: 2.5,
        width: '40%',
        alignItems: 'center'
    },
    tabBarText: { fontSize: 12, paddingVertical: 2 },
    tabBarIconNewLookContainer: {
        backgroundColor: colors.grayDark,
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -40
    },
    tabBarIconNewLookText: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    }
});
