import { MaterialIcon } from "../../../utils/materialIcon.js";
const network = await Service.import('network');

const material_symbols = {
  "network-wireless-signal-excellent-symbolic": "signal_wifi_4_bar",
  "network-wireless-signal-good-symbolic": "network_wifi_3_bar",
  "network-wireless-signal-ok-symbolic": "network_wifi_2_bar",
  "network-wireless-signal-weak-symbolic": "network_wifi_1_bar",
  "network-wireless-signal-none-symbolic": "signal_wifi_0_bar",
};

const SSIDs = (n) => Widget.Box({
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

const InputField = (n) => Widget.Box({
  hpack: "start",
  spacing: 5,
  hexpand: true,
  visible: false,
  class_name: "input-filed",
  children: [
    MaterialIcon({
      icon: "key",
      size: 24,
    }),
    Widget.Entry({
      placeholder_text: "password",
      on_accept: (self) => 
        Utils.execAsync(`nmcli device wifi connect ${n.ssid} password "${self.text}"`)
          .catch(print)
    })
  ]
});

function getAPs () {
  return network.wifi.access_points.map(n =>
    Widget.Button({
      class_name: "NMTray-scrollable-btn",
      child: Widget.Box(
        {vertical: true,},
        SSIDs(n),
        InputField(n),
      ),
      on_clicked: (btn) => (btn.child.children[1].visible = (!btn.child.children[1].visible))
    })
  )
}
const AccessPoints = Widget.Scrollable({
  hscroll: "never",
  hpack: "center",
  class_name: "NMTray-scrollable",
  child: Widget.Box({
    vertical: true,
    spacing: 10,
    children: [
      Widget.Box({
        vertical: true,
        children: getAPs(),
      })
    ]
  })
})
export const NMTray = Widget.Window({
  name: "NMTray",
  class_name: "NMTray",
  keymode: "on-demand",
  visible: false,
  anchor: ["right", "top"],
  margins: [20, 20, 0, 0],
  setup: (self) => self.keybind('Escape', () => 
    App.toggleWindow(String(self.name))
  ),
  child: AccessPoints,
})
