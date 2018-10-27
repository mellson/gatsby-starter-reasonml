// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Gatsby$ReactTemplate = require("./types/Gatsby.bs.js");

var component = ReasonReact.statelessComponent("header");

var header = Css.style(/* :: */[
      Css.backgroundColor(Css.hex("db4d3f")),
      /* :: */[
        Css.marginBottom(Css.px(16)),
        /* [] */0
      ]
    ]);

var content = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.alignItems(/* center */98248149),
        /* :: */[
          Css.justifyContent(/* spaceBetween */516682146),
          /* :: */[
            Css.margin2(Css.px(0), /* auto */-1065951377),
            /* :: */[
              Css.maxWidth(Css.px(936)),
              /* :: */[
                Css.padding(Css.px(8)),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var h1 = Css.style(/* :: */[
      Css.margin(Css.px(0)),
      /* [] */0
    ]);

var link = Css.style(/* :: */[
      Css.color(Css.white),
      /* :: */[
        Css.textDecoration(Css.none),
        /* [] */0
      ]
    ]);

var nav = Css.style(/* [] */0);

var Styles = /* module */[
  /* header */header,
  /* content */content,
  /* h1 */h1,
  /* link */link,
  /* nav */nav
];

function make(siteTitle, _) {
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
          /* render */(function () {
              return React.createElement("header", {
                          className: header
                        }, React.createElement("div", {
                              className: content
                            }, React.createElement("h1", {
                                  className: h1
                                }, ReasonReact.element(undefined, undefined, Gatsby$ReactTemplate.Link[/* make */0]("/", link, /* array */[siteTitle]))), React.createElement("nav", {
                                  className: nav
                                }, ReasonReact.element(undefined, undefined, Gatsby$ReactTemplate.Link[/* make */0]("/blog", link, /* array */["Blog"])))));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var $$default = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.siteTitle, /* array */[]);
      }));

exports.component = component;
exports.Styles = Styles;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* component Not a pure module */
