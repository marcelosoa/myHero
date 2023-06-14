import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import InputComponent from '../../Input';

export default function LoginScreen() {
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/walking1.png')}
      />
      <KeyboardAvoidingView>
        <View style={styles.view}>
          <Text style={styles.text}>Sign In</Text>
          <Text style={styles.textTwo}>
            Bem-vindo de volta! Seu pet não pode esperar!
          </Text>
          <InputComponent placeholder="email" style={styles.inputcomponent} />
          <InputComponent
            placeholder="password"
            style={styles.inputcomponent}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textOpacity}>Conectar-se</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewBottom}>
          <TouchableOpacity>
            <Text style={styles.signUp}>Cadastrar-se</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 285,
    height: 304,
    left: 56,
    top: 26,
  },
  view: {
    marginTop: 25,
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
    gap: 16,
    width: 390,
    color: '#000',
  },
  button: {
    height: 60,
    marginTop: 15,
    paddingLeft: 20,
    marginHorizontal: 1,
    borderRadius: 8,
    backgroundColor: '#CBB279',
    borderColor: '#fff',
    borderWidth: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  textOpacity: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
  },
  text: {
    width: 60,
    height: 22,
    fontSize: 18,
    lineHeight: 22,
    color: '#081710',
    fontWeight: '700',
    fontStyle: 'normal',
  },
  inputcomponent: {
    height: 60,
    width: 100,
    marginHorizontal: 1,
  },
  viewBottom: {
    display: 'flex',
  },
  signUp: {
    color: '#CBB279',
    width: 105,
    height: 17,
    left: 18,
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
  },
  forgotPassword: {
    width: 105,
    height: 17,
    left: 251,
    position: 'absolute',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
  },
});
