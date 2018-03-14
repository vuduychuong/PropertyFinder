"use strict";

import PropTypes from "prop-types";
import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

class CircleImage extends Component {
    static propTypes = {
        buttonStyles: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({})
        ]).isRequired
    };

    render = () => {
        const { buttonStyles } = this.props;
        return (
            <View style={[styles.circle_container, buttonStyles]}>
                <Image style={{}} source={this.props.source} />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    circle_container: {
        borderRadius: 1000,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red"
    }
});

export default CircleImage;
