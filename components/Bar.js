import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  }
});
const Bar = (props) => {
  return (
    <View style={ {backgroundColor: props.color, padding: 80} }>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

export default Bar