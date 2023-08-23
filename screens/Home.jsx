import React from 'react';
import Post from '../components/Post';
import axios from 'axios';
import {FlatList, TouchableOpacity, RefreshControl, StatusBar, Text} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faEye,
    faSearch,
    faBars,
    faSmile,
} from "@fortawesome/free-solid-svg-icons";


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
        <>
            <Text>fgfgf</Text>
            <FontAwesomeIcon icon={faEye} size={50} style={{ color: "red" }} />
            <FontAwesomeIcon icon={faSearch} size={50} style={{ color: "blue" }} />
            <FontAwesomeIcon icon={faBars} size={50} style={{ color: "black" }} />
            <FontAwesomeIcon icon={faSmile} size={50} style={{ color: "yellow" }} />
            <FlatList
                refreshing={<RefreshControl refreshing={isLoading} onRefresh={onFetchPosts}/>}
                data={posts}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('post', {id: item.id, title: item.title})}>
                        <Post title={item.title} body={item.content} img={item.picture}/>
                    </TouchableOpacity>)}
            />
        </>
    );
}