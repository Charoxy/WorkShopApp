import {Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";

// @ts-ignore
function signUpform({ navigation , route }): JSX.Element {

    const [Name, setName] = useState("");
    const [Surname, setSurname] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");

    const {email, mdp} = route.params;

    return (
        <SafeAreaView>
            <Text>{email}</Text>
            <Image style={styles.miniLogo} source={require("../front/img/mini_logo.png")}></Image>
            <View style={styles.formContenair}>
                <Text style={{textAlign: "center", fontSize: 25, fontWeight: "bold"}}>Mes informations :</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder={"Nom"}
                        onChangeText={(text) => {
                            setSurname(text)
                        }}>
                    </TextInput>

                    <TextInput style={styles.textInput}
                               placeholder={"Prénom"}
                               onChangeText={(text) => {
                                setName(text)
                    }}>
                    </TextInput>


                <TextInput style={styles.textInput} placeholder={"06 XX XX XX XX"}
                           onChangeText={(text) => {
                            setphoneNumber(text)
                }}>
                </TextInput>

                <TouchableOpacity
                    style={styles.suivantbutton}
                    onPress={() => {
                        navigation.navigate('Adress', {
                            surname: Surname,
                            name: Name,
                            phoneNumber: phoneNumber,
                            email: email,
                            mdp: mdp,
                        })
                    }}>

                    <Text style={styles.textButton}>Suivant</Text>
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
    suivantbutton: {
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


export default signUpform;
