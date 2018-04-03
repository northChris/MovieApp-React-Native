import React from 'react';
import { View } from 'react-native';
import MenuOptions from './MenuOptions'

const MenuBar = (props) => {
  const { menuBarStyle } = styles;
  return(
    <View style={styles.menuBarStyle}>
      <MenuOptions ownedList={'Owned'} wantedList={'Wanted'} seenList={'Seen'}/>
    </View>
  );
};

const styles = {
  menuBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  }
};
export default MenuBar;
