import { toggleBtn } from "./toggleButton.js";
const network = await Service.import('network');

const material_symbols = {
  "network-wireless-signal-excellent-symbolic": "signal_wifi_4_bar",
  "network-wireless-signal-good-symbolic": "network_wifi_3_bar",
  "network-wireless-signal-ok-symbolic": "network_wifi_2_bar",
  "network-wireless-signal-weak-symbolic": "network_wifi_1_bar",
  "network-wireless-signal-none-symbolic": "signal_wifi_0_bar",
};

export const Network = toggleBtn({
  size: 24,
  label: "Internet",
  on_clicked: () => null,
}).hook(network, (self) => {
  self.child.children[0].label = material_symbols[network.wifi.icon_name] || "signal_wifi_off";
  self.tooltip_text = network.wifi.ssid;

  if (network.wifi.enabled) {
    self.class_name = "active";
  }
})
