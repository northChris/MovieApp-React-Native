import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
export default class FAB extends Component {

state = { active: 'true'}

  render() {
    return (
      <Container>
        <Header />
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="left"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Button style={{ backgroundColor: '#34A34F' }}>
            </Button>
          </Fab>
        </View>
      </Container>
    );
  }
}
