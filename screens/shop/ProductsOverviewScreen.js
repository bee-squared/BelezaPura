import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => {
    return state.products.availableProducts;
  });
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => <View><Text>{itemData.item.title}</Text></View>}
    />
  );
};

export default ProductsOverviewScreen;
