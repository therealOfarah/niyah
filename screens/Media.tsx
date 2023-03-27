import { View, Text,Image, TouchableOpacity, ScrollView,StyleSheet } from "react-native";
import React from "react";
import { WebView } from 'react-native-webview';
import { podcastApple, recoApple } from "../data/Podcasts";
import { Link } from "@react-navigation/native";
import { Linking } from "react-native";
export default function Media() {
  return (
    <ScrollView>
      <WebView
          style={{ flex: 1 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsFullscreenVideo={true}
          allowsInlineMediaPlayback={true}
          source={{ uri: `https://www.youtube.com/embed/fMoUINuqdAQ` }}
          />
        <>
      {recoApple.map((podcast:any)=>
        <>
        <View style={{flex: 1, flexDirection: 'row'}}>
      <TouchableOpacity key={podcast.link} onPress={() => Linking.openURL(`${podcast.link}`)}>
        <Image style={styles.image} source={podcast.image} key={podcast.link} />
        <Text>{podcast.name}</Text>
      </TouchableOpacity>
        </View>
          </>
        )}
      </> 
    </ScrollView>
  );
}
const styles= StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
})