import {View, Image, Text} from "react-native";


export default function ProjectCard({image, name}){
  return (
      <View >
        <Image source={image}
        style={{
          height: 150,
          aspectRatio: 16/9,
          borderRadius: 20,
          marginTop: 6 
        }}/>
        <Text style={{
          textAlign: "center",
          fontSize: 16,
          marginTop: 8

        }}>{name}</Text>
      </View>
  )   ;
} 