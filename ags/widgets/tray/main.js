import { Header } from "./layout/header.js";
import { Center } from "./layout/center.js";

export const NMTray = Widget.Window({
  name: "NMTray",
  class_name: "nmtray",
  keymode: "on-demand",
  visible: false,
  anchor: ["right", "top"],
  margins: [20, 20, 0, 0],
  setup: (self) => self.keybind('Escape', () => 
    App.toggleWindow(String(self.name))
  ),
  child: Widget.Box({
    vertical: true,
    spacing: 10,
    class_name: "nmtray-box",
    children: [
      Header,
      Center,
    ],
  }),
})
