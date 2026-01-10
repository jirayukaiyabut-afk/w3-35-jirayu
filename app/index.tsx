import {useRouter} from "expo-router";
import {View, Text, Button, StyleSheet, TextInput} from "react-native";

export default function App(){

    const router = useRouter()

    return(
        <View style={styles.box}>
             <Text>OOOOOOOOO</Text>
             <Text>(+=I=+-----------------------------(G)------------------------------+=I=+)</Text>
            <Text style={styles.textTitle}>HOME</Text>
            <Button title="ไปที่คำนวนพื้นที่สีเหลี่ยม" onPress={() => router.navigate('/rectangle')}/>
                 <Text>(+=I=+-----------------------------(U)------------------------------+=I=+)</Text>
            <Button title="ไปที่คำนวนองศา" onPress={() => router.navigate('/ fahrenheit')}/> 
            <Text>(+=I=+-----------------------------(S)------------------------------+=I=+)</Text> 
            <Text>OOOOOOOOO</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        gap:15,
        flex: 1,
        backgroundColor: "lightblue",
        justifyContent:"center",
        alignItems:"center"
    },
    textTitle:{
     fontSize:22,
     fontWeight:"700", 
     color:"blue"  
    }

    
})