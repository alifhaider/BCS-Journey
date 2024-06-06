import { Colors } from "@/constants/Colors";
import { styles } from "@/styles";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/home"  style={styles.primaryButton}>
        <Text>Go To Home</Text>
      </Link>
    </View>
  );
}
