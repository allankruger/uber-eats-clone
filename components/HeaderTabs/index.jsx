import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles.js";
import { useState } from "react";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={styles.headerContainer}>
      <HeaderButton
        btnText="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        btnText="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => {
  const { btnText, btnColor, textColor, activeTab } = props;

  return (
    <TouchableOpacity
      style={[
        styles.headerButton,
        { backgroundColor: activeTab === btnText ? "black" : "white" },
      ]}
      onPress={() => props.setActiveTab(btnText)}
    >
      <Text
        style={[
          styles.headerButton__text,
          { color: activeTab === btnText ? "white" : "black" },
        ]}
      >
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};
