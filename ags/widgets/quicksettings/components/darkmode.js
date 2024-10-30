import { config } from "../../../config/var.js";
import { toggleBtn } from "./toggleButton.js";

export const DarkMode = toggleBtn({
  icon: "dark_mode",
  size: 24,
  tooltip: "Dark Mode",
  label: "Dark Mode",
}).hook(config.dark_theme, (self) => {
  self.on_clicked = function () {
    config.dark_theme.updateValue(!config.dark_theme.value)
  };
  self.toggleClassName("active", config.dark_theme.value == true)
})
