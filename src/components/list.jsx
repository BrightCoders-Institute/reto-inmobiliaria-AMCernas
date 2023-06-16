import React from 'react';
import { View, FlatList } from 'react-native';
import Item from './item';

const List = ({info}) => {
    return (
      <View testID="list-component">  
        <FlatList
          data={info}
          renderItem={({ item }) => <Item property={ item } />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  };
  
  export default List;