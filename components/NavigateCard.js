import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native'
import NavFavorites from './NavFavorites';
// import { GOOGLE_MAPS_APIKEY } from "@env";
// const { REACT_APP_GOOGLE_MAPS_APIKEY } = process.env;
// usually you would import this from your .env file, but it doesn't work for me :(
const REACT_APP_GOOGLE_MAPS_APIKEY = "AIzaSyAKh8z7N7Tfh_mLTh4jlSF2ZMyzlILzaDU";

const NavigateCard = () => {
    // hook, gives us react object
    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>choose destination</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete 
                placeholder="Where to?"
                styles={toInputBoxStyles}
                fetchDetails={true}
                returnKeyType={"search"}
                minLength={2}
                onPress={(data, details = null) => {
                    dispatch(
                        setDestination({
                            location: details.geometry.location,
                            description: data.description,
                        })
                    );

                    navigation.navigate("RideOptionsCard");
                }}
                enablePoweredByContainer={false}
                query={{
                    key: REACT_APP_GOOGLE_MAPS_APIKEY,
                    language: "en",
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
            />
        </View>
        <NavFavorites />
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});