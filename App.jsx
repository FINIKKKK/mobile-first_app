import {StatusBar} from 'react-native';
import React from 'react';
import Post from './components/Post';
import axios from 'axios';
import styled from "styled-components/native";


export default function App() {
    const [posts, setPosts] = React.useState([])
    React.useEffect(() => {
        axios.get('https://freefakeapi.io/api/posts?limit=15').then(({data}) => {
            setPosts(data)
        })
    })

    return (
        <>
            <StatusBar theme='auto'/>
            <Posts>
                {posts.map((post) => (
                    <Post key={post.id} title={post.title} body={post.content} img={post.picture}/>
                ))}
            </Posts>
        </>
    );
}

const Posts = styled.ScrollView`
  padding: 10px;
`