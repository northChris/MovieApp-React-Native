import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MovieTemplate = (props) =>{
  return (
    <View style={styles.templateStyle}>
      <Text>{props.movieTitle}</Text>
      <Text>{props.movieLocation}</Text>
      <Text>{props.moviePrice}</Text>
    </View>
  );
};

const styles=StyleSheet.create({
  templateStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  }
});
export default MovieTemplate;
