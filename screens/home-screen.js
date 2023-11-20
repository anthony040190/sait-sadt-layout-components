import { View, Button } from "react-native"; 
import ToDoList from "../components/todo-list";
import ToDoForm from "../components/todo-form";
import MainLayout from "../layouts/main-layout";


export default function HomeScreen({ navigation }) {
    return (
        <MainLayout>
            <View>
                {/* <ToDoList /> */}

                {/* <ToDoForm /> */}

                <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')} />
            </View>
        </MainLayout>
    );
}