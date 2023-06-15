import React, {useState} from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import CircleComponent from '../../Circle';
import { CardComponent } from '../../Card';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Image
      style={styles.image}
     source={require('../../../assets/images/dog.png')}
      />
      <Text style={styles.hello}>
        Hello
      </Text>
      <TouchableOpacity style={styles.top}>
        <Text>Tamo aqui</Text>
      </TouchableOpacity>
      <View style={styles.walk}>
        <CircleComponent
        text="Walking"
        />
        <CircleComponent
        text="Training"
        />
        <CircleComponent
        text="Shop"
        />
      </View>
      <TouchableOpacity >
        <Text style={styles.find}>Proximos a você</Text>
      </TouchableOpacity>
      <CardComponent
      people={['Marcelo']}
      />
      <TouchableOpacity>
        <Text style={styles.all}>Ver Todos</Text>
      </TouchableOpacity>
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
    color: '#0b061e',
  },
  top: {
    position: 'absolute',
    width: 332,
    height: 58,
    left: 29,
    top: 135,
    backgroundColor: '#e6e1f9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    gap: 10,
  },
  walk: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#26156a',
    width: 332,
    height: 134,
    left: 29,
    top: 180,
    borderRadius: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  insideWalk: {
    position: 'absolute',
    width: 70,
    height: 70,
    left: 15,
    top: 30,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
    color: '#0b061e',
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#0b061e',
  },
  all: {
    position: 'absolute',
    width: 68,
    height: 17,
    left: 306,
    top: 199,
    color: '#0b061e',
  },
  professional: {
    position: 'absolute',
    width: 338,
    height: 75,
    left: 23,
  },
  safeArea: {
    backgroundColor: '#f4f2fc',
    height: '100%',
  },
});


/**
 *
 *--text: #ffffff;
--background: #15131b;
--primary-button: #8f6f61;
--secondary-button: #262131;
--accent: #385240;
 *
 */
