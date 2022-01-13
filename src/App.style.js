import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        marginTop: 0,
        margin: 5,
    },
    titleContainer:{
     alignItems: "center",
     flexDirection: "row"   
    },
    title:{
        fontSize: 60,
        color: "orange",
        fontWeight: "bold",
        flex: 1,
    },
    submitButton: {
        backgroundColor: "#181D31",
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        alignItems: "center",
    },
    getButton: {
        alignItems: "center",
        padding: 10,
        backgroundColor: "#406882",
        margin: 10,
        borderRadius: 20,
        width: 200,
    },
    getText: {
        color: "white",
        fontWeight: "bold",
    },
    getTextNEW: {
        color: "white",
        fontWeight: "bold",
        fontSize: 10,
    },
    createButton: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 50,
    },
    pickers: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
})