"use strict";

import Grid from "./components/Grid.js";

import DOM from "domql";
var { performance } = window;

var start = performance.now();
var dom = DOM.create(
  {
    class: 'app',
    proto: Grid,
  },
  null,
  "app"
);

// dom.update({ time: `${performance.now() - start}` })
