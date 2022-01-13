import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './MessageContext.style';


function MessageContext(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          placeholder="Title"
          style={styles.messageTitle}
          onChangeText={props.messageTitle}
        />
        <TextInput
          placeholder="Number"
          style={styles.number}
          onChangeText={props.number}
        />
      </View>
      <TextInput
        placeholder="Message"
        style={styles.messageContext}
        onChangeText={props.messageContext}
        multiline
      />
    </View>
  );
}

export default MessageContext;
