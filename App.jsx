import {View} from 'react-native';
import React from 'react';
import Post from './components/Post';
import axios from 'axios';


export default function App() {
    const [posts, setPosts] = React.useState([])
    React.useEffect(() => {
        axios.get('https://freefakeapi.io/api/posts?limit=15').then(({data}) => {
            setPosts(data)
        })
    })

    return (
        <View>
            {posts.map((post) => (
                <Post title={post.title} body={post.content} img={post.picture}/>
            ))}
        </View>
    );
}