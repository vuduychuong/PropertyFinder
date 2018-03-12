"use strict";

import React, { Component } from "react";
import { StyleSheet, Image, View, Text, Button } from "react-native";

export default class ApartmentDetail extends Component {
    static navigationOptions = {
        title: "Detail"
    };

    render() {
        const { params } = this.props.navigation.state;
        console.log("image url: " + params.itemDetail.img_url);
        return (
            <View style={styles.container}>
                <Image
                    style={styles.images}
                    source={{ uri: params.itemDetail.img_url }}
                />
                <Button
                    // onPress={this._onSearchPressed}
                    style={styles.button}
                    color="#00000000"
                    title="BUY"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "black"
    },
    images: {
        flex: 1,
        width: null,
        height: null,
        zIndex: 10
    },
    button: {
        height: 100,
        bottom: 0,
        zIndex: 20
    }
});
