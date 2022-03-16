import { StyleSheet } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../constants/Colors';
export const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        height: 'auto',
        padding: 15,
        borderWidth: 1,
        borderColor: Colors.borderClr,
        borderRadius: 9,
        marginBottom: 10
    },
    RowIcon: {
        marginLeft: 7
    },
    taskAndCheckboxRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bulletAndTaskRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    task: {
        fontFamily: 'OpenSans_700Bold',
        fontStyle: 'normal',
        fontSize: RFValue(14),
    },
    checkedTask: {
        textDecorationLine: 'line-through',
        fontFamily: 'OpenSans_700Bold',
        fontStyle: 'normal',
        fontSize: RFValue(14),
    },
    checked: {
        width: 22,
        height: 22,
        backgroundColor: Colors.checkBox,
        borderColor: Colors.checkBox,
        borderRadius: 20,
    },
    nonChecked: {
        width: 22,
        height: 22,
        backgroundColor: Colors.white,
        borderColor: Colors.gray,
        borderRadius: 20,
    },
   
    dateAndTimeRow: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: -5,
        marginBottom: 5,
    },
    smallText: {
        fontFamily: 'OpenSans_400Regular',
        fontSize: RFValue(13),
        marginLeft: 5,
    },
    dateRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
    },
    timeRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
    },
    smallCardsRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    firstCard: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 23,
        backgroundColor: Colors.skyBlueTagClr,
        borderRadius: 5,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
    },
    smallCardText: {
        fontSize: RFValue(12),
        fontFamily: 'OpenSans_400Regular',
    },
    secondCard: {
        height: 23,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: Colors.lightGreenTagClr,
        borderRadius: 5,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 3,
    },
    thirdCard: {
        height: 23,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: Colors.lightYellowTagClr,
        borderRadius: 5,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 3,
    },

    diamond: {
        width: 10,
        height: 10,
        marginRight: 5,
        backgroundColor: Colors.checkBox,
        transform: [{ rotate: "45deg" }],
    },


})