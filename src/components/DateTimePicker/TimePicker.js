import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from "./DateTimePicker.style";

function TimePick(props) {
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || props.date;
    setShow(Platform.OS === 'ios');
    props.onChange(currentDate);
  };
  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => setShow(true)} style={styles.pickButton}>
          <Text style={styles.text}>Pick time</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          value={props.date}
          mode="time"
          onChange={onChange}
          is24Hour={true}
          display="default"
        />
      )}
    </View>
  );
}



export default TimePick;
