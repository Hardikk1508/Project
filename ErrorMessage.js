import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffcccc',
    borderRadius: 10,
    marginBottom: 10,
  },
  errorText: {
    color: '#ff0000',
    fontSize: 16,
  },
});

export default ErrorMessage;
