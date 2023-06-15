import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export function CardComponent({style, image, people = [], onChangeSelected}) {
  return (
    <View>
      {people.map((option, index) => (
        <TouchableOpacity
          onPress={() => onChangeSelected(option, index)}
          style={[styles.professional, style]}
          image={image}>
          <View />
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  professional: {
    position: 'absolute',
    width: 338,
    height: 75,
    left: 23,
    top: 450,
    borderRadius: 2,
    backgroundColor: '#F6F1E9',
    flex: 1,
  },
});
