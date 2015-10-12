import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
import Component from "./component";

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin

React.render(
    <Component name="Test-component"/>,
        document.body
);
