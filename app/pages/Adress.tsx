import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import axios from 'axios';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

// @ts-ignore
function Adress({navigation,route}): JSX.Element {

    const {email,mdp,surname,name,phoneNumber} = route.params

    const [cp, setCp] = useState("")
    const [ville, setVille] = useState<String>("")
    const [num, setNum] = useState<String>("")
    const [voie, setVoie,] = useState<String>("")

    const Tab = createBottomTabNavigator();

    return (
        <SafeAreaView>
            <Text>{email}</Text>
            <Image style={styles.miniLogo} source={require("../front/img/mini_logo.png")}></Image>
            <View style={styles.formContenair}>
                <Text style={{textAlign: "center", fontSize: 25, fontWeight: "bold"}}>Mon Adresse :</Text>
                <TextInput style={styles.textInput} placeholder={"Numéro de la voie"} onChangeText={(text) => setNum(text)}></TextInput>
                <TextInput style={styles.textInput} placeholder={"Nom de la voie"} onChangeText={(text) => setVoie(text)}></TextInput>
                <TextInput style={styles.textInput} placeholder={"Saisir votre ville"} onChangeText={(text) => setVille(text)}></TextInput>
                <TextInput style={styles.textInput} placeholder={"Saisir votre code postal"} onChangeText={(text) => setCp(text)}></TextInput>
                <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={() => {
                        // Request Axios + changement de stack de page
                        axios.post('http://10.60.136.113:3000/user/singup', {
                            Utilisateur: name + surname,
                            Mail: email,
                            Numero: phoneNumber,
                            MDP: mdp,
                            Code_Postal:cp,
                            Ville: ville,
                            address: num + " " +voie + ville + cp,
                        })
                            .then(function (response) {
                                navigation.navigate("Home")
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    }}>
                    <Text style={styles.textButton}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    miniLogo: {
        width: 75,
        height: 75,
    },
    formContenair: {
        marginTop: 100,
    },
    textInput: {
        borderRadius: 15,
        padding: 10,
        margin: 15,
        fontSize: 15,
        backgroundColor: "#bde0fe",
        textAlign: "center",
    },
    signUpButton : {
        backgroundColor: "#a2d2ff",
        padding: 15,
        margin: 100,
        borderRadius: 15,
    },
    textButton: {
        fontSize: 25,
        textAlign: "center"
    },
});


export default Adress;