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
    mouseover: (event, elem, state) => {
      // this only updates the state of a singular grid cell
      // state.update({
      //   isSelected: !state.isSelected,
      // })

      const rowElem = elem.parent
      rowElem.state.selectedCells = [] // reset selectedCells as to not double up

      for (let i = 0; i <= elem.key; i++) {
        // update the state of all grid cells previous to the one being selected
        rowElem[i].state.update({
          isSelected: !state.isSelected,
        })

        // update row state for saving the selected grid cells
        if (rowElem[i].state.isSelected) {
          rowElem.state.update({
            selectedCells: [i, ...rowElem.state.selectedCells],
          })
        } else {
          rowElem.state.selectedCells.splice(i)
        }

      }
      
      // TODO:
      // Implement previous rows full selection
      const gridCellKeyOffset = parseInt(elem.key) + 1

      for (let i = gridCellKeyOffset; i < rowElem.length; i++ ) {
        const cellElemState = rowElem[i].state

        if (cellElemState.isSelected) {
          cellElemState.update({
            isSelected: false,
          })
        }
        
      }
      // console.log(rowElem.state)
    },
  },
})

export default GridCell
