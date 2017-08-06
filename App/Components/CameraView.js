import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Camera from 'react-native-camera';

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.close} onPress={this.goBack.bind(this)}>X</Text>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </View>
    )
  }

  goBack() {
    this.props.navigation.goBack()
  }

  takePicture() {
    const options = {};
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  close: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#fff',
    color: '#000',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

