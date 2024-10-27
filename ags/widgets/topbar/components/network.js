import { MaterialIcon } from "../../../utils/materialIcon.js";
import { NMTray } from "../../tray/main.js";
const network = await Service.import('network');

const material_symbols = {
  "network-wireless-signal-excellent-symbolic": "signal_wifi_4_bar",
  "network-wireless-signal-good-symbolic": "network_wifi_3_bar",
  "network-wireless-signal-ok-symbolic": "network_wifi_2_bar",
  "network-wireless-signal-weak-symbolic": "network_wifi_1_bar",
  "network-wireless-signal-none-symbolic": "signal_wifi_0_bar",
};

export const WifiIndicator = MaterialIcon({
  size: 24,
  visible: true,
}).hook(network, (self) => {
  if (network.wifi.enabled) {
    self.tooltip_text = network.wifi.ssid || "Unknown";
    self.label = material_symbols[network.wifi.icon_name] || "signal_wifi_off";
  } else {
    self.tooltip_text = "Disabled";
    self.label = "signal_wifi_off";
  }
})

export const Wifi = Widget.Button({
  on_clicked: () => App.toggleWindow(String(NMTray.name)),
  child: WifiIndicator
})
