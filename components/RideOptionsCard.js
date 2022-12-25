import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native'
import { Image } from '@rneui/base';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
    },
    {
        id: "Uber-XL-456",
        title: "UberXL",
        multiplier: 1.2,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
    },
    {
        id: "Uber-LUX-789",
        title: "UberLUX",
        multiplier: 1.75,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png",
    },
];

// increase pricing if surge pricing is enabled
const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
        <View>
            <Text 
                style={tw`text-center text-xl -mt-8 p-2`}
                >
            Select a Ride - {travelTimeInformation?.distance.text}
            </Text>
            
            {/* back button */}
            <TouchableOpacity 
                onPress={() => navigation.navigate("NavigateCard")} 
                style={tw`absolute -mt-7 left-8 top-1 rounded-full`}
                >

                <Icon name="chevron-left" type="font-awesome" />
            </TouchableOpacity>
            
        </View>
      
        <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={( {item: { id, title, multiplier, image }, item }) => (
                <TouchableOpacity 
                    // store selected car information
                    onPress={() => setSelected(item)}
                    style={tw`flex-row justify-between items-center -py-1 px-5 ${id === selected?.id && "bg-gray-200"}`}
                    >
                    <Image 
                        style={{
                            width: 100,
                            height: 100,
                            resizeMode: "contain",
                        }}
                        source={{ uri: image }}
                    />
                    <View style={tw`-ml-6`}>
                        <Text style={tw`text-xl font-semibold`}>{title}</Text>
                        <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
                    </View>
                    <Text style={tw`text-xl`}>
                        {/* calculate pricing */}
                        {new Intl.NumberFormat('en-us', {
                            style: 'currency',
                            currency: 'USD'
                        }).format(
                            (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
                        )}
                        </Text>
                </TouchableOpacity>
            )}
        />

        {/* display ride option */}
        <View>
            <TouchableOpacity disabled={!selected} style={tw`bg-black py-1 m-3 bottom-2 ${!selected && "bg-gray-300"}`}>
                <Text style={tw`text-center text-white text-lg`}>Choose {selected?.title}</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})