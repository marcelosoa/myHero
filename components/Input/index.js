import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import RadioComponent from '../Radio';

export default function InputComponent({placeholder}) {
  return (
    <View style={styles.container}>
      <TextInput
      placeholder={placeholder}
      style={styles.input}
      underlineColorAndroid="transparent"
      placeholderTextColor={'#7B8794'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
  },
  input: {
    height: 60,
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingLeft: 40,
    marginHorizontal: 20,
    borderRadius: 8,
    fontSize: 18,
    borderColor: '#E4E7EB',
    borderWidth: 1,
  },
  icon: {
    position: 'absolute',
    left: 30,
    top: 12,
  },
});
