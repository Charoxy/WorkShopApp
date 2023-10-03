import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";

function SignUp(): JSX.Element {
    return(
        <SafeAreaView>
            <Image style={styles.miniLogo} source={require("../front/img/mini_logo.png")}></Image>
            <View style={styles.formContenair}>
                <Text style={{textAlign:"center", fontSize:25, fontWeight:"bold"}}>Inscription</Text>
                <TextInput style={styles.textInput} placeholder={"E-mail"}></TextInput>
                <TextInput style={styles.textInput} placeholder={"Mots de passe"}></TextInput>
                <TextInput style={styles.textInput} placeholder={"Comfirmation de Mots de passe"}></TextInput>
                <TouchableOpacity style={styles.suivantbutton}><Text style={styles.textButton}>Suivant</Text></TouchableOpacity>
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

export default SignUp;