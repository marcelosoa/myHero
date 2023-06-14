import React, {useState} from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Background } from '../../../Background';
import { Latest } from '../../../Latest';


export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Image
      style={styles.image}
     source={require('../../../assets/images/dog.png')}
      />
      <Text style={styles.hello}>
        Hello `user`
      </Text>
      <TouchableOpacity style={styles.top}>
        <Text>Tamo aqui</Text>
      </TouchableOpacity>
      <View style={styles.walk}>
        <TouchableOpacity style={styles.insideWalk}>
          <Text>Walking</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity >
        <Text style={styles.find}>Proximos á você</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.all}>Ver Todos</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Text style={styles.professional}>Ver Todos</Text>
      </TouchableOpacity> */}
      <Latest style={styles.professional}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 50,
    left: 15,
    top: 23,
  },
  hello: {
    position: 'absolute',
    width: 130,
    height: 34,
    left: 29,
    top: 101,
    fontSize: 20,
    fontWeight: 'bold',
  },
  top: {
    position: 'absolute',
    width: 332,
    height: 58,
    left: 29,
    top: 135,
    backgroundColor: '#CBB279',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  walk: {
    backgroundColor: '#617A55',
    width: 332,
    height: 134,
    left: 29,
    top: 180,
    borderRadius: 15,
    alignContent: 'center',
    alignItems: 'center',
  },
  insideWalk: {
    position: 'absolute',
    width: 63,
    height: 61,
    left: 15,
    top: 30,
    backgroundColor: '#D9D9D9',
  },
  find: {
    position: 'absolute',
    width: 115,
    height: 36,
    left: 28,
    top: 199,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 15,
    lineHeight: 19,
    color: '#617A55',
  },
  all: {
    position: 'absolute',
    width: 68,
    height: 17,
    left: 306,
    top: 199,
    color: '#CBB279',
  },
  professional: {
    position: 'absolute',
    width: 338,
    height: 75,
    left: 23,
    backgroundColor: 'green',
  },
});
