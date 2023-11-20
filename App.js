/**
 * My To Do List App
 *
 * @format
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/home-screen';
import AboutScreen from './screens/about-screen';

const Stack = createNativeStackNavigator();


export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="About" component={AboutScreen} initialParams={{name: "Anthony"}} />
            </Stack.Navigator>
        </NavigationContainer>
    );   

    // const [tasks, setTasks] = useState([
    //     'Do laundry',
    //     'Go to gym',
    //     'Walk dog'
    // ])

    // return (
    //     <SafeAreaView>

    //         <ToDoList tasks={tasks} />

    //         <ToDoForm />

    //         <StatusBar style="auto" />
    //     </SafeAreaView>
    // );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});