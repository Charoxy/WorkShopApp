import React from 'react';
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, TextInput, TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function FirstOpen({ navigation }): JSX.Element {
    return(
        <View>
            <Image
                style={styles.logo}
                source={require('../front/img/logo.png')}
            />

            <View style={styles.buttoncontenair}>

                <TouchableOpacity style={styles.button}>
                    <Text
                        style={styles.textButton}
                        onPress={() => {
                            navigation.navigate("Login")
                        }}
                    >Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text
                        style={styles.textButton}
                        onPress={() => {
                              navigation.navigate("SignUp")
                        }}>
                        Sign up</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        flexDirection: "row",
        height: "50%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttoncontenair:{
        marginTop: "40%",
        display: "flex",
    },
    textButton:{
        fontSize: 25,
        textAlign: "center",
    },
    button:{
        borderRadius: 10,
        margin: 15,
        padding: 10,
        backgroundColor: "#a2d2ff",
    }
});

export default FirstOpen
