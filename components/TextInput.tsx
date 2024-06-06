import { Text, View } from "react-native";
import { TextInput as TI } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";

type TextInputProps = {
  error?: string;
} & React.ComponentProps<typeof TI>;

export default function TextInput(props: TextInputProps) {
  const { error, placeholder, ...rest } = props;
  return <View style={{
  }}>
    <Text>Email</Text>
    <TI {...rest} placeholder={placeholder} style={{
      borderColor: error ? "red" : "black",
      borderWidth: 1,
      padding: 10,
      width: 300,
      borderRadius: 5,
    }} />
    <Text style={{ color: "red" }}>{props.error}</Text>
  </View>
}


