import GridArea from "./GridArea.js"
import GridCell from "./GridCell.js"
import GridFooter from "./GridFooter.js"

const childComponents = []
const rows = 8
const cols = 16

const gridAreaContent = []
for (let i = 0; i < rows; i++) {
  for (let ii = 0; ii < cols; ii++) {
    gridAreaContent.push(GridCell())
  }
}

const title = {
  tag: "h1",
  class: "title",
  text: "Grid Selection",
}

const gridArea = GridArea(gridAreaContent)

const coordinatesSpan = {
  tag: "span",
  class: "value",
  text: (el, state) => {
    return `${el.parent.state.coordinates[0]}, ${el.parent.state.coordinates[1]}`
  },
}

const selectionCoordsComponent = {
  tag: "p",
  class: "selection_coordinates",
  text: (elem, state) => {
    return "Selection coordinates:"
  },
  childProto: coordinatesSpan,
  state: {
    coordinates: [0, 0],
  }
}

const selectionTotal = {
  tag: "span",
  class: "value",
  text: (el, state) => {
    return el.parent.state.selectionTotal
  },
}

const totalSelectionComponent = {
  tag: "p",
  class: "selection_total",
  text: (elem, state) => {
    return "Total cells selected:"
  },
  childProto: selectionTotal,
  state: {
    selectionTotal: 0,
  }
}

const footerContent = [selectionCoordsComponent, totalSelectionComponent]

childComponents.push(title, gridArea, GridFooter(footerContent))

const Grid = () => ({
  tag: "div",
  class: "grid",
  childProto: childComponents,
})

export default Grid
