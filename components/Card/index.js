import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';

export function CardComponent({
  image,
  reviews,
  onSelected,
  price,
  range,
  name,
  subtitle,
}) {
  return (
    <TouchableOpacity style={styles.professional}>
        <Image
          style={{
            width: 54, height: 64,
          }}
          source={{uri: image}}
      />
      <View>
        <Text>{name}</Text>
        <Text>{subtitle}</Text>
        <Text>{reviews}</Text>
      </View>
      <View>
        <Text>{price}</Text>
        <Text>{range}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  professional: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    width: 338,
    height: 75,
    borderRadius: 2,
    backgroundColor: '#F6F1E9',
    flex: 1,
  },
});
