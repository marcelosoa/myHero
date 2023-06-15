import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import InputComponent from '../../Input';
import ButtonComponent from '../../Button/index';

export default function LoginScreen() {


  function handleCreateAccount() {

  }

  return (
    <SafeAreaView
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ffffff',
        height: '100%',
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
          <ButtonComponent text="Conectar-se" style={styles.button} />
        </View>
        <View style={styles.viewBottom}>
          <ButtonComponent style={styles.signUp} text="Cadastrar-se" onPress={handleCreateAccount}/>
          <ButtonComponent
            style={styles.forgotPassword}
            text="Esqueceu a senha"
          />
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
    backgroundColor: '#8d67e4',
    borderColor: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    color: '#fff',
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
    color: '#070902',
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
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  signUp: {
    position: 'absolute',
    color: '#070902',
    width: 105,
    height: 17,
    left: 18,
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
  },
  forgotPassword: {
    color: '#070902',
    width: 105,
    height: 17,
    left: 251,
    position: 'absolute',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
  },
});
