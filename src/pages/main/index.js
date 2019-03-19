import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StatusBar, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as AlbumsActions } from "store/ducks/albums";

import AlbumItem from "./components/AlbumItem";
import styles from "./styles";

import { colors } from "../../styles";

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Sua Biblioteca",
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerRight: (
      <TouchableOpacity
        style={styles.headerRight}
        onPress={() => navigation.navigate("Search")}
      >
        <Icon name="search" size={24} color={colors.white} />
      </TouchableOpacity>
    )
  });

  static propTypes = {
    navigation: PropTypes.shape({
      naviage: PropTypes.func
    }).isRequired,
    getAlbumsRequest: PropTypes.func.isRequired,
    albums: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number
        })
      )
    }).isRequired
  };

  componentDidMount() {
    this.props.getAlbumsRequest();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <FlatList
          data={this.props.albums.data}
          keyExtractor={album => String(album.id)}
          renderItem={({ item }) => (
            <AlbumItem
              onPress={() =>
                this.props.navigation.navigate("Album", { album: item })
              }
              album={item}
            />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AlbumsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
