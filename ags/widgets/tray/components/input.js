import { MaterialIcon } from "../../../utils/materialIcon.js";

export const InputField = (n) => Widget.Box({
  hpack: "start",
  spacing: 5,
  hexpand: true,
  visible: false,
  class_name: "input",
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
