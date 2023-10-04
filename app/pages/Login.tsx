import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";



function Login(): JSX.Element {

    const [mdp, setMdp] = useState();
    const [email, setEmail] = useState();

    return(
        <SafeAreaView>
            <Image style={styles.miniLogo} source={require("../front/img/mini_logo.png")}></Image>
            <View style={styles.formContenair}>
                <Text style={{textAlign:"center", fontSize:25, fontWeight:"bold"}}>Connexion</Text>
                <TextInput style={styles.textInput} placeholder={"E-mail"}
                           onChangeText={(text) => {
                               setEmail(text)
                           }}></TextInput>
                <TextInput style={styles.textInput} placeholder={"Mots de passe"}
                           onChangeText={(text) => {
                               setMdp(text)
                }}></TextInput>
                <TouchableOpacity
                    style={styles.suivantbutton}>
                        <Text style={styles.textButton}>Connexion</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    formContenair:{
        marginTop: 100,
    },
    miniLogo: {
        width: 75,
        height: 75,
    },
    suivantbutton:{
        backgroundColor: "#a2d2ff",
        padding: 15,
        margin: 100,
        marginTop: 150,
        borderRadius: 15,
    },
    textButton:{
        fontSize: 25,
        textAlign: "center"
    },
    textInput: {
        borderRadius: 15,
        padding: 10,
        margin: 15,
        fontSize: 15,
        backgroundColor: "#bde0fe",
        textAlign:"center",
    },
});

export default Login;