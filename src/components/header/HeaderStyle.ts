import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'

export const styles = StyleSheet.create({
    safeAreaView:{
        backgroundColor:Colors.headerClr,
    },
    tasks: {
        borderBottomWidth: 3,
        borderBottomColor: 'white',
        fontFamily: 'OpenSans_400Regular',

    },
    box: {
        paddingLeft: 15
    },
    container: {
        // flex: 1
    },
    box2:{
        lineHeight:100
    }
})