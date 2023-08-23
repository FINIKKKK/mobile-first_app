import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "../screens/Home";
import {Post} from "../screens/Post";
import {NavigationContainer} from "@react-navigation/native";


const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home} options={{title: 'Новости'}}/>
                <Stack.Screen name="post" component={Post} options={{title: 'Статья'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}