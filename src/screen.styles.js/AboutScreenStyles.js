import { StyleSheet, Dimensions } from "react-native";
import { Color, Constants, Fonts, Numbers } from "../utils/Constants";

const { deviceHeight, deviceWidth } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: Numbers.ONE,
        height: deviceHeight,
        width: deviceWidth,
    },
    homeView: {
        flexDirection: Constants.ROW,
        justifyContent: Constants.FLEX_END,
        alignItems: Constants.CENTER,
        marginRight: Numbers.THIRTY,
        marginTop: Numbers.FORTY,
    },
    homepage: {
        fontSize: Numbers.TWENTY,
        fontFamily: Fonts.DOSIS_BOLD,
        marginRight: Numbers.FIVE,
        color: Color.PRIMARY_COLOR
    },
    authorView: {
        padding: Numbers.TEN,
    },
    cardView: {
        marginTop: Numbers.TEN,
    },
    cardHeaderText: {
        textAlign: Constants.CENTER,
        fontSize: Numbers.THIRTY_SIX,
        marginBottom: Numbers.TEN,
        fontFamily: Fonts.DOSIS_BOLD,
    },
    cardText: {
        textAlign: Constants.CENTER,
        fontSize: Numbers.TWENTY,
        marginBottom: Numbers.TEN,
    },
    mainImageView: {
        height: Numbers.THREE_HUNDRED,
        width: Numbers.THREE_HUNDRED,
        overflow: Constants.HIDDEN,
        shadowColor: Color.BLACK,
        shadowRadius: Numbers.TWENTY,
        shadowOpacity: Numbers.ONE,
        padding: Numbers.TEN,
        marginVertical: Numbers.THIRTY,
        width: Constants.HUNDRED_PC,        
    },
    banner: {
        alignSelf: Constants.CENTER,
        width: Constants.EIGHTY_PC,
        height: Constants.HUNDRED_PC,
        borderRadius: Numbers.TWENTY,
    },
    main: {
        padding: Numbers.TEN,
    },
    mainSummary: {
        textAlign: Constants.CENTER,
        fontSize: Numbers.TWENTY_FOUR,
        marginBottom: Numbers.TEN,
        fontFamily: Fonts.DOSIS_BOLD,
    },
    mainText: {
        textAlign: Constants.CENTER,
        fontSize: Numbers.TWENTY,
        fontFamily: Fonts.DOSIS_REGULAR,
        padding: Numbers.FIVE,
    },
    footerText: {
        textAlign: Constants.CENTER,
        fontFamily: Fonts.DOSIS_BOLD,
        fontSize: Numbers.TWENTY,
        fontWeight: Constants.BOLD,
    },
    footerView: {
        flexDirection: Constants.ROW,
        marginTop: Numbers.TEN,
        alignSelf: Constants.CENTER,
        padding: Numbers.TWENTY,
    },
    footerItem: {
        marginRight: Numbers.TWENTY,
    }
})
