import { RevQS } from "../components/launchers.js";
import { Wifi } from "../components/network.js";
import { Volume } from "../components/sound.js";
import { Battery } from "../components/battery.js";
import { BIndicator } from "../components/bluetooth.js";

export const Applets = Widget.CenterBox({
  class_name: "applets",
  hpack: "center",
  spacing: 5,
  startWidget: Wifi,
  endWidget: BIndicator
})

export const End = Widget.Box({
  class_name: "topbar end",
  spacing: 10,
  hpack: "end",
  children: [
    Battery,
    Volume,
    Applets,
    RevQS,
  ]
})
