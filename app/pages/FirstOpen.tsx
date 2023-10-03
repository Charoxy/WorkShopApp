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

function FirstOpen(): JSX.Element {
    return(
        <View>
            <Image
                style={styles.logo}
                source={require('../front/img/logo.png')}
            />
            <View style={styles.buttoncontenair}>
                <TouchableOpacity style={styles.button}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Sign up</Text>
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
        display: "flex",
    },
    button:{
        margin: 15,
        padding: 10,
    }
});

export default FirstOpen
