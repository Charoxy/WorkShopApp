import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Adress from "./Adress";
import React, {useEffect, useState} from "react";
import axios from 'axios';
import {ImageBackground, SafeAreaView, StyleSheet, Text, View} from "react-native";
import PagerView from "react-native-pager-view";
import {Post} from "../models/model.post";

function Swipe() {

    const [post, setPost] = useState<Post[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://10.60.136.201:3000/post/cat/Sport',
        }).then(function (response) {

            setPost(response.data as Post[]);
            setLoading(false);
            console.log(post)
        });
    },[isLoading])

    return (
        <PagerView style={styles.pagerView} initialPage={0} orientation={"vertical"}>
            {post != undefined &&
                post.map((e) => {
                    return (
                        <ImageBackground source={require("../front/img/tennis.png")}>
                            <View style={styles.description} key={e.id}>
                                <Text style={{color:"white"}}>{e.Titre}</Text>
                                <Text style={{color:"white"}}>{e.Description}</Text>
                            </View>
                        </ImageBackground>
                    )
                })
            }
        </PagerView>
    )
}
const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    },
    description:{
        position: "absolute",
        width: "100%",
        padding: 10,
        bottom: "10%",
        backgroundColor:"rgba(0, 0, 0, 0.5)"
    },
    page: {
        flex: 1,
    },
});

export default Swipe;