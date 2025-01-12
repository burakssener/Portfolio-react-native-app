import {View, Image, Text, StyleSheet} from "react-native";


export default function ProjectCard({image, name}){
  return (
      <View >
        <Image source={image}
        style={styles.image}/>
        <Text style={styles.image}>{name}</Text>
      </View>
  )   ;
} 

const styles = StyleSheet.create({
    image: {
        height: 150,
        aspectRatio: 16/9,
        borderRadius: 20,
        marginTop: 6 
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        marginTop: 8
    }
})