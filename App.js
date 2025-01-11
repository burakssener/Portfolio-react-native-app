import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{
        uri: "https://wallpapershome.com/images/pages/pic_h/5737.jpg"
      }}
      style={{width: '100%', aspectRatio: 16/9}}
      />

      <Image source={require('./assets/pp.jpeg')}
        style={{
        width: 150, 
        height: 150, 
        borderRadius: 150, 
        borderWidth: 5, 
        borderColor: "white",
        marginTop: -75}}
      />

      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Burak Sener</Text>
      <Text>Software Engineer Entrepenuer</Text>
      <AntDesign name="github" size={24} color="black" />
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
