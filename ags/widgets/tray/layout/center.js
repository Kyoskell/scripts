import { InputField } from "../components/input.js";
import { SSIDs } from "../components/ssids.js";
const network = await Service.import('network');

export function getAPs () {
  const access_points = network.wifi.access_points.map(n => 
    Widget.Button({
      class_name: "btn",
      child: Widget.Box(
        {vertical: true,},
        SSIDs(n),
        InputField(n),
      ),
      on_clicked: (btn) => (btn.child.children[1].visible = (!btn.child.children[1].visible))
    })
  );

  return [... new Set(access_points)]
}

export const Center = Widget.Scrollable({
  hscroll: "never",
  hpack: "start",
  class_name: "center",
  child: Widget.Box({
    vertical: true,
    spacing: 10,
  }).hook(network.wifi, (self) => {
    self.children = getAPs();
  })
})
