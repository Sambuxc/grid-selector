const GridArea = (children) => ({
  tag: "div",
  class: "grid__area",
  childProto: children,
  state: {
    selectedCells: [],
  },
  
  on: {
    update: (el, state) => {
      // Each time the number of selected cells gets updated, update the total selection component text
      const footerComponent = el.parent[2]
      const totalSelectionComponent = footerComponent.childProto[1]

      const totalSelected = state.selectedCells.length

      // update component state
      totalSelectionComponent.state.update({
        selectionTotal: totalSelected
      })
    }
  }
})

export default GridArea
