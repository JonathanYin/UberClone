import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
// import tw from "tailwind-react-native-classnames";
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

// import { GOOGLE_MAPS_APIKEY } from "@env";
// const { REACT_APP_GOOGLE_MAPS_APIKEY } = process.env;
// usually you would import this from your .env file, but it doesn't work for me :(
const REACT_APP_GOOGLE_MAPS_APIKEY = "AIzaSyBaaMs9V1IeBetjV5t2ECvSOxwmr-FKVSQ";

const HomeScreen = () => {
    const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image 
            style={{
                width: 100, 
                height: 100, 
                resizeMode: 'contain',
            }}
            source={{
                uri: "https://links.papareact.com/gzs",
            }}
            >

            </Image>

            <GooglePlacesAutocomplete 
                styles={{
                    container: {
                        flex: 0,
                    },
                    textInput: {
                        fontSize: 18,
                    },
                }}
                // on selection of location, fetch details from Google API
                onPress={(data, details = null) => {
                    // dispatch action into redux (data layer), and use selector to pull information from the data layer to use in component
                    // console.log(data)
                    // console.log(details)

                    // pass in object to dispatcher, with location details from API response
                    dispatch(setOrigin({
                        location: details.geometry.location,
                        description: data.description
                    }))
                    // set destination default to null
                    dispatch(setDestination(null))
                }}
                fetchDetails={true}
                returnKeyType={"search"}
                enablePoweredByContainer={false}
                minLength={2}
                // import Google Maps API key
                query={{
                    key: REACT_APP_GOOGLE_MAPS_APIKEY,
                    // key: GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }}
                placeholder="Where From?"
                // uses Google directory to search locations
                nearbyPlacesAPI="GooglePlacesSearch"
                // after 400ms, execute search
                debounce={400}
            />

            <NavOptions>
                
            </NavOptions>
        </View>

        {/* <Text style={tw`text-red-500 p-10`}>
            HomeScreen
        </Text> */}
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

});