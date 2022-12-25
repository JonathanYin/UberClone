import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Map from "../components/Map";
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

  return (
    <View>

        {/* menu navigation button */}
        <TouchableOpacity 
            onPress={() => navigation.navigate("HomeScreen")}
            style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}
            >
            <Icon name="menu" />
        </TouchableOpacity>
        {/* split screen in two */}
        <View style={tw`h-1/2`}>
        {/* map screen */}
            <Map />
        </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
            {/* stack screens for ride options and navigation */}
            <Stack.Screen 
                name="NavigateCard"
                component={NavigateCard}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen 
                name="RideOptionsCard"
                component={RideOptionsCard}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})