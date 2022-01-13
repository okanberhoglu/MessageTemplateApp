import React from 'react';
import {View, Text} from 'react-native';
import MessageCard from './MessageCard';
import styles from './MessageList.style';

function MessageList(props) {
  return (
    <View style={styles.container}>
      {props.data.length > 0 && <Text style={styles.title}>Messages</Text>}
      {props.data.map(item => (
        <MessageCard data={item} set={props.set} key={item.id} />
      ))}
    </View>
  );
}

export default MessageList;
