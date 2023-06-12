import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const Item = ({ inmueble }) => {
    return (
        <View style={styles.container}>
          <View>
            <Image source={{uri: inmueble.image}}  style={styles.image} />
          </View>
          <View>
            <Text style={styles.nombre}>{inmueble.nombre}</Text>
            <Text>{inmueble.direccion}</Text>
            <View style={styles.row}>
                <Text style={styles.r}>{inmueble.habitaciones }</Text>
                <Text style={styles.r}>{inmueble.banios}</Text>
                <Text style={styles.r}>{inmueble.superficie}</Text>
            </View>
            <Text>{inmueble.costoMensual}</Text>
            <Text>{inmueble.calificacion}</Text>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5fdff',
      marginBottom: 20,
      marginTop: 20,
      marginLeft: 30,
      marginRight: 30,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
      borderRadius: 10,

    },
    image: {
      width: 150,
      height: 120,
      marginRight: 10,
      borderRadius: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    r: {
        width: 50,
    },
    nombre: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    }

  });
  

export default Item;