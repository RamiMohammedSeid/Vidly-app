import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import {Root} from "native-base"
import Stream from "./src/Stream";
import Moviepage from './src/Moviepage';
const Stack = createStackNavigator();

const App = (props) => {
  return (
    <NavigationContainer >
      <Root>
        <Stack.Navigator>
        <Stack.Screen name="Home" options={{headerShown: false}} component={Home} /> 

        <Stack.Screen name="MoviePage" options={{headerShown: false}} component={Moviepage} />
        <Stack.Screen name="Stream" options={{headerShown: false}} component={Stream} />

      </Stack.Navigator>
      </Root>
        
      </NavigationContainer>

  );
};
export default App;
