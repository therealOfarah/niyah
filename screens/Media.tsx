import { View, Text,Image, TouchableOpacity, ScrollView,StyleSheet, Dimensions } from "react-native";
import React from "react";
import { WebView } from 'react-native-webview';
import {  recoApple } from "../data/Podcasts";
import { useNavigation } from "@react-navigation/native";
import Swiper from 'react-native-swiper';
import YouTube from 'react-native-youtube';
// import 
import { Linking } from "react-native";
export default function Media() {
  const navigation = useNavigation()
  const itemWidth = Dimensions.get('window').width / 4;
  return (
    <ScrollView style={{backgroundColor: 'rgb(143, 172, 139)',marginTop:'15%'}}>
        <Text  style={{color: 'black',fontSize:21}}>Podcast</Text>
        <Text onPress={()=>navigation.navigate("More Podcasts")} style={{color: 'blue',marginLeft:'75%'}}> More Podcast</Text>
        <View style={{flex: 1, flexDirection: 'row',}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} snapToInterval={itemWidth}>
      {recoApple.map((podcast:any) =>
    <TouchableOpacity key={podcast.link} onPress={() => Linking.openURL(`${podcast.link}`)}>
      <Image style={[styles.image, { width: itemWidth }]} source={podcast.image} key={podcast.link} />
      <Text>{podcast.name}</Text>
    </TouchableOpacity>
  )}
          </ScrollView >
        </View>
        <View>
          <Text  style={{color: 'black',fontSize:21, marginTop:"10%"}}>Videos</Text>

        </View>
    </ScrollView>
  );
}
const styles= StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:'15%'
  },
  swiper: {
    height: 200,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    marginLeft:'9%'
  },
  
})