import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const PostView = styled.View``;
const PostImage = styled.Image`
    width: 100px;
    height: 100px;
`;
const PostDetails = styled.View``;
const PostTitle = styled.Text`

`;

const PostBody = styled.Text`

`;

export default function Post({img, title, body}) {
  return (

      <PostView>
        <PostImage source={{uri: img}}/>
        <PostDetails>
<PostTitle>{title}</PostTitle>
<PostBody>{body}</PostBody>
        </PostDetails>
      </PostView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
