import { applauncher } from "./widgets/applauncher/main.js";
import { TopBar } from "./widgets/topbar/main.js";
import { QuickSettings } from "./widgets/quicksettings/main.js";
import { NMTray } from "./widgets/tray/main.js";
import { NotificationPopups } from "./widgets/notifications/popups.js";
import { setTheme } from "./utils/theme.js";

function applyScss () {
  let scss = App.configDir + "/style/style.scss";
  let css = App.configDir + "/style.css";
  Utils.execAsync(`sass ${scss} ${css}`);
  App.resetCss();
  App.applyCss(css);
}

Utils.monitorFile(
  `${App.configDir}` + "/style/",
  function() {
    applyScss()
  },
)

Utils.monitorFile(
  `${App.configDir}` + "/config/colors.json",
  function() {
    setTheme();
  }
)
App.config({
    icons: `${App.configDir}/assets/`,
    style: `${App.configDir}/style.css`,
    windows: [TopBar, applauncher, QuickSettings, NMTray, NotificationPopups() ],
    gtkTheme: "Materia",
    iconTheme: "Papirus-Dark",
})
