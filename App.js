import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TextInput, Button, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import axios from 'axios';

// Map weather conditions to GIFs
const weatherGifs = {
  Clear: require('./assets/animations/Clear.gif'),
  Rain: require('./assets/animations/Rain.gif'),
  Haze: require('./assets/animations/Haze.gif'),
  Snow: require('./assets/animations/Snow.gif'),
  Cloud: require('./assets/animations/Cloud.gif'),
  Defaulti: require('./assets/animations/Defaulti.gif'), // Fallback GIF
};

const API_KEY = '12ba4b343dd0c1d34233fdb504c11f39';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [temp, setTemp] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    setError(null); // Reset errors before fetching
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data.weather[0].main);
      setFeelsLike(response.data.main.feels_like);
      setTemp(response.data.main.temp);
    } catch (err) {
      setError('City not found or unable to fetch weather.');
      setWeather(null); // Reset weather on error
    }
  };

  // Select the appropriate GIF based on the weather condition
  const dynamicGif = weatherGifs[weather] || weatherGifs.Defaulti;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gifContainer}>
        <ImageBackground source={dynamicGif} style={styles.gif} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Weather App</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter city name"
          placeholderTextColor="#aaaaaa"
          onChangeText={setCity}
          value={city}
        />
        <TouchableOpacity style={styles.button} onPress={getWeather}>
          <Text style={styles.buttonText}>Search Weather</Text>
        </TouchableOpacity>
      </View>
      {weather && (
        <Text style={styles.weatherInfo}>🌤 Current Weather: {weather}</Text>
      )}
      {feelsLike && (
        <Text style={styles.weatherInfo}>🌡 Feels Like: {feelsLike}°C</Text>
      )}
      {temp && (
        <Text style={styles.weatherInfo}>🌡 Temperature: {temp}°C</Text>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1e3a5f', // Deep blue background
    padding: 20,
  },
  gifContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  gif: {
    width: 180,
    height: 180,
    borderRadius: 90, // Makes the GIF circular
    borderWidth: 2,
    borderColor: '#5f9ea0', // Light teal border
  },
  inputContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#f1c40f', // Golden yellow
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#5f9ea0', // Teal border
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#fff', // White background
    marginBottom: 15,
    color: '#333', // Dark text
    fontSize: 16,
  },
  button: {
    backgroundColor: '#f1c40f', // Golden yellow button
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e3a5f', // Matches the background
  },
  weatherInfo: {
    marginTop: 15,
    fontSize: 18,
    textAlign: 'center',
    color: '#f1c40f', // Golden yellow text
    fontWeight: '500',
  },
  error: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#e74c3c', // Red for error messages
  },
});

export default App;
