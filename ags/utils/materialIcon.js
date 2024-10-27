export const MaterialIcon = ({
  icon = "",
  size = 24,
  ...props
}) => Widget.Label({
  label: icon,
  class_name: "icon material_icon",
  css: `font-size: ${size}px;`
      + `font-family: "Material Symbols Outlined";`,
  hpack: "center",
  vpack: "center",
  ...props
})
