// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

function str(prim) {
  return prim;
}

var component = ReasonReact.statelessComponent("Index");

function make(_children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              return React.createElement("div", undefined, React.createElement("h1", undefined, "Gatsby" + (" ❤ " + "ReasonML")), React.createElement("p", undefined, "Use this starter to create static sites with Gatsby using ReasonML components."), React.createElement("h2", undefined, "Features"), React.createElement("ul", undefined, React.createElement("li", undefined, React.createElement("a", {
                                      href: "https://github.com/reasonml/reason-react"
                                    }, "reason-react"), " for type-safe React components in ReasonML"), React.createElement("li", undefined, React.createElement("a", {
                                      href: "https://github.com/SentiaAnalytics/bs-css"
                                    }, "bs-css"), " for css-in-reason styling")), React.createElement("h2", undefined, "Reference"), React.createElement("ul", undefined, React.createElement("li", undefined, "see re/Header.re for example component implementation"), React.createElement("li", undefined, "see re/types/Gatsby.re for example BuckleScript bindings to Gatsby module")));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (_jsProps) {
        return make(/* array */[]);
      }));

exports.str = str;
exports.component = component;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
