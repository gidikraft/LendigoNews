import { StyleSheet, Dimensions } from "react-native";
import { CONSTANTS } from "../utils/Constants";

const { deviceHeight, deviceWidth } = Dimensions.get('window');
const { 
    CENTER,
    BLACK,
    PRIMARY_COLOR,
    SECONDARY_COLOR,
    DODSIS_LIGHT,
    DOSIS_REGULAR,
    DOSIS_BOLD,
    BACKGROUND_COLOR,
    PLACEHOLDER_COLOR,

} = CONSTANTS


export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: BACKGROUND_COLOR,
        height: deviceHeight,
        width: deviceWidth,
    },
    header : {
        alignSelf: CENTER,
        fontSize: 30,
        marginVertical: 20,
        marginTop: 70,
        fontFamily: DOSIS_BOLD,
    },
    input: {
        marginTop: 30,
        marginHorizontal: 20,
        borderRadius: 10,
        
    },
    button: {
        marginTop: 50,
        width: 200,
        alignSelf: CENTER,
    },
    aboutAuthor: {
        textAlign: CENTER,
        fontSize: 24,
        marginTop: 30,
        fontFamily: DOSIS_BOLD,
    },
})
