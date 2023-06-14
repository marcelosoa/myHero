import React, {useState} from 'react';

import {SafeAreaView} from 'react-native';
import RadioComponent from '../../Radio';
import { useDispatch } from 'react-redux';

export default function HomeScreen() {
  const [selected, setSelected] = useState(0);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <RadioComponent
        selected={selected}
        options={['CPF', 'CNPJ']}
        horizontal={true}
        onChangeSelect={(option, index) => {
          setSelected(index);
        }}
      />
    </SafeAreaView>
  );
}
