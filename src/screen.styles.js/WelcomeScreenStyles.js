import { StyleSheet, Dimensions } from "react-native";
import { CONSTANTS } from "../utils/Constants";

const { deviceHeight, deviceWidth } = Dimensions.get('window');
const { 
    CENTER,
    PRIMARY_COLOR,
    DOSIS_REGULAR,
    DOSIS_BOLD,
    BACKGROUND_COLOR,
    ONE,
    TEN,
    TWENTY,
    TWENTY_FOUR,
    THIRTY,
    FIFTY,
    SEVENTY,
    TWO_HUNDRED,
    WHITE
} = CONSTANTS


export default StyleSheet.create({
    container: {
        flex: ONE,
        padding: TEN,
        backgroundColor: BACKGROUND_COLOR,
        height: deviceHeight,
        width: deviceWidth,
    },
    header : {
        alignSelf: CENTER,
        fontSize: THIRTY,
        marginVertical: TWENTY,
        marginTop: SEVENTY,
        fontFamily: DOSIS_BOLD,
        color: WHITE
    },
    input: {
        marginTop: THIRTY,
        marginHorizontal: TWENTY,
        borderRadius: TEN,
        
    },
    button: {
        marginTop: FIFTY,
        width: TWO_HUNDRED,
        alignSelf: CENTER,
    },
    aboutAuthor: {
        textAlign: CENTER,
        fontSize: TWENTY_FOUR,
        marginTop: THIRTY,
        fontFamily: DOSIS_REGULAR,
        color: WHITE
    },
    seun: {
        color: PRIMARY_COLOR,
        fontFamily: DOSIS_BOLD,
    }
})
