import react from 'React';
import { Flatlist, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <Flatlist
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
    />
  );
};

export default ProductsOverviewScreen;
