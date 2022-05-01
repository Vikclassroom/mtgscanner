import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";

const GoalItem = (props: any) => {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: '#ccceee'}}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={(pressed) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 9,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        alignContent: 'space-between'
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: '#ccceee',
        textAlign: 'center',
        padding: 8
    }
});
