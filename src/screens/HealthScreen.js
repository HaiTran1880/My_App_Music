import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HealthScreen = ({ params }) => {
    return(
    <View style={styles.container}>
        <Text>Health Screen</Text>
    </View>
);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
});
export default HealthScreen;
