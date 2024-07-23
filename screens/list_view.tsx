import React from "react";
import { Text , View , StyleSheet , TouchableOpacity  , FlatList} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";


export function ListView() {
  const route = useRoute();
  const navigation = useNavigation();
  const { results } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemDescription}>
        {item.formatted_address}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(item) => item.place_id}
        ListHeaderComponent={
          <Text style={styles.header}>Search Results</Text>
        }
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 16,
    color: '#555',
  },
  backButton: {
    padding: 16,
    backgroundColor: '#26f',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
  },
});







