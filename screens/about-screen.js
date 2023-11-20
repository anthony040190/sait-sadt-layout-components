import { View, Text } from "react-native"; 
import MainLayout from "../layouts/main-layout";

export default function AboutScreen({ navigation, route }) {

    const { name } = route.params;

    return (

        <MainLayout>
            <View>
                <Text>About Screen</Text>
                <Text>My name is { name }</Text>
                <Text>I am a software developer</Text>
            </View>
        </MainLayout>
    );
}