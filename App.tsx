import React from "react";
import { Text , View , StyleSheet  } from "react-native";
import GeoLocation from "react-native-geolocation-service";
import { NavigationContainer , useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapView from "react-native-maps";
import {MapPage} from "./screens/map_view";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { ListView } from "./screens/list_view";

const Stack = createNativeStackNavigator();

const MyApp = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : true}}>
        <Stack.Screen name='MapPage' component={MapPage} options={{
          title : "Map Page" ,
          headerStyle : {
            backgroundColor : "#26f"
          },
          headerTintColor : "white" ,
          headerTitleStyle : {
            fontWeight : "700" ,
          }

        }}/>
        <Stack.Screen name='ListView' component={ListView} options={{
          title : "List Page" ,
          headerStyle : {
            backgroundColor : "#26f"
          },
          headerTintColor : "white" ,
          headerTitleStyle : {
            fontWeight : "700" ,
          }

        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default MyApp;
