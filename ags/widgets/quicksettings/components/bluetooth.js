import { toggleBtn } from "./toggleButton.js";
const bluetooth = await Service.import('bluetooth');

export const Bluetooth = toggleBtn({
  size: 24,
  tooltip: "Bluetooth",
  label: "Bluetooth", 
}).hook(bluetooth, (self) => {
  const icon = self.child.children[0];
  if (bluetooth.enabled) {
    self.class_name = "active";
    if (bluetooth.connected_devices.length > 0) {
      icon.label = "bluetooth_connected";
    } else {
      icon.label = "bluetooth";
    }
  } else {
    icon.label = "bluetooth_disabled";
  }
})
