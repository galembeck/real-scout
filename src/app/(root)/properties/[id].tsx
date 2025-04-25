import { Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

export default function Property() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Property {id}</Text>
    </View>
  );
}
