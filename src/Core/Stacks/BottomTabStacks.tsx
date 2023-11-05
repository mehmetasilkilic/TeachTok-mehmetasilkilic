import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { BottomTabStackParamList } from "../Helpers";
import { Activity, Bookmarks, Discover, Profile } from "./DummyScreens";
import Home from "../../Home/Screens/Home/Home";

const Tab = createBottomTabNavigator<BottomTabStackParamList>();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#000",
          borderTopWidth: 0,
          height: 80,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#777",
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }: { color: string }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          title: "Discover",
          tabBarIcon: ({ color }: { color: string }) => (
            <Ionicons name="compass" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          title: "Activity",
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome5 name="stopwatch" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          title: "Bookmarks",
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="bookmark" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }: { color: string }) => (
            <FontAwesome name="user-circle" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
