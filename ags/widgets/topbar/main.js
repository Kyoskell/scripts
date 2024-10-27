import { WorkspaceIcons } from "./components/workspaces.js";
import { Time } from "./components/time.js";
import { End } from "./layout/end.js";

const windowName = "TopBar";

export const TopBar = Widget.Window({
  name: windowName,
  class_name: "topbar",
  anchor: ["left", "top", "right"],
  exclusivity: "exclusive",
  child: Widget.CenterBox({
    hexpand: true,
    startWidget: WorkspaceIcons,
    centerWidget: Time,
    endWidget: End,
  }),
})
