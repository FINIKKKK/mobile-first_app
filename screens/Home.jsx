import React from 'react';
import Post from '../components/Post';
import axios from 'axios';
import styled from "styled-components/native";
import {FlatList, TouchableOpacity, RefreshControl, StatusBar} from "react-native";


export const Home = ({navigation}) => {
    const [posts, setPosts] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    const onFetchPosts = () => {
        axios.get('https://freefakeapi.io/api/posts?limit=15').then(({data}) => {
            setPosts(data)
        })
    };

    React.useEffect(() => onFetchPosts())

    return (
        <FlatList
            style={{padding: 15}}
            refreshing={<RefreshControl refreshing={isLoading} onRefresh={onFetchPosts}/>}
            data={posts}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('post', {id: item.id, title: item.title})}>
                    <Post title={item.title} body={item.content} img={item.picture}/>
                </TouchableOpacity>)}
        />
    );
}