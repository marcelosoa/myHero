import { SafeAreaView, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import InputComponent from '../../Input';
import RadioComponent from '../../Radio';
import { useState } from 'react';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [password, confirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [idC, setidC] = useState('');
  const [selected, setSelected] = useState(0);

  function handleRegister() {

  }
  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
    }}>
      <Image style={styles.image} source={require('../../../assets/images/walking2.png')} />
  <InputComponent placeholder="nome completo"/>
  <InputComponent placeholder="senha"/>
  <InputComponent placeholder="confirmar senha"/>
  <InputComponent placeholder="email"/>
  <InputComponent placeholder="CPF/CNPJ"/>
  <RadioComponent
  selected={selected}
  options={['CPF', 'CNPJ']}
  horizontal={true}
  onChangeSelect={(option, index) => {
    setSelected(index);
  }}

  />
  <TouchableOpacity onPress={handleRegister} style={styles.textInput}>
    <Text style={styles.text}>Cadastrar-se</Text>
  </TouchableOpacity>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 60,
    marginTop: 20,
    paddingLeft: 20,
    marginHorizontal: 20,
    borderRadius: 9,
    backgroundColor: '#CBB279',
    borderColor: '##CBB279',
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  image: {
    width: 236,
    height: 198,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 95,
  },
  radio: {
    alignItems: 'center',
  },
});
