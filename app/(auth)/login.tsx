import TextInput from "@/components/TextInput";
import { Colors } from "@/constants/Colors";
import { styles } from "@/styles";
import { Pressable } from "react-native";
import { Text, View } from "react-native";

export default function Login() {
  return (
    <View
      style={{
         flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />

      <Pressable
        onPress={() => {
        }}
      >
        <Text>Login</Text>
      </Pressable>


    </View>
  );
}