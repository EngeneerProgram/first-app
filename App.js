import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import HeaderComponent from './Components/HeaderComponent';
import CatComponent from './Components/CatComponent'
import ScrollComponent from './Components/ScrollComponent'
export default function App() {
  return (

    
    <ScrollView>
   <HeaderComponent></HeaderComponent>
   <CatComponent></CatComponent>
   <ScrollComponent></ScrollComponent>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
