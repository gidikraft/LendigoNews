import { Dosis_400Regular } from "@expo-google-fonts/dosis";
import { StyleSheet, Dimensions } from "react-native";
import { CONSTANTS } from "../utils/Constants";

const { deviceHeight, deviceWidth } = Dimensions.get('window');
const { CENTER, 
    BLACK, 
    HIDDEN,
    ROW,
    DOSIS_BOLD,
    DOSIS_REGULAR,
    BOLD,
    FLEX_END,
    HUNDRED_PC,
    EIGHTY_PC
} = CONSTANTS

export default StyleSheet.create({
    container: {
        flex: 1,
        height: deviceHeight,
        width: deviceWidth,
    },
    homepage: {
        alignSelf: FLEX_END,
        fontSize: 18,
        fontFamily: DOSIS_BOLD,
        marginRight: 30,
        marginTop: 10,
    },
    authorView: {
        padding: 10,

    },
    cardView: {
        marginTop: 20
    },
    cardHeaderText: {
        textAlign: CENTER,
        fontSize: 36,
        marginBottom: 10,
        fontFamily: DOSIS_BOLD,

    },
    cardText: {
        textAlign: CENTER,
        fontSize: 20,
        marginBottom: 10

    },
    mainImageView: {
        height: 300,
        overflow: HIDDEN,
        shadowColor: BLACK,
        shadowRadius: 10,
        shadowOpacity: 1,
        padding: 10,
        marginVertical: 30,
        width: HUNDRED_PC
        
    },
    banner: {
        alignSelf: CENTER,
        width: EIGHTY_PC,
        height: HUNDRED_PC,
        borderRadius: 20
    },
    main: {
        padding: 10
    },
    mainSummary: {
        textAlign: CENTER,
        fontSize: 24,
        marginBottom: 10

    },
    mainText: {
        textAlign: CENTER,
        fontSize: 18,
        fontFamily: DOSIS_REGULAR,
        padding: 5,

    },
    footerText: {
        textAlign: CENTER,
        fontFamily: DOSIS_REGULAR,
        fontSize: 20,
        fontWeight: BOLD,
    },
    footerView: {
        flexDirection: ROW,
        marginTop: 15,
        alignSelf: CENTER,
        padding: 20,

    },
    footerItem: {
        marginRight: 20,

    }
})
