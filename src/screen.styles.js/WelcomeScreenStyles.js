import { StyleSheet, Dimensions } from "react-native";

const {deviceHeight, deviceWidth} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#009fb8',
        height: deviceHeight,
        width: deviceWidth,
    },
    header : {
        alignSelf: 'center',
        fontSize: 24,
        marginVertical: 20,

    },
    input: {
        // borderWidth: 1,
        // borderColor: '#016b11',
        // borderRadius: 5,
    },
    button: {
        marginTop: 20,
        width: 300,
        // height: 40,
        alignSelf: 'center',

    }
})
