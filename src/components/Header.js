import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) =>{
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width :0, height: 5 },
    shadowOpacity: 1,
    position: 'relative'
  },
  textStyle: {
    fontSize: 50
  }
};

export default Header;
