import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

interface WatchlistProps {
  watchlist: string[];
  addCityToWatchlist: (city: string) => void;
  removeCityFromWatchlist: (city: string) => void;
  recheckWeather: (city: string) => void; // Function to recheck weather
}

const Watchlist: React.FC<WatchlistProps> = ({ watchlist, removeCityFromWatchlist, recheckWeather }) => {
  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity onPress={() => recheckWeather(item)} style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
      <TouchableOpacity onPress={() => removeCityFromWatchlist(item)} style={styles.removeButton}>
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Watchlist</Text>
      <FlatList
        data={watchlist}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        ListEmptyComponent={<Text style={styles.emptyText}>No favorite cities added yet.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
    flex: 1,
  },
  removeButton: {
    backgroundColor: '#ff5252',
    padding: 8,
    borderRadius: 5,
  },
  removeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#777',
    marginTop: 20,
  },
});

export default Watchlist;
