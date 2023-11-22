const GridArea = (children) => ({
  tag: "div",
  class: "grid__area",
  childProto: children,
  state: {
    selectedCells: [],
  }
})

export default GridArea
