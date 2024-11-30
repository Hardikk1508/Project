import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return <Text style={styles.error}>No weather data available.</Text>; // Error handling if no weather data
  }

  return (
    <ImageBackground 
      // source={require('./assets/background.png')} // Make sure this image exists or use a correct path
      style={styles.background}
      imageStyle={{ borderRadius: 10 }}
    >
      <View style={styles.container}>
        <Text style={styles.label}>🌡️ Temperature: {weather.temperature}°C</Text>
        <Text style={styles.label}>💧 Humidity: {weather.humidity}%</Text>
        <Text style={styles.label}>🌬️ Wind Speed: {weather.windSpeed} km/h</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 180,
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background for better contrast
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    fontWeight: '600',
  },
  error: {
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
    marginVertical: 20,
  },
});

export default WeatherDisplay;
