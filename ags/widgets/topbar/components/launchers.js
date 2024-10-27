import { MaterialIcon } from "../../../utils/materialIcon.js";
import { WN_Qs } from "../../quicksettings/main.js";
export const RevDockR = Widget.Button({
  on_clicked: () => null, // Open right side dock
  child: MaterialIcon({
    icon: "dock_to_left",
    size: 24,
  })
});

export const RevQS = Widget.Button({
  on_clicked: () => App.toggleWindow(WN_Qs), // Open quick setting window
  child: MaterialIcon({
    icon: "top_panel_open",
    size: 24,
  })
});
