import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button';

const MenuOptions = (props) => {
  const { MenuOptionsStyle } = styles;
  return(
    <View style={styles.menuOptionsStyle}>
    <Button onPress={() => Linking.openURL(url)}>
      {props.ownedList}
    </Button>
    <Button onPress={() => Linking.openURL(url)}>
      {props.wantedList}
    </Button>
    <Button onPress={() => Linking.openURL(url)}>
      {props.seenList}
    </Button>

    </View>
  );

};

const styles = {
  menuOptionsStyle: {
    flexDirection: 'row',
    alignSelf: 'center'
  }
};
export default MenuOptions;
