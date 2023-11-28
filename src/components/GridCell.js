const baseClass = "grid__cell "
const selected = "selected"

const GridCell = () => ({
  tag: "div",
  class: (elem, state) => (state.isSelected ? baseClass + selected : baseClass),
  // text: (elem, state) => elem.key,
  state: {
    isSelected: false,
    classList: baseClass,
    prevSelection: null,
  },

  on: {
    click: (event, gridCell, state) => {
      // Update the selected state for the current cell and all previous sibling cells
      const cellKey = parseInt(gridCell.key)
      const cellParent = gridCell.parent
      const selectedCells = cellParent.state.selectedCells
      const selectedCellsLength = cellParent.state.selectedCells.length
      const currentKey = cellKey

      // TODO:
      // Move the logic that handles updating the parent state into the on:{ update() }
      // So when the cell's isSelected state is updated, then add or remove it from the selectedCells parent array list.
      if (selectedCellsLength <= 1 && currentKey == 0) {
        // if we have only 1 or less cells selected
        updateState(state, "isSelected", !state.isSelected)
        if (state.isSelected) {
          // add to array list
          updateState(cellParent.state, "selectedCells", [currentKey])
        } else {
          // remove from array list
          selectedCells.splice(currentKey, 1)
          updateState(cellParent.state, "selectedCells", selectedCells)
        }
      }
      // If we have more than 1 selected cell then
      else if (currentKey <= selectedCellsLength) {
        // Handle deselection of cells because user has clicked a grid cell key than is less than the amount stored
        for (let i = currentKey; i < selectedCellsLength + 1; i++) {
          if (cellParent[i].state.isSelected) {
            // if we have already selected grid cells then update their state to false and remove from array list
            updateState(cellParent[i].state, "isSelected", false)

            // remove cell from selected cells array
            for (let ii = 0; ii < selectedCellsLength; ii++) {
              if (selectedCells[ii] && selectedCells[ii] == cellParent[i].key) {
                selectedCells.splice(ii, 1)
                updateState(cellParent.state, "selectedCells", selectedCells)
              }
            }
          }
        }
      } else {
        for (let i = selectedCellsLength; i < currentKey + 1; i++) {
          // work backwards updating the grid cell states until reaching the first cell item
          updateState(
            cellParent[i].state,
            "isSelected",
            !cellParent[i].state.isSelected
          )

          updateState(cellParent.state, "selectedCells", [i, ...selectedCells])
        }
      }

      /**
       * Update selection co-ordinates
       */
      const selectionCoordsComponent = cellParent.parent.parent[2].childProto[0]
      const { row, column } = calculateRowAndColumn(cellKey) // offset the key by 1 due to the keys starting from 0.
      selectionCoordsComponent.state.update({
        coordinates: [row + 1, column + 1],
      })
    }, // end click
  }, // end on
})

function updateState(state, keyString, value) {
  state.update({ [keyString]: value })
}

function calculateRowAndColumn(cellKey, columns = 16) {
  const row = Math.floor(cellKey / columns)
  const column = cellKey % columns
  return { row, column }
}

export default GridCell
