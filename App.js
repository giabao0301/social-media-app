import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Like from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-vector-icons/Ionicons';

const posts = [
  {
    id: '1',
    username: 'John Smith',
    avatar: require('./assets/images/user1.jpg'),
    image: require('./assets/images/image1.jpg'),
    caption: 'Enjoying a beautiful day at the beach! 🌊 🏝️',
    likes: 1024,
    comments: 96,
    shares: 32,
  },
  {
    id: '2',
    username: 'Mary Johnson',
    avatar: require('./assets/images/user2.jpg'),
    image: require('./assets/images/image2.jpg'),
    caption: 'Exploring ancient ruins in a distant land.🗺️🚩',
    likes: 872,
    comments: 76,
    shares: 46,
  },
  {
    id: '3',
    username: 'Michael Johnson',
    avatar: require('./assets/images/user3.jpg'),
    image: require('./assets/images/image3.jpg'),
    caption: 'Skiing is a great workout 🥽🎿',
    likes: 1934,
    comments: 88,
    shares: 34,
  },
  {
    id: '4',
    username: 'David Williams',
    avatar: require('./assets/images/user4.jpg'),
    image: require('./assets/images/image4.jpg'),
    caption: 'Having fun in Japan 🗼🍣',
    likes: 975,
    comments: 47,
    shares: 76,
  },
  {
    id: '5',
    username: 'James Brown',
    avatar: require('./assets/images/user5.jpg'),
    image: require('./assets/images/image5.jpg'),
    caption: 'Sunflower field at sunset 🌻🌄',
    likes: 465,
    comments: 62,
    shares: 44,
  },
  {
    id: '6',
    username: 'Traveler',
    avatar: require('./assets/images/user6.jpg'),
    image: require('./assets/images/image6.jpg'),
    caption: 'Golden Bridge in Da Nang, Vietnam ✈️🌉',
    likes: 894,
    comments: 66,
    shares: 75,
  },
  {
    id: '7',
    username: 'Sarah Wilson',
    avatar: require('./assets/images/user7.jpg'),
    image: require('./assets/images/image7.jpg'),
    caption: 'Tasty pizza with my friends 🍕🍕',
    likes: 1024,
    comments: 96,
    shares: 32,
  },
];

function App() {
  const [postItems, setPostItems] = useState([...posts]);
  const [pressed, setPressed] = useState({id: '', pressed: false});
  const onPress = key => {
    const updatedPosts = postItems.map(postItem => {
      if (postItem.id === key && pressed) {
        setPressed({
          id: postItem.id,
          pressed: true,
        });
        return {
          ...postItem,
          likes: postItem.likes + 1,
        };
      } else {
        return {
          ...postItem,
          likes: postItem.likes - 1,
        };
      }
    });
    setPostItems(updatedPosts);
  };

  return (
    <ScrollView style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.heading}>Social Media Feed</Text>
      </View>
      {postItems.map(post => (
        <View key={post.id} style={styles.post}>
          <View style={styles.user}>
            <Image style={styles.avatar} source={post.avatar} />
            <Text style={styles.username}>{post.username}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.caption}>{post.caption}</Text>
            <Image style={styles.image} source={post.image} />
          </View>
          <View style={styles.interaction}>
            <Text style={styles.interactionText}>{post.likes} Likes</Text>
            <Text style={styles.interactionText}>{post.comments} Comments</Text>
            <Text style={styles.interactionText}>{post.shares} Shares</Text>
          </View>
          <View style={styles.horizontalLine}></View>
          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.action}
              onPress={() => onPress(post.id)}>
              <Like
                style={[
                  styles.button,
                  {color: pressed.id === post.id ? '#177ffe' : '#606266'},
                ]}
                name={pressed.id === post.id ? 'like1' : 'like2'}
              />
              <Text
                style={[
                  styles.buttonText,
                  {color: pressed.id === post.id ? '#177ffe' : '#606266'},
                ]}>
                Like
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action}>
              <Comment style={styles.button} name="comment-outline" />
              <Text style={styles.buttonText}>Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action}>
              <Share style={styles.button} name="arrow-redo-outline" />
              <Text style={styles.buttonText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  header: {
    backgroundColor: '#3598DB',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  heading: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
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

export default App;
