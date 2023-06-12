import { StyleSheet, Text, View, Image } from 'react-native';
import data from './data/inmueble.json'
import List from './components/list';

const App = () => {


  // console.log(trendAliments);
  // console.log(recentAliments);

  return (
      <View >

        <Text>Inmuebles</Text>

        <List info={data} />

      </View>
  );

}

export default App;