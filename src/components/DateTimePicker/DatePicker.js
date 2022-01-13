import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from "./DateTimePicker.style";

function DatePick(props) {
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
          <Text style={styles.text}>Pick date</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          minimumDate={new Date()}
          value={props.date}
          mode="date"
          onChange={onChange}
          is24Hour={true}
          display="default"
        />
      )}
    </View>
  );
}

export default DatePick;
