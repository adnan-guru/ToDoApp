import { StyleSheet, Platform } from 'react-native'
import { Colors } from '../../constants/Colors'

export const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: Colors.headerClr,
    },

    tasks: {
        fontFamily: 'OpenSans_400Regular',
    },

    border: {
        borderBottomWidth: 3,
        borderBottomColor: 'white',
        marginTop: 2,
    },

    box: {
        paddingLeft: 15
    },
    box2: {
        lineHeight: 100
    },
    notification: {
        position: 'absolute',
        width: 15,
        height: 15,
        borderRadius: 47,
        backgroundColor: '#FD7246',
        zIndex: 1,
        alignItems: 'center',
        marginLeft: 19
    },
    notificationNumber: {
        fontSize: 10,
        color: '#fff',
        fontWeight: '600',
        marginTop: Platform.OS === 'ios' ? -3 : -3.7
    }

})