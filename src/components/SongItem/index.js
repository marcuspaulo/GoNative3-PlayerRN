import React from "react";
import PropTyoes from "prop-types";

import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./styles";

const SongItem = ({ song }) => (
  <TouchableOpacity onPress={() => {}} style={styles.container}>
    <View style={styles.info}>
      <Text style={styles.title}>{song.title}</Text>
      <Text style={styles.author}>{song.author}</Text>
    </View>
    <Icon name="play-circle-outline" size={24} style={styles.play} />
  </TouchableOpacity>
);

SongItem.propTypes = {
  song: PropTyoes.shape({
    title: PropTyoes.string,
    author: PropTyoes.string
  }).isRequired
};
export default SongItem;
