import React from "react";
import { Text , View , StyleSheet  } from "react-native";
import GeoLocation from "react-native-geolocation-service";
import { NavigationContainer , useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapView from "react-native-maps";
import {MapPage} from "./screens/map_view";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Stack = createNativeStackNavigator();

const MyApp = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name='MapPage' component={MapPage}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default MyApp;
