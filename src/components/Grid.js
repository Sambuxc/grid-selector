import GridArea from "./GridArea.js"
import GridCell from "./GridCell.js"

const childComponents = []
const rows = 8
const cols = 16

const gridAreaContent = []
for (let i = 0; i < rows; i++){
  for (let ii = 0; ii < cols; ii++) {
    gridAreaContent.push(GridCell())
  }
}

const title = {
  tag: 'h1',
  class: 'title',
  text: 'Grid Selection',
}

childComponents.push(title, GridArea(gridAreaContent))

const Grid = () => ({
  tag: "div",
  class: "grid",
  childProto: childComponents,
})

export default Grid
