import React, { Component } from 'react'
import { Button, Text, StyleSheet, View } from 'react-native'

export default class LaunchScreen extends Component {
  navigateToCamera() {
    this.props.navigation.navigate('Camera')
  }

  render () {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.navigateToCamera.bind(this)}
          title="Camera"
          color="#841584"
          style={{ height: 20 }}
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
