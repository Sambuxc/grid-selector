const GridCell = () => ({
  tag: "div",
  class: "grid__cell",
  text: (elem, state) => elem.key,
})

export default GridCell
