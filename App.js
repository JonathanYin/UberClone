import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Keyboard, Platform } from 'react-native';
import { Provider } from "react-redux";
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    // redux is the data layer surrounding app 
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          {/* change iOS keyboard view to fit screen */}
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1}}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            {/* transition between screens via stack */}
            <Stack.Navigator>
              <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />

            <Stack.Screen
              name='MapScreen'
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />

            </Stack.Navigator>
          </KeyboardAvoidingView>
          
          {/* <HomeScreen /> */}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
    
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  