import React from 'react';
import {StatusBar, View, Text, StyleSheet, SafeAreaView, Image, Pressable,} 
from 'react-native';
import COLORS from '../consts/colors';

const image = {uri: "https://cdn.pixabay.com/photo/2018/03/19/18/20/tea-time-3240766__340.jpg"}
const WelcomePage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar translucent backgroundColor={COLORS.tranparent} />

      {/* WelcomePage Image */}
      <Image
        source={image}
        style={style.image}
      />

      {/* Indicator container */}
      <View style={style.indicatorContainer}>
        <View style={style.indicator} />
        <View style={style.indicator} />
        <View style={[style.indicator, style.indicatorActive]} />
      </View>

      {/* Title and text container */}
      <View style={{paddingHorizontal: 20, paddingTop: 20}}>
        {/* Title container */}
        <View>
          <Text style={style.title}>Find Your</Text>
          <Text style={style.title}>Desired Book</Text>
        </View>

        {/* Text container */}
        <View style={{marginTop: 10}}>
          <Text style={style.textStyle}>
            Get affordable ebooks in just a few clicks
          </Text>
          <Text style={style.textStyle}>visit in just a few clicks</Text>
        </View>
      </View>

      {/* Button container */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: 40,
        }}>
        {/* button */}
        <Pressable onPress={() => navigation.navigate('LoginPage')}>
          <View style={style.btn}>
            <Text style={{color: 'white'}}>Get Started</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  image: {
    height: 420,
    width: '100%',
    borderBottomLeftRadius: 100,
  },
  indicatorContainer: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  indicatorActive: {
    backgroundColor: COLORS.dark,
  },
  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: 'black',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 32, fontWeight: 'bold'},
  textStyle: {fontSize: 16, color: COLORS.grey},
});
export default WelcomePage;