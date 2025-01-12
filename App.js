import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
 
export default function App() {

  const name = "Burak Sener"
  const title = "Software Engineer Entrepenuer"
  const getButtonName = () => {
    return "Contact me";
  };
  const onContactMe = () => {
    Linking.openURL("https://www.linkedin.com/in/burakssener/") 
  };

  const getIcons = () => {

    return <View style={{flexDirection: "row", gap: 15, marginTop: 7, marginBottom: 5}}>
    <AntDesign name="github" size={24} color="black" />
    <Entypo name="linkedin" size={24} color="black" />
  </View>;

  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom "]}> 
        <ScrollView showsVerticalScrollIndicator={false}>
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

          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{name}</Text>
          <Text>{title}</Text>
          
          {getIcons()}
          
          <Button title = {getButtonName()} onPress={() => onContactMe()}/>
          <Text style={{ padding: 10, fontSize: 16 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam
            aliquam sem et tortor consequat id porta nibh. Pellentesque nec
            nam aliquam sem. Placerat duis ultricies lacus sed. Non curabitur
            gravida arcu ac tortor dignissim convallis aenean. Amet nisl purus
            in mollis nunc. Vel elit scelerisque mauris pellentesque pulvinar
            pellentesque. Sagittis orci a scelerisque purus semper eget duis
            at tellus. Sed libero enim sed faucibus turpis in eu mi bibendum.
            Duis at consectetur lorem donec massa sapien faucibus et molestie.
            At ultrices mi tempus imperdiet nulla malesuada pellentesque elit
            eget. Purus sit amet volutpat consequat mauris nunc congue nisi
            vitae. Urna condimentum mattis pellentesque id nibh tortor id.
            Consequat id porta nibh venenatis. Lectus vestibulum mattis
            ullamcorper velit sed ullamcorper. Mauris a diam maecenas sed enim
            ut sem. Volutpat commodo sed egestas egestas fringilla phasellus.
            Turpis egestas integer eget aliquet nibh praesent tristique magna
            sit. Congue mauris rhoncus aenean vel elit scelerisque. Tellus
            integer feugiat scelerisque varius morbi enim. Consectetur a erat
            nam at. Bibendum arcu vitae elementum curabitur vitae nunc. Sit
            amet consectetur adipiscing elit. Rhoncus mattis rhoncus urna
            neque viverra justo. Malesuada pellentesque elit eget gravida.
            Vitae nunc sed velit dignissim sodales ut eu sem integer.
          </Text>
          
          
          <StatusBar style="light" />
        </View>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
  ); 

  // return (
  //   <SafeAreaProvider >
  //   <SafeAreaView edges={["top"]} style={{backgroundColor: "lightgray"}}>
  //     <View style={{
  //       height: '100%',
  //       backgroundColor: "palegreen",
  //       alignItems: "center"
  //     }}>
  //       <Text style={{fontSize: 65 , fontWeight: 'bold'}}>Title</Text>
  //       <Text style={{marginTop: "auto"}}>Footer</Text>
  //     </View>
  //   </SafeAreaView>
  //   </SafeAreaProvider>
  // )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
