import React from "react";
import {Text, StyleSheet,Button,View, Image, TextInput, TouchableOpacity } from "react-native";
const LoginPage = ({navigation})=>{

    function navigate(){
        navigation.navigate("SignUpPage");
    
    }

    return(
        <View style={styles.mainView}>
           <View style={styles.TopView}>
           <Image style={styles.ImageStyle} source={{uri:'https://images.unsplash.com/photo-1635880522974-a152321ad617?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=892&q=80'}}/>
           </View>

           <View style={styles.BottomView}>
               <Text style={styles.Heading}>
                   Welcome {"\n"}
                   Back
               </Text>
               <View style={styles.FormView}>   
                  <TextInput placeholder={"Enter Email Address"} placeholderTextColor={"#fff"} style={styles.TextInput}/>
                  <TextInput placeholder={"Enter PassWord"} secureTextEntry={true} placeholderTextColor={"#fff"} style={styles.TextInput}/>
                  <TouchableOpacity style={styles.Button}> 
                      <Text style={styles.ButtonText}>Login</Text>
                  </TouchableOpacity>
               </View>
               <TouchableOpacity style={styles.TextButton} onPress={navigate}>
               <Text style={styles.SignUpText}>
                   Sign Up
               </Text>
               </TouchableOpacity>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
        marginTop:40,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#696969",
    },

    TopView:{
        width: "100%",
        height: "30%",
        backgroundColor: "#696969",
        justifyContent: "center",
        alignItems: "center",

    },
    BottomView:{
        width:"100%",
        height:"70%",
        backgroundColor: "#0000ff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    ImageStyle:{
    width: "50%",
    resizeMode: "contain", 
    },
    Heading:{
      color:"#fff",  
      fontSize: 40,
      fontWeight: "bold",
      marginLeft: 30,
      marginTop: 60,
    },
    FormView:{
        width:"100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },

    TextInput:{
        width: "90%",
        borderWidth: 1,
        borderColor: "#fff",
        height: 52,
        borderRadius: 10,
        paddingLeft: 5,
        marginTop: 20,
    },
    Button:{
        width:"90%",
        color: "#000",
        height: 52,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 20,
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
    },
    ButtonText:{
        fontWeight: "bold",
        fontSize: 18,
    },
    SignUpText:{
        color: "gray",
    },
    TextButton:{
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginTop: 20
    }

})

export default LoginPage