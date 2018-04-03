import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import MovieList from './MovieList';
import MovieItems from './MovieItems';
import Input from './Input';
import MovieTemplate from './MovieTemplate';
import MenuBar from './MenuBar';

export default class CurrentList extends Component {
  const = {currentListStyles, movieListStyles, inputStyles} = styles
  state = { SearchCurrentList: '', movieTitle: 'batman', movieLocation: 'walmart', moviePrice: '$45', ownedList: 'Owned' }


  render () {
    return (
      <View style={styles.currentListStyles}>
      <View>
        <Input
          placeholder="Movie"
          label="Search:"
          value={this.state.text}
          onChangeText={SearchCurrentList => this.setState({ SearchCurrentList })}
        />
      </View>
      <View style={styles.scrollViewContainerStyle}>
      <ScrollView style={styles.scrollViewStyle} snapToAlignment='end'>
        <MovieList style={styles.movieListStyles}>
          <MovieItems>
            <MovieTemplate movieTitle={this.state.movieTitle} movieLocation={this.state.movieLocation} moviePrice={this.state.moviePrice}/>
          </MovieItems>
          <MovieItems>
            <MovieTemplate movieTitle={this.state.movieTitle} movieLocation={this.state.movieLocation} moviePrice={this.state.moviePrice}/>
          </MovieItems><MovieItems>
            <MovieTemplate movieTitle={this.state.movieTitle} movieLocation={this.state.movieLocation} moviePrice={this.state.moviePrice}/>
          </MovieItems><MovieItems>
            <MovieTemplate movieTitle={this.state.movieTitle} movieLocation={this.state.movieLocation} moviePrice={this.state.moviePrice}/>
          </MovieItems><MovieItems>
            <MovieTemplate movieTitle={this.state.movieTitle} movieLocation={this.state.movieLocation} moviePrice={this.state.moviePrice}/>
          </MovieItems><MovieItems>
            <MovieTemplate movieTitle={this.state.movieTitle} movieLocation={this.state.movieLocation} moviePrice={this.state.moviePrice}/>
          </MovieItems><MovieItems>
            <MovieTemplate movieTitle={this.state.movieTitle} movieLocation={this.state.movieLocation} moviePrice={this.state.moviePrice}/>
          </MovieItems><MovieItems>
            <MovieTemplate movieTitle={this.state.movieTitle} movieLocation={this.state.movieLocation} moviePrice={this.state.moviePrice}/>
          </MovieItems><MovieItems>
            <MovieTemplate movieTitle={this.state.movieTitle} movieLocation={this.state.movieLocation} moviePrice={this.state.moviePrice}/>
          </MovieItems>
        </MovieList>
        </ScrollView>
        </View>
        </View>
    );
  }
};

const styles = {
  currentListStyles: {
  },
  movieListStyles: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  inputStyles: {
    flexDirection: 'row',
    padding: 0,
    alignSelf: 'stretch'
  },
  scrollViewStyle:{
    alignSelf: 'center',
    flexDirection: 'column',
  },
  scrollViewContainerStyle: {
    height: 500
  }

};
