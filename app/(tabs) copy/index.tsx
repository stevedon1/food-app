import SearchBar from '@/components/SearchBar';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import ProductCard from '@/components/ProductCard';
import LocationIcon from '@/components/LocationIcon';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingTop: 20, paddingHorizontal: 0, paddingBottom: 0 }}>
        <View style={styles.header}>
          <SearchBar />
          <LocationIcon />
        </View>

        <ProductCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Vertically center the items within the row
    justifyContent: "space-between", // Distribute items with equal space in between
    paddingHorizontal: 20,
    paddingLeft: 0, // Adds padding to the left and right sides
    marginTop: 20, // Adds some space from the top of the screen
  },
  locationIconContainer: {
    marginLeft: 10, // Space between SearchBar and LocationIcon
  },
});
