import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
const WelcomePage = ({navigation})=>{

    function navigate(){
        navigation.navigate("LoginPage");
    
    }

    return(
        <View>
        <Image style={styles.ImageStyle} source={{uri:'https://images.unsplash.com/photo-1635880522974-a152321ad617?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=892&q=80'}}/>
        <TouchableOpacity style={styles.TextButton} onPress={navigate}>
               <Text style={styles.GetStartedText}>
                   Get Started
               </Text>
               </TouchableOpacity>
         </View>
    )
}
const styles = StyleSheet.create({

ImageStyle:{
    width: "100%",
    height: "100%",

},

GetStartedText:{

},

})

export default WelcomePage