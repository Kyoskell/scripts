import { MaterialIcon } from "../../../utils/materialIcon.js";

const material_symbols = {
  "network-wireless-signal-excellent-symbolic": "signal_wifi_4_bar",
  "network-wireless-signal-good-symbolic": "network_wifi_3_bar",
  "network-wireless-signal-ok-symbolic": "network_wifi_2_bar",
  "network-wireless-signal-weak-symbolic": "network_wifi_1_bar",
  "network-wireless-signal-none-symbolic": "signal_wifi_0_bar",
};

export const SSIDs = (n) => Widget.Box({
  hpack: "start",
  spacing: 5,
  class_name: "ssid",
  children: [
    MaterialIcon({
      icon: material_symbols[n.iconName] || "signal_wifi_off",
      size: 24,
    }),
    Widget.Label(n.ssid),
  ],
});
