import React, {Component} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = {albums: []};

  componentWillMount() {
    axios
      .get('http://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => this.setState({albums: response.data}));
  }

  render() {
    return (
      <View>
        <Text>ahshahs</Text>
      </View>
    );
  }
}

export default AlbumList;
