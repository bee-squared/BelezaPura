import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const CartScreen = (props) => {
  return (
    <View>
      <View>
        <Text>
          Total: <Text>${19.99}</Text>
          <Button title='Order Now' />
        </Text>
      </View>
      <Text>Cart Items</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CartScreen;
