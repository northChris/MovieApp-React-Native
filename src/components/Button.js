import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } =styles;
  return(
    <View style={styles.buttonViewStyles}>
    <TouchableOpacity onPress={ onPress } style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = {

  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonViewStyles: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
