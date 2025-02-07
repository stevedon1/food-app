import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { products } from "@/libs/products"; // Ensure correct path

export default function ProductCard() {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <View style={styles.card}>
          {/* Header - User Info */}
          <View style={styles.header}>
            <Image source={item.avatar} style={styles.avatar} />
            <Text style={styles.username}>{item.username}</Text>
          </View>

          {/* Post - Product Image */}
          <Image source={item.image} style={styles.postImage} />

            <View>
            {/* Footer - Product Name & Price */}
            <View style={styles.footer}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.price}>Ksh {item.price}</Text>
            </View>
            <View>
                <Text>Remaining: {item.units}</Text>
                <Text>Remaining: {item.negotiable}</Text>
            </View>
         </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: "100%",
    // paddingBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  footer: {
    flexDirection:"row",
    justifyContent:'space-between',
    padding: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    // color: "gray",
  },
});
