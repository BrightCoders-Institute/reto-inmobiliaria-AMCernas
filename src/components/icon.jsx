import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/Octicons'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'

const Icon = ({inmueble}) => {
    return (
        <View style={styles.row}>
            <Text style={styles.r}><Icon3 name="bed-king-outline" size={20}/>  {inmueble.habitaciones }</Text>
            <Text style={styles.r}><Icon3 name="shower" size={20}/>  {inmueble.banios}</Text>
            <Text style={styles.r}><Icon3 name="home" size={20}/>  {inmueble.superficie}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    r: {
        width: 55,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
export default Icon;