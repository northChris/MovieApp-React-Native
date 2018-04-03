import React from 'react';
import { View } from 'react-native';

const MovieItems = (props) =>{
  return(
    <View style={styles.containerStyle}>
    {props.children}
    </View>
  );
};

const styles = {
  containerStyle:{
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    alignItems: 'center',
    marginBottom: 20
  }
}
export default MovieItems;
