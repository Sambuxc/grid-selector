const baseClass = "grid__cell "
const selected = "selected"

const GridCell = () => ({
  tag: "div",
  class: (elem, state) => (state.isSelected ? baseClass + selected : baseClass),
  text: (elem, state) => elem.key,
  state: {
    isSelected: false,
    classList: baseClass,
  },

  on: {
    mouseover: (event, gridCell, state) => {
      //TODO:
      // const updateState = (state, key, value) => {
      //   console.log("state", state)
      //   state.update({ key: value })
      // }

      const currGridRow = gridCell.parent
      currGridRow.state.selectedCells = [] // reset selectedCells as to not double up

      for (let i = 0; i <= gridCell.key; i++) {
        // update the state of all grid cells previous to the one being selected
        currGridRow[i].state.update({
          isSelected: !state.isSelected,
        })

        // update row state for saving the selected grid cells
        if (currGridRow[i].state.isSelected) {
          // add grid cell to row selected list
          currGridRow.state.update({
            selectedCells: [i, ...currGridRow.state.selectedCells],
          })
        } else {
          // remove grid cell from row selected list
          currGridRow.state.selectedCells.splice(i, 1)
        }
      }

      // Handle selection all previous row's cells
      let currentRowKey = parseInt(currGridRow.parent.key) - 1 // offset by 1 as to not update the current row, only previous rows
      // update all gridCells in rows that are previous to the currentRowKey
      for (let i = currentRowKey; i >= 0; i--) {
        const prevRowElem = currGridRow.parent.parent[i]

        if (prevRowElem) {
          const prevRowChildren = prevRowElem.childProto

          for (let ii = 0; ii <= prevRowChildren.length; ii++) {
            if (prevRowChildren[ii]) {
              prevRowChildren[ii].state.update({
                isSelected: true,
              })
            }
          }
        }
      }

      // Handle unselecting of grid cells in current row
      const gridCellKeyOffset = parseInt(gridCell.key) + 1
      for (let i = gridCellKeyOffset; i < currGridRow.length; i++) {
        const cellElemState = currGridRow[i].state

        if (cellElemState.isSelected) {
          // TODO: create a common function for updating state key/values
          // updateState(cellElemState, 'isSelected', false)
          cellElemState.update({
            isSelected: false,
          })
        }
      }

      // Handle unselecting grid cells in other rows greater than current cell row
      const gridArea = currGridRow.parent.parent
      currentRowKey++ // reset minus offset for forward loop compatibility
      if (currentRowKey != gridArea.length) {
        for (let i = currentRowKey+1; i < gridArea.length; i++) {
          const gridRow = gridArea[i]
          const rowChildren = gridRow.childProto

          // check if the row has selected cells
          // loop over grid cells and set selected state to false tp uncheck them
          if (rowChildren.state.selectedCells.length > 0) {
            for (let ii = 0; ii < rowChildren.length; ii++) {
              const cell = rowChildren[ii]
              cell.state.update({
                isSelected: false,
              })
            }
          }
        }
      }

    }, // end mouseover
  },
})

export default GridCell
