import { View, Text, Linking, TouchableOpacity,StyleSheet,Image } from "react-native";
import React from "react";
import { podcastApple } from "../data/Podcasts";

export default function MorePodcasts() {
  return (
    <>
    {podcastApple.map((podcast:any)=>
      <>
      <View style={styles.container}>
    <TouchableOpacity key={podcast.link} onPress={() => Linking.openURL(`${podcast.link}`)}>
      <Image style={styles.image} source={podcast.image} key={podcast.link} />
      <Text>{podcast.name}</Text>
    </TouchableOpacity>
      </View>
        </>
      )}
    </>
  );
}


const styles= StyleSheet.create({
  container: {
    backgroundColor: "#7CA1B4",
    flex: 1,
    alignItems: "center", // ignore this - we'll come back to it
    justifyContent: "center", // ignore this - we'll come back to it
    flexDirection: "row",
  },
  image:{
    maxHeight:'35%',
    maxWidth:'65%',
    margin: 4,
    // flexBasis: '30%',
    // aspectRatio: 1,
    // margin: 5,
  },
})