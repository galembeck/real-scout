import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import icons from "@/src/constants/icons";
import images from "@/src/constants/images";

import { Search } from "@/src/components/search";
import { FeaturedCard } from "@/src/components/featured-card";
import { PropertyCard } from "@/src/components/property-card";
import { Filters } from "@/src/components/filters";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row">
            <Image source={images.avatar} className="size-12 rounded-full" />

            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">
                Good Morning
              </Text>
              <Text className="text-base font-rubik-medium text-black-300">
                Pedro Galembeck
              </Text>
            </View>
          </View>

          <Image source={icons.bell} className="size-6" />
        </View>

        <Search />

        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">
              Featured
            </Text>

            <TouchableOpacity>
              <Text className="text-base font-rubik-bold text-primary-300">
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row gap-5 mt-5">
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
          </View>
        </View>

        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-rubik-bold text-black-300">
            Our Recommendations
          </Text>

          <TouchableOpacity>
            <Text className="text-base font-rubik-bold text-primary-300">
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <Filters />

        <View className="flex flex-row gap-5 mt-3">
          <PropertyCard />
          <PropertyCard />
        </View>
      </View>
    </SafeAreaView>
  );
}
