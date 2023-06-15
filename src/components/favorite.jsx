import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'

const Favorite = ({ property }) => {
    const [favorito, setFavorito] = useState(false);
  
    const toggleFavorito = () => {
      setFavorito(!favorito);
    };
    const buttonStyle = favorito ? styles.buttonFavorito : styles.buttonNormal;

    return(
      <View style={styles.favorito}>
        <TouchableOpacity onPress={toggleFavorito} style={buttonStyle}>
          <Text>{favorito ? <Icon3 name="cards-heart" size={20} color="white"/> : <Icon3 name="cards-heart" size={20}/>}</Text>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
    buttonNormal: {
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 60,
        width: 38,
        height: 38,
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
        bottom: -18,
      }
});

export default Favorite;