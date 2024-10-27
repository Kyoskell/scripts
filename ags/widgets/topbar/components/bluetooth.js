import { MaterialIcon } from "../../../utils/materialIcon.js";
const bluetooth = await Service.import('bluetooth');

export const BIndicator = MaterialIcon({
  size: 24,
}).hook(bluetooth, (self) => {
  if (bluetooth.enabled) {
    if (bluetooth.connected_devices.length > 0) {
      self.label = "bluetooth_connected";
    } else {
      self.label = "bluetooth"
    }
  } else {
    self.label = "bluetooth_disabled";
  }
})
