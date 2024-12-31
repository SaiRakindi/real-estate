import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { categories } from "@/constants/data";

const Filters = () => {
  const params = useLocalSearchParams();

  const [selectedCateogry, setSelectedCateogry] = useState(
    params.filter || "All"
  );

  const handleCategory = (category: string) => {
    if (selectedCateogry === category) {
      setSelectedCateogry("All");
      router.setParams({ filter: "All" });
      return;
    }

    setSelectedCateogry(category);
    router.setParams({ filter: category });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-3 mb-2"
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          onPress={() => handleCategory(item.category)}
          key={index}
          className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${
            selectedCateogry === item.category
              ? "bg-primary-300"
              : "bg-primary-100 border border-primary-200"
          }`}
        >
          <Text
            className={`text-sm ${
              selectedCateogry === item.category
                ? "text-white font-rubik-bold mt-0.5"
                : "text-black-300 font-rubik"
            }`}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
