import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { theme } from "../theme";
import { categoriesData } from "../constants";

export default function Categories() {
  return (
    <View className="mt-5">
      <View className="mx-5 flex-row justify-between items-center">
        <Text style={{ fontSize: wp(4), fontWeight: "500" }}>Categories</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: wp(4), color: theme.text }}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="mx-4"
        showsHorizontalScrollIndicator={false}
      >
        {
            categoriesData.map((cat, index) => {
                return (
                    <TouchableOpacity key={index} className="flex items-center mt-2 mr-4">
                        <Image source={cat.image} style={{width: wp(20), height: wp(19)}} className="rounded-3xl" />
                        <Text className="text-neutral-700 font-medium" style={{ fontSize: wp(3)}}>{cat.title}</Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>
    </View>
  );
}
