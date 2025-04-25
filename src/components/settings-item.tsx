import { Image, Text, TouchableOpacity, View } from "react-native";

import { SettingsItemProps } from "../types";
import icons from "../constants/icons";

export function SettingsItem({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProps) {
  return (
    <TouchableOpacity
      className="flex flex-row items-center justify-between py-3"
      onPress={onPress}
    >
      <View className="flex flex-row items-center gap-3">
        <Image source={icon} className="size-6" />
        <Text
          className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}
        >
          {title}
        </Text>
      </View>

      {showArrow && <Image source={icons.rightArrow} className="size-5" />}
    </TouchableOpacity>
  );
}
