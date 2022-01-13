import React from 'react';
import styles from './MessageCard.style';
import {Text, TouchableOpacity, View} from 'react-native';
import {BaseManager} from '../../database';

function MessageCard(props) {
  const baseManager = new BaseManager();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.dataTitle}>{props.data.title}</Text>
        <Text style={styles.datad}>{props.data.number}</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.data}>{props.data.context}</Text>
      </View>
      <Text style={styles.datad}>{props.data.date}</Text>
      <View style={styles.deleteContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            baseManager
              .dropTable(props.data.id)
              .then(val => {
                alert('Deleted');
                baseManager
                  .getTable()
                  .then(val => {
                    props.set(val);
                  })
                  .catch(err => {
                    alert('false');
                  });
              })
              .catch(err => {
                alert('False');
              })
          }>
          <Text style={styles.deleteText}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MessageCard;
