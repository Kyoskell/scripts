import { DoNotDisturb } from "../components/dnd.js";
import { Bluetooth } from "../components/bluetooth.js";
import { Network } from "../components/network.js";
import { DarkMode } from "../components/darkmode.js";

export const Center = Widget.Box({
  class_name: "center",
  vertical: true,
  hexpand: true,
  spacing: 10,
  children: [
    Widget.Box(
      { spacing: 10, },
      DoNotDisturb,
      Bluetooth,
    ),
    Widget.Box(
      { spacing: 10, },
      Network,
      DarkMode,
    ),
  ]
});
