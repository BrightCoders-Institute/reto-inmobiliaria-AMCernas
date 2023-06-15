import {Text, View, Image } from 'react-native';
import React from 'react';
import data from '../data/property.json'
import List from '../components/list';

const HomeScreen = () => {
  return (
      <View >
        <List info={data} />
      </View>
  );
}

export default HomeScreen;