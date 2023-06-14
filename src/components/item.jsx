import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon2 from 'react-native-vector-icons/Octicons'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from './icon';

const Item = ({ inmueble }) => {

    const [favorito, setFavorito] = useState(false);
  
    const toggleFavorito = () => {
      setFavorito(!favorito);
    };

    const buttonStyle = favorito ? styles.buttonFavorito : styles.buttonNormal;

    return (
        <View style={styles.container}>
          <View>
            <Image source={{uri: inmueble.image}}  style={styles.image} />
          </View>
          <View>
            <Text style={styles.nombre}>{inmueble.nombre}</Text>
            <Text style={styles.direccion}><Icon2 name="location" size={20}/>  {inmueble.direccion} </Text>
                <Icon inmueble={inmueble}/>
            <Text style={styles.costo}>${inmueble.costoMensual}/M</Text>
            <Text style={styles.calificacion}><Icon2 name="star-fill" size={15} color="#eeba00"/> {inmueble.calificacion}</Text>
            <View style={styles.favorito}>
              <TouchableOpacity onPress={toggleFavorito} style={buttonStyle}>
                <Text>{favorito ? <Icon3 name="cards-heart" size={20} color="white"/> : <Icon3 name="cards-heart" size={20}/>}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5fdff',
      marginBottom: 10,
      marginTop: 10,
      marginLeft: 30,
      marginRight: 30,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 170,
      borderRadius: 10,

    },
    image: {
      width: 150,
      height: 125,
      marginRight: 10,
      borderRadius: 10,
    },
    r: {
        width: 55,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    nombre: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    direccion: {
      marginBottom: 10,

    },
    costo: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
    },
    calificacion: {
      backgroundColor: '#fbedb7',
      width: 55,
      paddingTop: 4,
      paddingBottom: 4,
      textAlign: 'center',
      borderRadius: 10,
      fontWeight: 'bold',
      position: 'absolute',
      left: -110,
      top: 92,
    },
    buttonNormal: {
      backgroundColor: '#ccc',
      padding: 10,
      borderRadius: 60,
      width: 40,
      height: 40,
      alignItems: 'center',
    },
    buttonFavorito: {
      backgroundColor: '#00b074',
      padding: 10,
      borderRadius: 5,
      borderRadius: 60,
      width: 40,
      height: 40,
      alignItems: 'center',
    },
    favorito: {
      position: 'absolute',
      right: 5,
      bottom: -10,
    }
  });
  

export default Item;