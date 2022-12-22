import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// 1 set up redux

export default function App() {
  return (
    // redux is the data layer surrounding app 
    <Provider store={store}>
      {/* <View style={styles.container}>
        <Text>Let's build Uber</Text>
      </View> */}
      <SafeAreaProvider>
     
      <HomeScreen />

      </SafeAreaProvider>
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
  