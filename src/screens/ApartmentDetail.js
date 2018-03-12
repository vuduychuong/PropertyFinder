"use strict";

import React, { Component } from "react";
import {
    StyleSheet,
    Image,
    View,
    Text,
    Button,
    TouchableOpacity,
    TouchableHighlight
} from "react-native";

export default class ApartmentDetail extends Component {
    static navigationOptions = {
        title: "Detail"
    };

    constructor(props) {
        super(props);
        this.state = {
            isShowingFullScreen: false,
            buttonText: "BUY"
        };
    }

    onPress = () => {
        this.setState({
            buttonText: this.state.buttonText == "BUY" ? "SELL" : "BUY"
        });
    };

    onPressImage = () => {
        console.log("Click on Image");
        this.setState({
            isShowingFullScreen: !this.state.isShowingFullScreen
        });
        if (this.state.isShowingFullScreen) {
            this.props.navigation.setParams({ header: null });
        }
    };

    render() {
        const { params } = this.props.navigation.state;
        console.log("image url: " + params.itemDetail.img_url);
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    underlayColor="#00000000"
                    style={styles.touchView}
                    onPress={this.onPressImage}
                >
                    <Image
                        style={styles.images}
                        source={{ uri: params.itemDetail.img_url }}
                        onPress={this.onPressImage}
                    />
                </TouchableHighlight>
                {!this.state.isShowingFullScreen && (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPress}
                    >
                        <View>
                            <Text style={styles.textButton}>
                                {this.state.buttonText}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "gray"
    },
    touchView: {
        backgroundColor: "#00000000",
        flex: 1,
    },
    images: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "contain"
    },
    button: {
        height: 50,
        position: "absolute",
        backgroundColor: "midnightblue",
        bottom: 15,
        left: 10,
        right: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
        // borderTopLeftRadius: 5,
        // borderBottomLeftRadius: 5,
        // borderTopRightRadius: 5,
        // borderBottomRightRadius: 5,
    },
    textButton: {
        color: "white"
    }
});
