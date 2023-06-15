import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import InputComponent from '../../Input';
import RadioComponent from '../../Radio';
import {useState} from 'react';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [password, confirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [idC, setidC] = useState('');
  const [selected, setSelected] = useState(0);

  function handleRegister() {}
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#ffffff',
      }}>
      <KeyboardAvoidingView>
        <Image
          style={styles.image}
          source={require('../../../assets/images/walking2.png')}
        />
        <InputComponent placeholder="nome completo" key={1}/>
        <InputComponent placeholder="senha" key={2}/>
        <InputComponent placeholder="confirmar senha" key={3}/>
        <InputComponent placeholder="email" key={4}/>
        <InputComponent placeholder="CPF/CNPJ" key={5}/>
        <RadioComponent
        selected={selected}
        options={['CPF', 'CNPJ']}
        horizontal={true}
        onChangeSelect={(option, index) => {
          setSelected(index);
        }}
      />
      </KeyboardAvoidingView>

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
    borderRadius: 8,
    backgroundColor: '#8d67e4',
    borderColor: '#fff',
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    color: '#070902',
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
