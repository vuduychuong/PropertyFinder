"use strict";

import React, { Component } from "react";
import {
    StyleSheet,
    Image,
    View,
    Text,
    Button,
    TouchableHighlight,
    TouchableOpacity
} from "react-native";

export default class ApartmentDetail extends Component {
    static navigationOptions = {
        title: "Detail",
        header: null
    };

    render() {
        // const { params } = this.props.navigation.state;
        // console.log("image url: " + params.itemDetail.img_url);
        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <View style={[styles.box, styles.big_orange_box]} />
                </View>

                <View style={styles.middle}>
                    <View style={[styles.box, styles.big_black_box]} />
                    <View style={[styles.full_gray_box]} />
                    <View style={[styles.box, styles.big_green_box]} />
                    <View style={[styles.inner_box, styles.orange_box]} />

                    <TouchableOpacity style={styles.button} onPress={() => console.log('puff')} >
                        <View>
                            <Text style={styles.textButton}>GO</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                <View style={styles.right}>
                    <View style={[styles.box, styles.big_blue_box]} />
                    <View style={[styles.box, styles.small_purpose_box]} />
                </View>
            </View>

            // <View style={styles.container}>
            //     <Image
            //         style={styles.images}
            //         source={{ uri: params.itemDetail.img_url }}
            //     />
            //     <Button
            //         // onPress={this._onSearchPressed}
            //         style={styles.button}
            //         color="cyan"
            //         title="BUY"
            //     />
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    box: {
        width: 100,
        height: 100
    },
    left: {
        flex: 1,
        backgroundColor: "azure",
        flexDirection: "row",
        alignItems: "center"
    },
    middle: {
        flex: 5,
        backgroundColor: "orchid",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    right: {
        flex: 1,
        backgroundColor: "pink",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    top_layer: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 10,
        // backgroundColor:"red",
        flexDirection: "row",
        alignItems:"flex-end"
    },
    button: {
        // alignSelf: "stretch",
        width: 200,
        position: "absolute",
        // bottom: 20,
        left: 20,
        // right: 20,
        bottom: 10,
        height: 100,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
    },
    textButton: {
        color: "white",
        padding: 10
    },
    inner_box: {
        width: 50,
        height: 50
    },
    red_box: {
        position: "relative",
        backgroundColor: "red",
        top: 10,
        left: 10
    },
    orange_box: {
        position: "absolute",
        backgroundColor: "orange",
        bottom: 10,
        right: 10
    },
    full_gray_box: {
        height: 40,
        backgroundColor: "gray",
        alignSelf: "stretch"
    },
    big_black_box: {
        backgroundColor: "black"
    },
    big_blue_box: {
        backgroundColor: "blue"
    },
    big_green_box: {
        backgroundColor: "green"
    },
    big_orange_box: {
        backgroundColor: "orange"
    }
});
//     container: {
//         flex: 1,
//         flexDirection: "column",
//         backgroundColor: "black"
//     },
//     images: {
//         flex: 1,
//         width: null,
//         height: null,
//         resizeMode: "contain"
//     },
//     button: {
//         height: 200,
//         bottom: 50,
//         position:"relative"
//     }
// });
