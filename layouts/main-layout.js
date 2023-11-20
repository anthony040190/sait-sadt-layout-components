import { View, StyleSheet } from 'react-native';
import Header from './header';
import Footer from './footer';

export default function MainLayout({ children }) {


    return (
        <View style={styles.container}>
            <Header />
            {children}
            <Footer />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
});