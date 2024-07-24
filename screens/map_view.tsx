import React, { useEffect, useRef, useState } from "react";
import MapView, { LatLng, Marker } from "react-native-maps";
import { Text , View , StyleSheet, Button, ScrollView, TextInput, TouchableOpacity, Dimensions, Keyboard , Switch, SwitchComponent, Platform, PermissionsAndroid } from "react-native";
import GeoLocation from "react-native-geolocation-service";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
import GetLocation from "react-native-get-location";
import { ListView } from "./list_view";
import { styles } from "./styles";


const {width , height} = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_LAT = 28.46254;
const INITIAL_LNG = -81.397272; 

const INITIAL_POSITION ={
    latitude : INITIAL_LAT,
    longitude : INITIAL_LNG,
    latitudeDelta : LATITUDE_DELTA,
    longitudeDelta : LONGITUDE_DELTA
}



export function MapPage (){
    const [permissionGranter, setPermissionGranter] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const navigation = useNavigation();
    const [searchText ,setSearchText] = React.useState('');
    const [results , setResults] = useState<any[]>([]);
    const map = useRef<MapView | null>(null);
    useEffect(() => {
        _getLocationPermission();
    } , [])

    async function _getLocationPermission(){
        if(Platform.OS === 'android'){
            try {
                const granted = await PermissionsAndroid.request(
                  PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                  {
                    title: 'Location Permission',
                    message:
                      'Please allow Location Permission to continue...',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                  },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    setPermissionGranter(true);
                  _getCurrentLocation();
                } else {
                  console.log('Location permission denied');
                }
              } catch (err) {
                console.warn(err);
              }
        }

    }
    function _getCurrentLocation(){
        const LOC = GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 60000,
        })
        .then(location => {
            console.log("My Current Location =>",location);
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })
    }
    const searchPlaces = async() =>{
        if(!searchText.trim().length) return;
        const googleApisUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json";
        const input = searchText.trim();
        const loc = `${_getCurrentLocation}&radius=100`;
        const url = `${googleApisUrl}?query=${input}&location=${loc}&key=AIzaSyBeUtuhUFqrAQV_2RtJObtNMhKahsQ6t-k`; 
        try{
            const resp = await fetch(url);
            const json = await resp.json();
            //console.log(json);
            if(json && json.results){
                const coords : LatLng[] = [];
                for(const item of json.results){
                    //console.log(item.geometry);
                    coords.push({
                        latitude : item.geometry.location.lat,
                        longitude : item.geometry.location.lng,
                    })
                }
                setResults(json.results);
                if(coords.length){
                    map.current?.fitToCoordinates(coords,{
                        edgePadding :{
                            top :50,
                            left : 50 ,
                            right :50 ,
                            bottom :50
                        },
                        animated : true
                    })
                    Keyboard.dismiss();

                }
            }

        }catch(e){
            console.error(e);
        }
        };
        if(!permissionGranter)
            return(
        <View>
            <Text>
                Please allow location permission to continue...
            </Text>
        </View>
        );
    return(
        <View style = {{flex :1 , flexDirection : "column-reverse"}}> 
        <MapView style = {styles.map}  provider={PROVIDER_GOOGLE}  ref={map}
            initialRegion={INITIAL_POSITION}>
                {results.length ? results.map((item , i)=>{
                    const coord : LatLng ={
                        latitude : item.geometry.location.lat,
                        longitude : item.geometry.location.lng,
                    }
                    return <Marker
                    coordinate={coord}
                    key={`search=item-${i}`}
                    title={item.name}
                    description=""/>
                }):null}
                
            </MapView>
            <View style = {styles.searchBox}>
                <Text style={styles.searchPlaceText}>Search Place</Text>
                <TextInput style={styles.searchBoxField}
                onChangeText={setSearchText}
                autoCapitalize="sentences"
                value={searchText}
                placeholder="Search for locations"
                />
                <TouchableOpacity style={styles.buttonContainer} onPress={searchPlaces}>
                    <Text style ={styles.buttonLabel}>Search</Text>
                </TouchableOpacity>
            </View>
                <TouchableOpacity onPress={()=>navigation.navigate('ListView',{results})} style = {styles.doneButton}>
                    <Text style = {styles.buttonLabel}>Show list view</Text>
                </TouchableOpacity>
        </View>
    );
}
