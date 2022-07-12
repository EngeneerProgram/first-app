import { StyleSheet,Button, Text, View, ScrollView, Image, TextInput } from 'react-native';
import React, { useState } from 'react';


const Cat = (props) =>{
    console.warn(props)
    const [isHungry, setIsHungry] = useState(true);
    return(
        <View>
            <Text>
                I am a cat, my name is {props.name} and i am {isHungry ? 'hungry' : 'full'}
            </Text>

            <Button
            onPress={() =>{
                setIsHungry(false);
            }}
            disabled ={!isHungry}
            title={isHungry ? 'dammi un pò di cibo per favore' : 'Grazie per avermi sfamato anche oggi'}
        
            
            />
        </View>
    )
}



const Cafe = ()=>{
    return (
        <>
        
        <Cat name="gigino"></Cat>
        <Cat name="gigietta"></Cat>
        </>
    )
}

export default Cafe;