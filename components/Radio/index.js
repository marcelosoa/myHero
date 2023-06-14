import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function RadioComponent({
  options = [],
  horizontal = false,
  onChangeSelect,
  selected,
}) {
  return (
    <View style={horizontal ? styles.horizontal : styles.vertical}>
        {options.map((option, index) => (
            <TouchableOpacity
            onPress={() => onChangeSelect(option, index)}
            style={styles.optContainer}>
            <View style={styles.outlineCircle}>
                {selected === index && <View style={styles.innercircile} />}
            </View>
            <Text
            style={[styles.text, {color: selected === index ? '#444' : '#777'}]}
             >{option}</Text>
            </TouchableOpacity>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  optContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 3,
  },
  outlineCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#777',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innercircile: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#444',
  },
  text: {
    color: '#000',
    fontSize: 14,
    marginLeft: 7,
    fontWeight: '700',
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vertical: {

  },
});
