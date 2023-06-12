import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Item from './item';

const List = ({info}) => {
    return (
      <View >  
        <FlatList
          data={info}
          renderItem={({ item }) => <Item inmueble={ item } />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };
  
  export default List;