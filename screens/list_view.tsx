import React from "react";
import { Text , View , StyleSheet , TouchableOpacity  , FlatList} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";


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
    </View>
  );
}








