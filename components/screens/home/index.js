import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import CircleComponent from '../../Circle';
import {CardComponent} from '../../Card';

export default function HomeScreen() {
  const nearYou = [
    {
      id: 1,
      name: 'Marcelo Soares',
      subtitle: 'professional petlover',
      price: '25,0',
      reviews: 1,
      range: 2,
      image:
        'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'João Brabo',
      subtitle: 'Hero Legend',
      price: '32,0',
      reviews: 3,
      range: 5,
      image:
        'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      name: 'Roberta Muguê',
      subtitle: 'Teacher',
      price: '42,0',
      reviews: 9,
      range: 9,
      image:
        'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  function renderItem({item}) {
    return <CardComponent
    image={item.image}
    subtitle={item.subtitle}
    reviews={item.reviews}
    name={item.name}
    range={item.range}
    price={item.price}
  />;
  }

  return (
    <>
      <Image
        style={styles.image}
        source={require('../../../assets/images/dog.png')}
      />
      <Text style={styles.hello}>Hello</Text>
      <TouchableOpacity style={styles.top}>
        <Text>Tamo aqui</Text>
      </TouchableOpacity>
      <View style={styles.walk}>
        <CircleComponent text="Walking" />
        <CircleComponent text="Training" />
        <CircleComponent text="Shop" />
      </View>
      <TouchableOpacity>
        <Text style={styles.find}>Proximos a você</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.flatList}
        data={nearYou}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity>
        <Text style={styles.all}>Ver Todos</Text>
      </TouchableOpacity>
      </>
  );
}

const styles = StyleSheet.create({
  image: {
  },
  hello: {
  },
  top: {},
  walk: {},
  find: {},
  all: {},
  flatList: {},
});
