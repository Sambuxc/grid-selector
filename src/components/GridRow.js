const GridRow = (children) => ({
  tag: "div",
  class: "grid__row",
  childProto: children,
  state: {
    selectedCells: []
  }
})

export default GridRow