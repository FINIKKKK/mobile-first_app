import ss from './Post.module.scss'
import {View, Text, Image} from 'react-native'
import {StyleSheet} from "react-native-web";
import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create({
    post: {
        marginBottom: 20,
    },
})

export default function Post({img, title, body}) {
    return (
        <View style={[ss.post, styles.post]}>
            <Image style={ss.img} source={{uri: img}}/>
            <View style={ss.info}>
                <Text style={ss.title}>{title}</Text>
                <Text style={ss.body} numberOfLines={3}>{body}</Text>
            </View>
        </View>
    );
}
