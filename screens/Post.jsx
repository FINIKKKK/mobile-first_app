import React from 'react';
import {Image, Text, View} from "react-native";
import ss from '../components/Post.module.scss'
import axios from "axios";


export const Post = ({route, navigation}) => {
    const {id, title} = route.params
    const [post, setPost] = React.useState(null)
    React.useEffect(() => {
        navigation.setOptions({title})
        axios.get(`https://freefakeapi.io/api/posts/${id}`).then(({data}) => {
            setPost(data)
        })
    })

    return (
        <View style={ss.full_post}>
            <Image source={{uri: post?.picture}} style={ss.full_post_img}/>
            <Text style={ss.title}>{post?.title}</Text>
            <Text style={ss.full_post_text}>{post?.content}</Text>
        </View>
    );
}