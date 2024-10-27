import { MaterialIcon } from "../../../utils/materialIcon.js";
import { getAPs, Center } from "./center.js";

async function refresh () {
  const newChildren = getAPs();
  return Center.child.children = newChildren;
};

export const Header = Widget.CenterBox({
  hexpand: true,
  class_name: "header",
  startWidget: MaterialIcon({
    icon: "network_check",
    size: 24,
  }),
  centerWidget: Widget.Label("List of available Wi-Fi"),
  endWidget: Widget.Button({
    on_clicked: () => refresh(),
    child: MaterialIcon({
      icon: "refresh",
      size: 24,
    })
  }),
})
