import { StyleSheet } from "react-native";
import { CARD } from "../utils/constants";

export const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:45
    },
    image:{
        width: CARD.WIDTH,
        height: CARD.HEIGHT,
        borderRadius: CARD.BORDER_RADIUS,
    },
    gradient: {
        flex:1,
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        height:160,
        borderRadius:CARD.BORDER_RADIUS,
    },
    name:{
        position:'absolute',
        bottom:22,
        left:22,
        fontWeight:'bold',
        fontSize: 36,
        color:'white'
    },
    choiceContainer:{
        position:'absolute',
        top:100,
    },
    likeContainer:{
        left:45,
        transform: [{rotate:'-30deg'}],
    },
    nopeContainer:{
        right:45,
        transform: [{rotate:'30deg'}],
    },
});