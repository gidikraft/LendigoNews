import { StyleSheet, Dimensions } from "react-native";
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
    logoutView: {
        flexDirection: Constants.ROW,
        justifyContent: Constants.FLEX_END,
        alignItems: Constants.CENTER,
        marginRight: Numbers.TEN,
        marginTop: Numbers.THIRTY,
    },
    logout: {
        marginRight: Numbers.TEN,
        color: Color.WHITE,
        fontSize: Numbers.EIGHTEEN,
        fontFamily: Fonts.DOSIS_BOLD
    },
    header : {
        alignSelf: Constants.CENTER,
        fontSize: Numbers.THIRTY,
        marginTop: Numbers.TEN,
        fontFamily: Fonts.DOSIS_BOLD,
        color: Color.WHITE
    },
    headerSubtitle: {
        alignSelf: Constants.CENTER,
        fontSize: Numbers.TWENTY_FOUR,
        marginVertical: Numbers.TWENTY,
        color: Color.WHITE
    },
    news: {
        paddingVertical: Numbers.FIVE,
        overflow: Constants.HIDDEN,
        shadowColor: Color.BLACK,
        shadowRadius: Numbers.TEN,
        shadowOpacity: Numbers.ONE,
        margin: Numbers.TEN,
        backgroundColor: Color.NEWS_BACKGROUND,
        borderRadius: Numbers.TEN,
        padding: Numbers.TEN,
    },
    newsBody: {
        flex: Numbers.THREE,
        flexDirection: Constants.ROW,
        marginTop: Numbers.FIFTEEN,
        justifyContent: Constants.SPACE_EVENLY,
        paddingHorizontal: Numbers.FIVE
    },
    newsAuthor: {
        flex: Numbers.ONE,
        fontWeight: Constants.BOLD,
        fontSize: Numbers.FIFTEEN
    },
    newsTitle: {
        flex: Numbers.TWO,
        
    },
    createdAt: {
        fontWeight: Constants.BOLD,
        alignSelf: Constants.FLEX_END,
        marginTop: Numbers.TEN,
        marginRight: Numbers.THIRTY,
        
    },
    points: {
        fontFamily: Fonts.DOSIS_REGULAR,
        fontWeight: Constants.BOLD,
        color: Color.PRIMARY_COLOR,
        alignSelf: Constants.FLEX_END,
        marginBottom: Numbers.TEN,
        marginRight: Numbers.THIRTY,
    },
    footerView: {
        flexDirection: Constants.ROW,
        justifyContent: Constants.FLEX_END
    },
    errorMessage: {
        textAlign: Constants.CENTER
    },
    activityIndicator: {
        color: Color.PRIMARY_COLOR,
        marginTop: Numbers.THREE_HUNDRED,
    }
})
