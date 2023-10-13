import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import PostItem from './PostItem';

const postsData = [
  {
    id: '1',
    username: 'John Smith',
    avatar: require('../assets/images/user1.jpg'),
    image: require('../assets/images/image1.jpg'),
    caption: 'Enjoying a beautiful day at the beach! 🌊 🏝️',
    likes: 1024,
    comments: 96,
    shares: 32,
  },
  {
    id: '2',
    username: 'Mary Johnson',
    avatar: require('../assets/images/user2.jpg'),
    image: require('../assets/images/image2.jpg'),
    caption: 'Exploring ancient ruins in a distant land.🗺️🚩',
    likes: 872,
    comments: 76,
    shares: 46,
  },
  {
    id: '3',
    username: 'Michael Johnson',
    avatar: require('../assets/images/user3.jpg'),
    image: require('../assets/images/image3.jpg'),
    caption: 'Skiing is a great workout 🥽🎿',
    likes: 1934,
    comments: 88,
    shares: 34,
  },
  {
    id: '4',
    username: 'David Williams',
    avatar: require('../assets/images/user4.jpg'),
    image: require('../assets/images/image4.jpg'),
    caption: 'Having fun in Japan 🗼🍣',
    likes: 975,
    comments: 47,
    shares: 76,
  },
  {
    id: '5',
    username: 'James Brown',
    avatar: require('../assets/images/user5.jpg'),
    image: require('../assets/images/image5.jpg'),
    caption: 'Sunflower field at sunset 🌻🌄',
    likes: 465,
    comments: 62,
    shares: 44,
  },
  {
    id: '6',
    username: 'Traveler',
    avatar: require('../assets/images/user6.jpg'),
    image: require('../assets/images/image6.jpg'),
    caption: 'Golden Bridge in Da Nang, Vietnam ✈️🌉',
    likes: 894,
    comments: 66,
    shares: 75,
  },
  {
    id: '7',
    username: 'Sarah Wilson',
    avatar: require('../assets/images/user7.jpg'),
    image: require('../assets/images/image7.jpg'),
    caption: 'Tasty pizza with my friends 🍕🍕',
    likes: 1024,
    comments: 96,
    shares: 32,
  },
];

function HomeScreen() {
  const [posts, setPosts] = useState([...postsData]);

  const handleAddLike = (postId, pressed) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return pressed
          ? {...post, likes: post.likes - 1}
          : {...post, likes: post.likes + 1};
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleAddComment = postId => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: post.comments + 1,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleAddShare = postId => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          shares: post.shares + 1,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <ScrollView style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.heading}>Social Media Feed</Text>
      </View>
      {posts.map(post => (
        <PostItem
          key={post.id}
          data={post}
          onAddLike={pressed => handleAddLike(post.id, pressed)}
          onAddComment={() => handleAddComment(post.id)}
          onAddShare={() => handleAddShare(post.id)}
        />
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
});

export default HomeScreen;
