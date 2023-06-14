import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
export function Latest({text, style}) {
  return (
    <TouchableOpacity style={[styles.professional, style]}>
      <View>{text}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  professional: {
    position: 'absolute',
    width: 338,
    height: 75,
    left: 23,
    top: 250,
    borderRadius: 2,
    backgroundColor: '#F6F1E9',
  },
});
