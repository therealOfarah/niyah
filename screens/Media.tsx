import React, { useState, useCallback, useRef } from "react";
import { Alert, Button } from "react-native";
import { View, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function Media() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: string) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"iee2TATGMyI"}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
      <Text>Media</Text>
    </View>
  );
}
