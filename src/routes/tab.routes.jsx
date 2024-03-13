import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Category" component={Category} options={{
        tabBarLabel: "Category",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="package" color={color} size={size} />
        ),
      
      }} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
