import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import books from '../consts/books';

const DetailsPage = ({navigation, route}) => {
  const item = route.params;

  return (
    <SafeAreaView style={{backgroundColor: "white"}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={item.image} style={{height: 220, width: 220}} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: "white"}}>
              {item.name} {"\n"}
              {"\n"}
              {item.about}
            </Text>
          </View>
          <Text style={style.detailsText}>
            
          </Text>
    
          <TouchableOpacity onPress= {() => {navigation.navigate("Cart");}} >
          <View style={{...style.btnContainer, marginTop: 40, marginBottom: 40}}>
        <Text style={{...style.title, color: COLORS.dark}}>Add To Cart</Text>
      </View>
    </TouchableOpacity> 
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: "black",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },

  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: "white",
  },
  title: {color: COLORS.dark, fontWeight: 'bold', fontSize: 18},
  btnContainer: {
    backgroundColor: COLORS.white,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

});


export default DetailsPage;