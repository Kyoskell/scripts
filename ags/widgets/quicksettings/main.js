import { Header } from "./layout/header.js";
import { Center } from "./layout/center.js";
import { Footer } from "./layout/footer.js";

export const WN_Qs = "QuickSettings";

export const QuickSettings = Widget.Window({
  name: WN_Qs,
  class_name: "QuickSettings",
  anchor: ["top", "right"],
  margins: [15, 50, 0, 0],
  visible: false,
  keymode: "on-demand",
  setup: self => self.keybind("Escape", () => {
      App.closeWindow("QuickSettings");
  }),
  child: Widget.Box({
    vertical: true,
    spacing: 15,
    children: [
      Header,
      Center,
      Footer
    ],
  })
})
