import { Dosis_400Regular } from "@expo-google-fonts/dosis";
import { StyleSheet, Dimensions } from "react-native";
import { CONSTANTS } from "../utils/Constants";

const { deviceHeight, deviceWidth } = Dimensions.get('window');
const { CENTER, 
    BLACK,
    PRIMARY_COLOR,
    HIDDEN,
    ROW,
    DOSIS_BOLD,
    DOSIS_REGULAR,
    BOLD,
    FLEX_END,
    HUNDRED_PC,
    EIGHTY_PC,
    ONE,
    FIVE,
    TEN,
    TWENTY,
    TWENTY_FOUR,
    THIRTY,
    THIRTY_SIX,
    THREE_HUNDRED,
} = CONSTANTS

export default StyleSheet.create({
    container: {
        flex: ONE,
        height: deviceHeight,
        width: deviceWidth,
    },
    homeView: {
        flexDirection: ROW,
        justifyContent: FLEX_END,
        alignItems: CENTER,
        marginRight: THIRTY,
        marginTop: TWENTY,
    },
    homepage: {
        fontSize: TWENTY,
        fontFamily: DOSIS_BOLD,
        marginRight: FIVE,
        color: PRIMARY_COLOR
    },
    authorView: {
        padding: TEN,

    },
    cardView: {
        marginTop: TWENTY
    },
    cardHeaderText: {
        textAlign: CENTER,
        fontSize: THIRTY_SIX,
        marginBottom: TEN,
        fontFamily: DOSIS_BOLD,

    },
    cardText: {
        textAlign: CENTER,
        fontSize: TWENTY,
        marginBottom: TEN

    },
    mainImageView: {
        height: THREE_HUNDRED,
        overflow: HIDDEN,
        shadowColor: BLACK,
        shadowRadius: TEN,
        shadowOpacity: ONE,
        padding: TEN,
        marginVertical: THIRTY,
        width: HUNDRED_PC
        
    },
    banner: {
        alignSelf: CENTER,
        width: EIGHTY_PC,
        height: HUNDRED_PC,
        borderRadius: TWENTY
    },
    main: {
        padding: TEN
    },
    mainSummary: {
        textAlign: CENTER,
        fontSize: TWENTY_FOUR,
        marginBottom: TEN,
        fontFamily: DOSIS_BOLD
    },
    mainText: {
        textAlign: CENTER,
        fontSize: TWENTY,
        fontFamily: DOSIS_REGULAR,
        padding: FIVE,

    },
    footerText: {
        textAlign: CENTER,
        fontFamily: DOSIS_BOLD,
        fontSize: TWENTY,
        fontWeight: BOLD,
    },
    footerView: {
        flexDirection: ROW,
        marginTop: TEN,
        alignSelf: CENTER,
        padding: TWENTY,

    },
    footerItem: {
        marginRight: TWENTY,

    }
})
