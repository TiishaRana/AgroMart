import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';
import Login from './src/Login';
import Admin from './src/Admin';
import UploadPage from './src/UploadPage';
import RegisterPage from './src/RegisterPage';
import UserItemsList from './src/UserItemsList';
import UserDashboard from './app/UserDashboard';
import ProfilePage from './app/ProfilePage';
import config from './app/config';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="UploadPage" component={UploadPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="UserItemsList" component={UserItemsList} />
        <Stack.Screen name="UserDashboard" component={UserDashboard} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;