import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SofMScreen = ({ params }) => {
    return(
    <View style={styles.container}>
        <Text>My Style</Text>
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
export default SofMScreen;
