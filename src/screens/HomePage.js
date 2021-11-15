import React from 'react';
import {Dimensions,Image,SafeAreaView,StyleSheet,Text,View,} from 'react-native';
import {FlatList,ScrollView, TextInput, TouchableHighlight,TouchableOpacity,} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from "../consts/colors";
import categories from '../consts/categories'
import books from "../consts/books";
import BottomNavigator from './BottomNavigation';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
const image = {uri: "https://cdn.pixabay.com/photo/2018/03/19/18/20/tea-time-3240766__340.jpg"}

const HomePage = ({navigation}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((categories, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.dark
                    : COLORS.dark,
                ...style.categoryBtn,
              }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={categories.image}
                  style={{height: 35, width: 35, resizeMode:'center', borderRadius:15}}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.white,
                }}>
                {categories.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const Card = ({books}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsPage', books)}>
        <View style={style.card}>
          <View style={{alignItems: 'center', top: -40}}>
            <Image source={books.image} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{books.name}</Text>
          
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              ${books.price}
            </Text>
            <View style={style.addToCartBtn}>
              <Icon name="add" size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white, marginTop: 25}}>
      <View style={style.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28}}>Hello,</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
              Klugah
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color: COLORS.grey}}>
            What do you want to read?
          </Text>
        </View>
        <Image
          source={image}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search for a book"
          />
        </View>
        <View style={style.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={books}
        renderItem={({item}) => <Card books={item} />}
      />
          <BottomNavigator  navigation={navigation} />

    </View>

  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.dark,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default HomePage;