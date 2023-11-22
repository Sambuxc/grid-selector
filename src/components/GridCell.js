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
      const cellParent = gridCell.parent
      const selectedCells = cellParent.state.selectedCells
      const selectedCellsLength = cellParent.state.selectedCells.length
      const currentKey = parseInt(gridCell.key)

      // reset the parents selected cells first
      // updateState(cellParent.state, "selectedCells", [])
      // if (selectedCellsLength == 0 || selectedCellsLength > 1 || currentKey > 0) {
        // If we have many than 1 selected cell then
        if (currentKey <= selectedCellsLength) {
          // Handle deselection of cells because user has clicked a grid cell key than is less than the amount stored
          // console.log(
          //   "current selection key is less/equal than selectedCells.length"
          // )
          // console.log("selectedCellsLength", selectedCellsLength)
          // console.log("currentKey", currentKey)
          for (let i = currentKey+1; i < selectedCellsLength; i++) {
            if (cellParent[i].state.isSelected) {
              updateState(cellParent[i].state, "isSelected", false)

              // console.log(cellParent.state.selectedCells)
              for (
                let ii = 0;
                ii < cellParent.state.selectedCells.length;
                ii++
              ) {
                // console.log("ii", ii)
                if (
                  selectedCells[ii] &&
                  selectedCells[ii] == cellParent[i].key
                ) {
                  selectedCells.splice(ii, 1)
                }
              }

              // updateState(cellParent.state, "selectedCells", [
              //   i,
              //   ...cellParent.state.selectedCells,
              // ])
            }
          }
        } else {
          // console.log(
          //   "current selection key is more than than selectedCells.length"
          // )
          for (let i = selectedCellsLength; i < currentKey+1; i++) {
            // work backwards updating the grid cell states until reaching the first cell item
            updateState(
              cellParent[i].state,
              "isSelected",
              !cellParent[i].state.isSelected
            )

            updateState(cellParent.state, "selectedCells", [
              i,
              ...selectedCells,
            ])
          }

          // console.log(...selectedCells)
        }
      // } else {
        // updateState(state, 'isSelected', !state.isSelected)
      // }

      // console.log("cellParent", cellParent)

      // const currGridRow = gridCell.parent
      // currGridRow.state.selectedCells = [] // reset selectedCells as to not double up

      /*for (let i = 0; i <= gridCell.key; i++) {
        // update the state of all grid cells previous to the one being selected
        updateState(currGridRow[i].state, "isSelected", !state.isSelected)

        // update row state for saving the selected grid cells
        if (currGridRow[i].state.isSelected) {
          // add grid cell to row selected list
          updateState(currGridRow.state, "selectedCells", [
            i,
            ...currGridRow.state.selectedCells,
          ])
        } else {
          // remove grid cell from row selected list
          currGridRow.state.selectedCells.splice(i, 1)
        }
      }*/

      // Handle selection all previous row's cells
      // let currentRowKey = parseInt(currGridRow.parent.key) - 1 // offset by 1 as to not update the current row, only previous rows
      // update all gridCells in rows that are previous to the currentRowKey
      /*for (let i = currentRowKey; i >= 0; i--) {
        const prevRowElem = currGridRow.parent.parent[i]

        if (prevRowElem) {
          const prevRowChildren = prevRowElem.childProto

          for (let ii = 0; ii <= prevRowChildren.length; ii++) {
            if (prevRowChildren[ii]) {
              updateState(prevRowChildren[ii].state, "isSelected", true)
            }
          }
        }
      }*/

      // Handle unselecting of grid cells in current row
      /*const gridCellKeyOffset = parseInt(gridCell.key) + 1
      for (let i = gridCellKeyOffset; i < currGridRow.length; i++) {
        const cellElemState = currGridRow[i].state

        if (cellElemState.isSelected) {
          updateState(cellElemState, "isSelected", false)
        }
      }*/

      // Handle unselecting grid cells in other rows greater than current cell row
      /*const gridArea = currGridRow.parent.parent
      currentRowKey++ // reset minus offset for forward loop compatibility
      if (currentRowKey != gridArea.length) {
        for (let i = currentRowKey + 1; i < gridArea.length; i++) {
          const gridRow = gridArea[i]
          const rowChildren = gridRow.childProto

          // check if the row has selected cells
          // loop over grid cells and set selected state to false tp uncheck them
          if (rowChildren.state.selectedCells.length > 0) {
            for (let ii = 0; ii < rowChildren.length; ii++) {
              const cell = rowChildren[ii]
              updateState(cell.state, "isSelected", false)
            }
          }
        }
      }*/
    }, // end mouseover
  },
})

function updateState(state, keyString, value) {
  state.update({ [keyString]: value })
}

export default GridCell
