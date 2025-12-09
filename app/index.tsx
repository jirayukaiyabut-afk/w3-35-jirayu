import {useRouter} from "expo-router";
import {View, Text, Button, StyleSheet, TextInput} from "react-native";

export default function App(){

    const router = useRouter()

    return(
        <View style={styles.box}>
            <Text style={styles.textTitle}>HOME</Text>
            <Button title="ไปหน้า2" onPress={() => router.navigate('/rectangle')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor: "white",
        justifyContent:"center",
        alignItems:"center"
    },
    textTitle:{
     fontSize:22,
     fontWeight:"700", 
     color:"black"  
    }
})