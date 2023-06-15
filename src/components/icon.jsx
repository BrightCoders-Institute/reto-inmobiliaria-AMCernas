import { View, Text, StyleSheet, } from 'react-native';
import React, { useState } from 'react';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'

const Icon = ({property}) => {
    return (
      <View style={styles.row}>
            <Text style={styles.iconStyle}><Icon3 name="bed-king-outline" size={20}/> {property.room }</Text>
            <Text style={styles.iconStyle}><Icon3 name="shower" size={20}/> {property.bathroom}</Text>
            <Text style={styles.iconStyle}><Icon3 name="vector-square" size={20}/> {property.area} ft²</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    iconStyle: {
        width: 70,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
export default Icon;