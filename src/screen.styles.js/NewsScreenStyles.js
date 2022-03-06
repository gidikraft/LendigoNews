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
    SECONDARY_COLOR,
    BACKGROUND_COLOR,
    NEWS_BACKGROUND,
    SPACE_EVENLY,

} = CONSTANTS

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: BACKGROUND_COLOR,
        height: deviceHeight,
        width: deviceWidth,
    },
    logout: {
        alignSelf: FLEX_END,
        marginRight: 30,
        marginTop: 20,
    },
    header : {
        alignSelf: CENTER,
        fontSize: 30,
        marginTop: 30,
        fontFamily: DOSIS_BOLD
    },
    headerSubtitle: {
        alignSelf: CENTER,
        fontSize: 24,
        marginVertical: 20,

    },
    news: {
        paddingVertical: 5,
        overflow: HIDDEN,
        shadowColor: BLACK,
        shadowRadius: 10,
        shadowOpacity: 1,
        margin: 10,
        backgroundColor: NEWS_BACKGROUND,
        borderRadius: 10,
        padding: 10,
    },
    newsBody: {
        flex: 3,
        flexDirection: ROW,
        marginTop: 15,
        justifyContent: SPACE_EVENLY,
        paddingHorizontal: 5
    },
    newsAuthor: {
        flex: 1,
        fontWeight: BOLD,
        fontSize: 15
    },
    newsTitle: {
        flex: 2,
        
    },
    createdAt: {
        fontWeight: BOLD,
        alignSelf: FLEX_END,
        marginTop: 10,
        
    },
    points: {
        fontFamily: DOSIS_REGULAR,
        fontWeight: BOLD,
        color: PRIMARY_COLOR,
        alignSelf: FLEX_END,
        marginBottom: 10,
    },
    footerView: {
        flexDirection: ROW,
        justifyContent: FLEX_END
    },
})
