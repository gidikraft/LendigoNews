import { StyleSheet, Dimensions } from "react-native";
// import { CONSTANTS } from "../utils/Constants";
import { Color, Constants, Fonts, Numbers } from "../utils/Constants";

const { deviceHeight, deviceWidth } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: Numbers.ONE,
        padding: Numbers.TEN,
        backgroundColor: Color.BACKGROUND_COLOR,
        height: deviceHeight,
        width: deviceWidth,
    },
    header : {
        alignSelf: Constants.CENTER,
        fontSize: Numbers.THIRTY,
        marginVertical: Numbers.TWENTY,
        marginTop: Numbers.SEVENTY,
        fontFamily: Fonts.DOSIS_BOLD,
        color: Color.WHITE
    },
    input: {
        marginTop: Numbers.THIRTY,
        marginHorizontal: Numbers.TWENTY,
        borderRadius: Numbers.TEN,
        
    },
    button: {
        marginTop: Numbers.FIFTY,
        width: Numbers.TWO_HUNDRED,
        alignSelf: Constants.CENTER,
    },
    aboutAuthor: {
        textAlign: Constants.CENTER,
        fontSize: Numbers.TWENTY_FOUR,
        marginTop: Numbers.THIRTY,
        fontFamily: Fonts.DOSIS_REGULAR,
        color: Color.WHITE
    },
    seun: {
        color: Color.PRIMARY_COLOR,
        fontFamily: Fonts.DOSIS_BOLD,
    }
})
