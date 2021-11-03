import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";

const SignUpPage = ()=>{
    return(
      <View style={styles.mainView}>
         <View style={styles.TopView}>
        
         </View>

       <ScrollView style={styles.BottomView}>
           <Text style={styles.Heading}>
               Create {"\n"}
               An Account
           </Text>
           <View style={styles.FormView}>   
              <TextInput placeholder={"Full Name"} placeholderTextColor={"#fff"} style={styles.TextInput}/>
              <TextInput placeholder={"Email Address"} placeholderTextColor={"#fff"} style={styles.TextInput}/>
              <TextInput placeholder={"Mobile"} placeholderTextColor={"#fff"} style={styles.TextInput}/>
              <TextInput placeholder={"Password"} secureTextEntry= {true} placeholderTextColor={"#fff"} style={styles.TextInput}/>
              <TextInput placeholder={"Confirm Password"} secureTextEntry= {true} placeholderTextColor={"#fff"} style={styles.TextInput}/>
              
              <TouchableOpacity style={styles.Button}> 
                  <Text style={styles.ButtonText}>Sign Up</Text>
              </TouchableOpacity>
        
           </View>

           <TouchableOpacity style={styles.TextButton} onPress= { () => { Navigation.navigate("LoginPage"); }}>
           <Text style={styles.SignUpText}>
           <Text> Have an account?</Text>
               Login
           </Text>
           </TouchableOpacity>
       </ScrollView>
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
    backgroundColor: "#fff",
},

TopView:{
    width: "100%",
    height: "20%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",

},

BottomView:{
    width:"100%",
    height:"80%",
    backgroundColor: "#0000ff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

},

ImageStyle:{
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

Question:{
    color: "#fff",
    textAlign: "center", 
    fontWeight: "bold",
    fontSize: 18,
}, 

SignUpText:{
    color: "#fff",
},

TextButton:{
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 20,
},

ImageStyle:{
    width: "100%",
    height: 250,
    resizeMode: "contain",
},

})

export default SignUpPage