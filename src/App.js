import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './App.style';
import DatePick from './components/DateTimePicker/DatePicker';
import TimePick from './components/DateTimePicker/TimePicker';
import MessageContext from './components/MessageContext/MessageContext';
import MessageList from './components/MessageList/MessageList';
import {BaseManager} from './database/index';

function App() {
  const baseManager = new BaseManager();
  const [messageTitle, setMessageTitle] = React.useState();
  const [messageContext, setMessageContext] = React.useState();
  const [number, setNumber] = React.useState();
  const [date, setMessageDate] = React.useState(new Date(12345675321));
  const [data, setData] = React.useState([]);

  let okey = false;
  if (messageTitle) {
    if (number) {
      okey = true;
    }
  }

  const createListFunc = () => {
    baseManager
      .createTable()
      .then(val => {
        alert('table created');
        baseManager
          .getTable()
          .then(val => {
            setData(val);
          })
          .catch(err => {
            alert('false');
          });
      })
      .catch(err => {
        alert('false');
      });
  };

  const submitFunc = () => {
    if (okey === true) {
      if (isNaN(number)) {
        alert("Number can't contain letter");
      } else {
        baseManager
          .addTable(messageTitle, messageContext, date, number)
          .then(val => {
            baseManager
              .getTable()
              .then(val => {
                setData(val);
              })
              .catch(err => {
                alert('false');
              });
          })
          .catch(err => {
            alert('false');
          });
      }
    } else {
      alert('Please enter title and number');
    }
  };

  const getMessagesFunc = () => {
    baseManager
      .getTable()
      .then(val => {
        setData(val);
      })
      .catch(err => {
        alert('false');
      });
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Sigun</Text>
            <TouchableOpacity
              style={styles.createButton}
              onPress={() => createListFunc()}>
              <Text style={styles.getTextNEW}>CREATE NEW LIST</Text>
            </TouchableOpacity>
          </View>
          <MessageContext
            messageTitle={setMessageTitle}
            messageContext={setMessageContext}
            number={setNumber}
            date={date}
            onDateChange={setMessageDate}
          />
          <View style={styles.pickers}>
            <DatePick date={date} onChange={setMessageDate} />
            <TimePick date={date} onChange={setMessageDate} />
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              submitFunc();
            }}>
            <Text style={styles.getText}>SUBMIT</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.getButton}
              onPress={() => getMessagesFunc()}>
              <Text style={styles.getText}>GET MESSAGES</Text>
            </TouchableOpacity>
          </View>
          <MessageList data={data} set={setData} />
        </View>
      </ScrollView>
    </View>
  );
}

export default App;
