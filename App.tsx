import {SafeAreaView, StatusBar ,StyleSheet} from 'react-native';
import { Home } from './src/screens/Home';


export default function App() {
  return(
    <SafeAreaView style={styles.container}>
      <Home />
      <StatusBar 
        barStyle='light-content' 
        backgroundColor="transparent" 
        translucent
      />
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
  },
});