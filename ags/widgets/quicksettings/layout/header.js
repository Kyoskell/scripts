import { MaterialIcon } from "../../../utils/materialIcon.js";
import { WN_Qs } from "../main.js";

export const Header = Widget.CenterBox({
  hexpand: true,
  class_name: "header",
  startWidget: Widget.Box(
    { spacing: 5,
      hpack: "start",},
    Widget.Icon({
      icon: "arch-symbolic",
      size: 24,
    }),
    Widget.Separator({
      vertical: true,
    }),
    Widget.Button({
      on_clicked: () => null,
      child: MaterialIcon({
        icon: "power_settings_new",
        size: 24,
      })
  })
  ),
  endWidget: Widget.Button({
    hpack: "end",
    on_clicked: () => App.closeWindow(WN_Qs),
    child: MaterialIcon({
      icon: "close",
      size: 24,
    })
  }),
})
