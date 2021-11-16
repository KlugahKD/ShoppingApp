import React from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import {Text, StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
const CheckOutPage = ({navigation})=>{

    function navigate(){
        navigation.navigate("CheckOutPage");
    
    }
    return(
        <View>
           <View style={styles.BottomView}>
               <Text style={styles.Heading}>
                   SUMMARY 
               </Text>

               
               <View style={styles.FormView}>  
                <Text>DO YOU HAVE A PROMO CODE? </Text> 
                  <TextInput placeholder={"PromoCode"} placeholderTextColor={"black"} style={styles.TextInput}/>
                  <TouchableOpacity style={styles.Button} onPress= {() => {navigation.navigate("HomePage");}}> 
                  
                  <Text style={styles.ButtonText}>Checkout</Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 50,
                  }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price  
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>$100.00</Text>
            </View>



                    <Text style={styles.ButtonText}>Checkout</Text>
                  

                  <TouchableOpacity >
                     <View style={styles.icons}> 
                    <FontAwesome5 name="paypal" size={24} color="black" />
                      <Text> Continue With Paypal</Text>
                      </View>
                  </TouchableOpacity>

                  <TouchableOpacity >
                    <View style={styles.icons}> 
                    <FontAwesome5 name="bitcoin" size={24} color="black" />
                      <Text> Pay With Botcoin</Text>
                      </View>
                  </TouchableOpacity>

                 </View>
           </View>
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
        color: "black",
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

    QuestionText:{
            color: "black",
            textAlign: "center", 
            fontWeight: "bold",
            fontSize: 18,
            
    },

    SignUpText:{
        color: "black",
        fontWeight: "bold"
    },
    TextButton:{
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginTop: 20
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

export default CheckOutPage