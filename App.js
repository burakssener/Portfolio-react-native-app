import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking, ActivityIndicator} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

import ProjectCard from "./ProjectCard";

 
export default function App() {

  const name = "Burak Sener"
  const title = "Software Engineer Entrepenuer"
  const getButtonName = () => {
    return "Contact me";
  };

  const links = {
    github: 'https://github.com/burakssener',
    linkedin: 'https://www.linkedin.com/in/burakssener/'
  };

  const onContactMe = () => {
    Linking.openURL("https://www.linkedin.com/in/burakssener/") 
  };

  const getIcons = () => {

    return <View style={{flexDirection: "row", gap: 15, marginTop: 7, marginBottom: 5}}>
    {links.github && <AntDesign name="github" size={24} color="black" />}
    {links.linkedin && <Entypo name="linkedin" size={24} color="black" />}
  </View>;

  };

  const isLoading = true;
  const likes = 10;

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
          </Text>

          <Text style={{fontWeight: "bold", fontSize: 20, marginTop: 5}}>
            Projects
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{gap: 10, padding: 5 }}>
          <ProjectCard name="Apple Cards" image= {require('./assets/projects/project1.jpeg')}/>
          <ProjectCard name="Trello" image= {require('./assets/projects/project2.jpeg')}/>
          <ProjectCard name="Flappy Bird" image= {require('./assets/projects/project3.jpeg')}/>
          <ProjectCard name="Todo app" image= {require('./assets/projects/project4.jpeg')}/>
          </ScrollView>


          
          
          <StatusBar style="light" />
        </View>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
  ); 


  // return (
  //   <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
  //     {<Text>Post has {likes || "no"} likes</Text> }
  //   </View>
  // );

  // return (
  //   <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
  //     {isLoading ? <ActivityIndicator/> : <Text>Hello World!!</Text> }
  //     {/*isLoading && <ActivityIndicator/> it does work because if it is false it returns false if it is true it return the second one*/}
  //   </View>
  // );

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
