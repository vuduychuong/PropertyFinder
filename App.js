/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
"use strict";

import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import SearchPage from "./src/screens/SearchPage";
import SearchResults from "./src/screens/SearchResults";
import ApartmentDetail from "./src/screens/ApartmentDetail";

const App = StackNavigator({
    Home: { screen: SearchPage },
    Results: { screen: SearchResults },
    ApartmentDetail: { screen: ApartmentDetail }
});
export default App;
