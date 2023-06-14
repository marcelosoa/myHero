import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default function InputComponent({placeholder, style}) {
  return (
    <View style={styles.container}>
      <TextInput
      placeholder={placeholder}
      style={[styles.input, style]}
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
    height: 45,
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingLeft: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    fontSize: 15,
    borderColor: '#E4E7EB',
    borderWidth: 1,
  },
  icon: {
    position: 'absolute',
    left: 30,
    top: 12,
  },
});
