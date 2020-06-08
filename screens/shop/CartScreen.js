import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';

const CartScreen = (props) => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount)
  console.log(cartTotalAmount)
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
