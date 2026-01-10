import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function fahrenheit(){

const [c, setc] = useState(0)
const [Fahrenheit, setfahrenHeit] = useState(0)

function fahrenheit(){
    var result = 5/9 * (Fahrenheit-32)
    setc(result)
}

    return(
        <View style={styles.box}>
            <Text>(+=I=+-----------------------------(G)------------------------------+=I=+)</Text>
            <Text style={styles.textTitle}>คำนวนฟาเรนไฮต์เป็นเซลเซียส</Text>
            
            <Text>ฟาเรนไฮต์ คือ {Fahrenheit} F ํ</Text>
            <Text>เซลเซียส คือ {c.toFixed(3)} C ํ</Text>
         <Text>+=I=+-----------------------------(U)------------------------------+=I=+</Text>
            <TextInput 
            style={styles.TextInput} 
            placeholder="กรอกจำนวนฟาเรนไฮต์" 
            placeholderTextColor="gray"
            value={Fahrenheit.toString()}
            onChangeText={(f) => setfahrenHeit(Number(f))}
            />

            <Text>(+=I=+-----------------------------(S)------------------------------+=I=+)</Text>

            <Button title="คำนวนองศา" onPress={() => fahrenheit()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        gap:20,
        flex: 1,
        backgroundColor: "lightblue",
        justifyContent:"center",
        alignItems:"center"
    },
    textTitle:{
     fontSize:22,
     fontWeight:"700", 
     color:"black"  
    },
       TextInput:{
        borderWidth: 1,
        borderColor: "black",
        width: "80%",
        borderRadius: 20
    }
})