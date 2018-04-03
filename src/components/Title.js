import React from 'react';
import { Text, View } from 'react-native';


const Title = (props) =>{
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.titleText}</Text>
    </View>
  );
};

  const styles = {
    viewStyle: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 30,
      position: 'relative',
    },
    textStyle: {
      fontSize: 30
    }
  };

export default Title;
