import React, { useCallback, useRef } from "react";
import { Animated, TouchableWithoutFeedback } from "react-native";
import {FontAwesome} from '@expo/vector-icons';
import {styles} from './styles';


export default function  RoundButtton({name,size,color, onPress}) {

    const scale = useRef(new Animated.Value(1)).current;
    const animateScale = useCallback ((newValue)=> {
        Animated.spring(scale,{
            toValue:newValue,
            friction:4,
            useNativeDriver:true,
        }).start();
    }, 
    [scale]
    );

    return(
    <TouchableWithoutFeedback 
    onPressIn ={()=> animateScale(0.8)}
    delayLongPressIn={0}
    onPressOut ={()=> {
      animateScale(1);
      onPress();
    }}
    delayLongPressOut={110}
    >
      <Animated.View style={[styles.container, {transform: [{scale}]}]}>
        <FontAwesome name={name} size={size} color={color}/>
      </Animated.View>
    </TouchableWithoutFeedback>
    );

}