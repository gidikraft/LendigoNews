import { StyleSheet, Dimensions } from "react-native";
import { CONSTANTS } from "../utils/Constants";

const { deviceHeight, deviceWidth } = Dimensions.get('window');
const { 
    CENTER, 
    ROW, 
    HIDDEN,
    BOLD,
    BLACK,
    PRIMARY_COLOR,
    DOSIS_REGULAR,
    DOSIS_BOLD,
    FLEX_END,
    ONE,
    TWO,
    THREE,
    FIVE,
    TEN,
    FIFTEEN,
    EIGHTEEN, 
    TWENTY,
    TWENTY_FOUR,
    THIRTY,
    THREE_HUNDRED,
    BACKGROUND_COLOR,
    NEWS_BACKGROUND,
    SPACE_EVENLY,
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
    logoutView: {
        flexDirection: ROW,
        justifyContent: FLEX_END,
        alignItems: CENTER,
        marginRight: TEN,
        marginTop: THIRTY,
    },
    logout: {
        marginRight: TEN,
        color: WHITE,
        fontSize: EIGHTEEN,
        fontFamily: DOSIS_BOLD
    },
    header : {
        alignSelf: CENTER,
        fontSize: THIRTY,
        marginTop: TEN,
        fontFamily: DOSIS_BOLD,
        color: WHITE
    },
    headerSubtitle: {
        alignSelf: CENTER,
        fontSize: TWENTY_FOUR,
        marginVertical: TWENTY,
        color: WHITE
    },
    news: {
        paddingVertical: FIVE,
        overflow: HIDDEN,
        shadowColor: BLACK,
        shadowRadius: TEN,
        shadowOpacity: ONE,
        margin: TEN,
        backgroundColor: NEWS_BACKGROUND,
        borderRadius: TEN,
        padding: TEN,
    },
    newsBody: {
        flex: THREE,
        flexDirection: ROW,
        marginTop: FIFTEEN,
        justifyContent: SPACE_EVENLY,
        paddingHorizontal: FIVE
    },
    newsAuthor: {
        flex: ONE,
        fontWeight: BOLD,
        fontSize: FIFTEEN
    },
    newsTitle: {
        flex: TWO,
        
    },
    createdAt: {
        fontWeight: BOLD,
        alignSelf: FLEX_END,
        marginTop: TEN,
        marginRight: THIRTY,
        
    },
    points: {
        fontFamily: DOSIS_REGULAR,
        fontWeight: BOLD,
        color: PRIMARY_COLOR,
        alignSelf: FLEX_END,
        marginBottom: TEN,
        marginRight: THIRTY,
    },
    footerView: {
        flexDirection: ROW,
        justifyContent: FLEX_END
    },
    errorMessage: {
        textAlign: CENTER
    },
    activityIndicator: {
        color: PRIMARY_COLOR,
        marginTop: THREE_HUNDRED,
    }
})
