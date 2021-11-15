import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {Text, StyleSheet, View, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";

const SignUpPage = ({navigation})=>{
    return(
        <View>
       <ScrollView style={styles.BottomView}>
           <Text style={styles.Heading}>
               Create {"\n"}
               An Account
           </Text>
           <View style={styles.FormView}>   
              <TextInput placeholder={"Full Name"} placeholderTextColor={"black"} style={styles.TextInput}/>
              <TextInput placeholder={"Email Address"} placeholderTextColor={"black"} style={styles.TextInput}/>
              <TextInput placeholder={"Mobile"} placeholderTextColor={"black"} style={styles.TextInput}/>
              <TextInput placeholder={"Password"} secureTextEntry= {true} placeholderTextColor={"black"} style={styles.TextInput}/>
              <TextInput placeholder={"Confirm Password"} secureTextEntry= {true} placeholderTextColor={"black"} style={styles.TextInput}/>
              
              <TouchableOpacity style={styles.Button}> 
                  <Text style={styles.ButtonText}>Sign Up</Text>
              </TouchableOpacity>

              <TouchableOpacity >
                    <View style={styles.icons}> 
                  <FontAwesome name="facebook-square" size={24} color="black" />
                      <Text> Sign up with Facebook</Text>
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity >
                    <View style={styles.icons}> 
                    <Entypo name="google--with-circle" size={24} color="black" />
                      <Text> Sign up with Google</Text>
                      </View>
                  </TouchableOpacity>
        
           </View>

           <TouchableOpacity style={styles.TextButton} onPress= {() => {navigation.navigate("LoginPage"); }}>
           <Text style={styles.SignUpText}>
           <Text style={styles.login}>
                Have an account?</Text>
               Login
           </Text>
           </TouchableOpacity>
       </ScrollView> 
    </View>
)
}

const styles = StyleSheet.create({
BottomView:{
    width:"100%",
    height:"100%",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
},

Heading:{
    color:"black",  
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
    borderColor: "black",
    height: 52,
    borderRadius: 10,
    paddingLeft: 5,
    marginTop: 20,
},

Button:{
    width:"90%",
    color: "#000",
    height: 52,
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
},

ButtonText:{
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
},

Question:{
    color: "black",
    textAlign: "center", 
    fontWeight: "bold",
    fontSize: 18,
}, 

SignUpText:{
    color: "black",
},

TextButton:{
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 20,
},

login:{
    color: "black",
},
icons:{
    width: "60%",
    height: 35,
    borderWidth: 1,
    borderRadius:20,
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: "9%",
}

})

export default SignUpPage