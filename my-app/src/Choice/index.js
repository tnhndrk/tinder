import React from "react";
import { styles } from "./styles";
import { View,Text } from "react-native";
import { COLORS } from "../utils/constants";
export default function Choice({type}) {
     const color = COLORS [type];
    return(
        <View style={[styles.conteiner, {borderColor: color}]}>
            <Text style={[styles.text, { color }]}>{type}</Text>
        </View>
    );

}