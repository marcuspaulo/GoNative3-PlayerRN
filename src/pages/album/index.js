import React from "react";

import { View, ImageBackground, Text, FlatList } from "react-native";
import { SongItem } from "components/SongItem";

import styles from "./styles";

const album = ({ navigation }) => {
  const { album } = navigation.state.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.thumbnail}
        source={{ uri: album.thumbnail }}
        blurRadius={5}
      >
        <View style={styles.thumbnailContent}>
          <Text style={styles.title}>{album.title}</Text>
          <Text style={styles.author}>{album.author}</Text>
        </View>
      </ImageBackground>

      <FlatList
        data={album.songs}
        keyExtractor={song => String(song.id)}
        renderItem={({ item }) => <SongItem song={item} />}
      />
    </View>
  );
};

album.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.album.title
});

export default album;
