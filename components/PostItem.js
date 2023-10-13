import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import Like from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-vector-icons/Ionicons';

function PostItem({data, onAddLike, onAddComment, onAddShare}) {
  const [pressed, setPressed] = useState(false);
  const handlePress = () => {
    setPressed(pressed => !pressed);
    onAddLike(pressed);
  };
  return (
    <View style={styles.post}>
      <View style={styles.user}>
        <Image style={styles.avatar} source={data.avatar} />
        <Text style={styles.username}>{data.username}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.caption}>{data.caption}</Text>
        <Image style={styles.image} source={data.image} />
      </View>
      <View style={styles.interaction}>
        <Text style={styles.interactionText}>{data.likes} Likes</Text>
        <Text style={styles.interactionText}>{data.comments} Comments</Text>
        <Text style={styles.interactionText}>{data.shares} Shares</Text>
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.action} onPress={() => handlePress()}>
          <Like
            style={[styles.button, {color: pressed ? '#177ffe' : '#606266'}]}
            name={pressed ? 'like1' : 'like2'}
          />
          <Text
            style={[
              styles.buttonText,
              {color: pressed ? '#177ffe' : '#606266'},
            ]}>
            Like
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action} onPress={onAddComment}>
          <Comment style={styles.button} name="comment-outline" />
          <Text style={styles.buttonText}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.action} onPress={onAddShare}>
          <Share style={styles.button} name="arrow-redo-outline" />
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  username: {
    color: '#000',
    fontSize: 16,
    marginHorizontal: 10,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  caption: {
    color: '#000',
    marginVertical: 10,
  },
  post: {
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 10,
  },
  user: {
    flexDirection: 'row',
    textAlign: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  interaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  interactionText: {
    fontSize: 12,
    color: '#999',
    padding: 10,
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    paddingRight: 0,
    color: '#606266',
    fontSize: 20,
  },
  buttonText: {
    padding: 10,
    fontSize: 12,
    fontWeight: 'bold',
    paddingLeft: 6,
    color: '#606266',
  },
});

export default PostItem;
