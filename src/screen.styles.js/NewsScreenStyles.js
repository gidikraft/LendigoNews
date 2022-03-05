import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // backgroundColor: '#35e02f',
    },
    header : {
        alignSelf: 'center',
        fontSize: 24,
        marginTop: 40,

    },
    button: {
        marginTop: 20,
        width: 180,
        height: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 30,

    },

    flatListView: {
        // flex: 1,
        // backgroundColor: '#35e02f',

    },
    comments: {
        paddingVertical: 5,
        // borderTopWidth: 1,
        // borderTopColor: '#1936C6',
        // elevation: 5,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.8,
        // shadowRadius: 1, 
        borderColor:'blue', // if you need 
        borderWidth:1,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowRadius: 10,
        shadowOpacity: 1,

        margin: 10,
        backgroundColor: '#dbdbdb',
        borderRadius: 10,
        padding: 10,
    },
    commentsBody: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 5
    },
    commentsName: {
        flex: 40,
        fontWeight: 'bold',
        fontSize: 15
    },
    bodyText: {
        flex: 86
    },
    createdAt: {
        fontWeight: 'bold',
        // marginBottom: 10,
        alignSelf: 'flex-end',
        marginTop: 10,
        // marginRight: 10,
    },
    itemSeperator: {
        height: 1,
        width: "100%",
        backgroundColor: 'blue',
    },
    footerView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    about: {

    }
})
