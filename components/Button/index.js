import {TouchableOpacity, StyleSheet, Text} from 'react-native';

export default function ButtonComponent({style, text, onPress}) {
  return (
    <TouchableOpacity style={style} text={text} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
