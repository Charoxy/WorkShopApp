import {Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import Adress from "./Adress";

function Account({ navigation , route }): JSX.Element {



    return(
        <SafeAreaView>
            <Image style={styles.miniLogo} source={require("../front/img/mini_logo.png")}></Image>

            <View style={styles.profilImgcontenair}>
                <Image style={styles.profilImg} source={require("../front/img/pexels-andrea-piacquadio-3785079.jpg")}></Image>
            </View>
            <Text style={{color:"black",textAlign:"center", fontSize:25, fontWeight:"bold"}}>NOM/PRÉNOM</Text>
            <View style={styles.addPostcontainer}>
                <Image style={styles.addPost} source={require("../front/img/plus-sign-transparent-free-png1.png")}></Image>
            </View>
        <View style={styles.Posts}>
            <Image style={styles.Mypost} source={require("../front/img/tennis.png")}></Image>
            <Image style={styles.Mypost} source={require("../front/img/pelouse.png")}></Image>
            <Image style={styles.Mypost} source={require("../front/img/cinema.png")}></Image>

        </View>

        </SafeAreaView>
)
}

const styles = StyleSheet.create({
    miniLogo: {
        width: 75,
        height: 75,
    },

    profilImg: {
        width: 115,
        height: 115,
        borderRadius: 57,
    },
    addPostcontainer: {
        paddingTop: 50,
        paddingLeft:20,

    },

    profilImgcontenair: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    addPost: {
        width:20,
        height: 20,
    },

    Posts: {
        flexDirection: "row",
        paddingleft:20,
        paddingTop:70,

    },

    Mypost: {
        height: 150,
        width: 100,
        margin: 20,
    },




})

export default Account;