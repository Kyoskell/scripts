import { MaterialIcon } from "../../../utils/materialIcon.js";
const battery = await Service.import('battery');

const battery_icons = {
  charging: {
    100: "battery_chargin_full",
    90: "battery_charging_90",
    80: "battery_charging_80",
    70: "battery_charging_80",
    60: "battery_charging_60",
    50: "battery_charging_50",
    40: "battery_charging_30",
    30: "battery_charging_30",
    20: "battery_charging_20",
    10: "battery_charging_20",
    0: "battery_charging_20"
  },
  100: "battery_full",
  90: "battery_6_bar",
  80: "battery_5_bar",
  70: "battery_5_bar",
  60: "battery_4_bar",
  50: "battery_3_bar",
  40: "battery_2_bar",
  30: "battery_2_bar",
  20: "battery_1_bar",
  10: "battery_1_bar",
  0: "battery_alert"
};

function matchBatL(level, charging) {
  const array = !charging ? battery_icons : battery_icons.charging;
  const levels = Object.keys(array)
    .map(Number)
    .sort((a, b) => b - a);
  for (let i = 0; i < levels.length; i++) {
    if (level >= levels[i]) {
      return array[levels[i]]
    }
  }
  return array[levels[levels.length - 1]];
};

export const Battery = Widget.Box({
  class_name: "applets",
  children: [
    MaterialIcon({
      size: 24,
    }).hook(battery, (self) => {
      self.label = matchBatL(
        battery.percent,
        battery.charging
      );
    }),
    Widget.Label({
      label: battery.bind('percent').as(p => `${p}%`)
    })
  ],
  tooltipText: battery.bind('percent').as((p) => `Battery: ${p > 0 ? p : 0}%`)
})
