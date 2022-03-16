import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'

export const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
    },
    bgHeaderClr:{
        height:20,
        width:'100%',
        backgroundColor:Colors.headerClr,
    },
    body: {
        flex:1,
        paddingTop:20,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor:'white',
        borderTopLeftRadius:22,
        borderTopRightRadius:22,
        marginTop:-20,
    }
})