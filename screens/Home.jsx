import {StatusBar} from 'react-native';
import React from 'react';
import Post from '../components/Post';
import axios from 'axios';
import styled from "styled-components/native";
import {FlatList, TouchableOpacity} from "react-native";


export const Home = ({navigation}) => {
    const [posts, setPosts] = React.useState([])
    React.useEffect(() => {
        axios.get('https://freefakeapi.io/api/posts?limit=15').then(({data}) => {
            setPosts(data)
        })
    })

    return (
        <>
            <StatusBar theme='auto'/>
            <FlatList
                data={posts}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('post')}>
                        <Post title={item.title} body={item.content} img={item.picture}/>
                    </TouchableOpacity>
                )}
            />
        </>
    );
}

const Posts = styled.ScrollView`
  padding: 10px;
`