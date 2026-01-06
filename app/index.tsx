import {useRouter} from "expo-router";
import {View, Text, Button, StyleSheet, TextInput} from "react-native";

export default function App(){

    const router = useRouter()

    return(
        <View style={styles.box}>
            <Text style={styles.textTitle}>HOME</Text>
            <Button title="ไปที่คำนวนพื้นที่สีเหลี่ยม" onPress={() => router.navigate('/rectangle')}/>
            <Button title="ไปที่คำนวนองศา" onPress={() => router.navigate('/ fahrenheit')}/> 
                
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        gap:15,
        flex: 1,
        backgroundColor: "white",
        justifyContent:"center",
        alignItems:"center"
    },
    textTitle:{
     fontSize:22,
     fontWeight:"700", 
     color:"white"  
    }
})