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
      state.update({
        isSelected: !state.isSelected,
      })
    },
  },
})

export default GridCell
