import { SafeAreaView } from 'react-native';
import InputComponent from '../../Input';

export default function RegisterScreen() {
  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
    }}>
  <InputComponent placeholder="Email"/>
  <InputComponent placeholder="Password"/>
  </SafeAreaView>
  );
}
