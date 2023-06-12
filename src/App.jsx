import { StyleSheet, Text, View, Image } from 'react-native';
import data from './data/inmueble.json'
import List from './components/list';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const App = () => {


  // console.log(trendAliments);
  // console.log(recentAliments);

  return (
      <View style={styles.container}>


        <List info={data} />

      </View>
  );

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
})

export default App;