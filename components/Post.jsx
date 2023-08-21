import ss from './Post.module.scss'
import {View, Text, Image} from 'react-native'

export default function Post({img, title, body}) {
    return (
        <View style={ss.post}>
            <Image style={ss.img} source={{uri: img}}/>
            <View style={ss.info}>
                <Text style={ss.title}>{title}</Text>
                <Text style={ss.body} numberOfLines={3}>{body}</Text>
            </View>
        </View>
    );
}
