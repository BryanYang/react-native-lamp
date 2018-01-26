

import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import RadialGradient  from 'react-native-radial-gradient';
import All, { ColorPicker, toHsv, fromHsv } from 'react-native-color-picker';

import Lamp from './mods/lamp';


const GpropsDefault = {
  stroke: '#262832',
  fill: '#262832',
}

const GpropsOn = {
  stroke: '#c4d8d9',
  fill: '#c4d8d9',

}


export default class AwesomeProject extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      lampOn: false,
      color: '',
    }
    this.lampClick = this.lampClick.bind(this)
    this.colorChange = this.colorChange.bind(this);
  }

  lampClick(){
    this.setState({
      lampOn: !this.state.lampOn,
    })
  }

  colorChange(v){
    this.setState({
      color: fromHsv(v)
    })
  }

  render(){
    const { gprops } = this.state;
    return (
      <Container>
        <Header />
        <Content>
          <RadialGradient colors={['rgba(57,60,76,1)', 'rgba(36,36,46,1)']}>
            <View >
              {
                this.state.lampOn ? <ColorPicker
                onColorChange={this.colorChange}
                style={styles.colorPicker}
              /> : <View/>
              }
              <Lamp style={styles.lamp} On={this.state.lampOn} color={this.state.color} onPress={this.lampClick}/>
            </View>
          </RadialGradient>
          <View>
            </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );

  }

}

const styles = StyleSheet.create({
  lamp: {
    flex: 1,
    height: 840,
  },
  colorPicker:{
    flex:1,
    position: 'absolute',
    top: 118, 
    height: 300,
    width: '100%'
  }
})


