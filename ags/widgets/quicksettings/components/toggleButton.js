import { MaterialIcon } from "../../../utils/materialIcon.js";

export const toggleBtn = ({
  icon = "",
  size = 24,
  tooltip = "",
  label = "",
  ...props
}) => 
  Widget.Button({
    tooltipText: tooltip,
    child: Widget.Box({
      vpack: "center",
      hexpand: true,
      spacing: 10,
      children: [
        MaterialIcon({
          icon: icon,
          size: size,
        }),
        Widget.Label({
          label: label,
          truncate: "end",
          maxWidthChars: 20,
        })
      ]
    }),
    ...props
  });
