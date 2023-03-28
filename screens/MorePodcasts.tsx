import { View, Text, Linking, TouchableOpacity,StyleSheet,Image, ScrollView } from "react-native";
import React from "react";
import { podcastApple } from "../data/Podcasts";

export default function MorePodcasts() {
  return (
    <>
    <ScrollView>

      <View style={styles.container}>
    {podcastApple.map((podcast:any)=>
      <>
        <TouchableOpacity key={podcast.link} onPress={() => Linking.openURL(`${podcast.link}`)}>
          <Image style={styles.image} source={podcast.image} key={podcast.link} />
          <Text>{podcast.name}</Text>
        </TouchableOpacity>
        </>
      )}
      </View>
      </ScrollView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(143, 172, 139)',
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 22,
    paddingLeft:'8%',
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
