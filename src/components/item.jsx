import { View, Text, Image, StyleSheet, } from 'react-native';
import React, { useState } from 'react';
import Icon2 from 'react-native-vector-icons/Octicons'
import Icon from './icon';
import Favorite from './favorite';

const Item = ({ property }) => {
    return (
        <View style={styles.container}>
          <View>
            <Image source={{uri: property.image}}  style={styles.image} testID="property-image" />
          </View>
          <View>
            <Text style={styles.name}>{property.name}</Text>
            <Text style={styles.address}><Icon2 name="location" size={20}/>  {property.address} </Text>
              <Icon property={property}/>
            <Text style={styles.cost}>${property.monthlyCost}/M</Text>
            <Text style={styles.rating}><Icon2 name="star-fill" size={15} color="#eeba00"/> {property.rating}</Text>
              <Favorite/>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#e1eff2',
      marginBottom: 10,
      marginTop: 10,
      marginLeft: 15,
      marginRight: 15,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 180,
      borderRadius: 10,
    },
    image: {
      width: 125,
      height: 125,
      marginRight: 15,
      borderRadius: 10,
    },
    name: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    address: {
      marginBottom: 10,
    },
    cost: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
    },
    rating: {
      backgroundColor: '#fbedb7',
      width: 55,
      paddingTop: 4,
      paddingBottom: 4,
      textAlign: 'center',
      borderRadius: 10,
      fontWeight: 'bold',
      position: 'absolute',
      left: -105,
      top: 94,
    },
  });
  

export default Item;