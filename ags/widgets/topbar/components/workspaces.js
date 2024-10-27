const sway = await Service.import('sway');

function dispatch(ws = 1) {
  Utils.execAsync(`swaymsg workspace ${ws}`);
};

function range(length = 5, start = 1) {
  return Array.from({ length }, (_, i) => i + start);
};

const WS = (i = 1) => Widget.Icon({
  class_name: "ws",
}).hook(sway.active.workspace, (self) => {
    if (i == Number(sway.active.workspace.name)) {
      self.icon = "radio-button-checked-symbolic";
    } else {
      self.icon = "radio-button-unchecked-symbolic";
    };
});

export const WorkspaceIcons = Widget.Box({
  class_name: "topbar-workspaces",
  spacing: 5,
  hpack: "start",
  children: range(5).map( (i) => 
    Widget.Button({
      on_clicked: () => dispatch(i),
      child: WS(i)
    })
  )
});
