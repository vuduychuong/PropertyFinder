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

const SRC_IMAGE_SAVE = require("../images/bookmark.png");
const SRC_IMAGE_SAVE_SELECTED = require("../images/bookmark-selected.png");

export default class ApartmentDetail extends Component {
    static navigationOptions = {
        title: "Detail",
    };

    constructor(props) {
        super(props);
        this.state = {
            isShowingFullScreen: false,
            buttonText: "BUY",
            srcImageSave: SRC_IMAGE_SAVE
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

    onPressSaveButton = () => {
        this.setState({
            srcImageSave:
                this.state.srcImageSave == SRC_IMAGE_SAVE
                    ? SRC_IMAGE_SAVE_SELECTED
                    : SRC_IMAGE_SAVE
        });
    };

    render() {
        const { params } = this.props.navigation.state;
        console.log("image url: " + params.itemDetail.img_url);
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    underlayColor="#00000000"
                    activeOpacity={1}
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

                {!this.state.isShowingFullScreen && (
                    <TouchableOpacity
                        style={styles.saveButton}
                        onPress={this.onPressSaveButton}
                        activeOpacity={1}
                    >
                        <Image
                            style={styles.images}
                            source={this.state.srcImageSave}
                        />
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
        backgroundColor: "black"
    },
    touchView: {
        backgroundColor: "#00000000",
        flex: 1
    },
    images: {
        flex: 1,
        resizeMode: "contain",
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
    saveButton: {
        height: 50,
        width: 50,
        top: 0,
        right: 10,
        position: "absolute",
        alignItems: "center"
    },
    textButton: {
        color: "white"
    }
});
