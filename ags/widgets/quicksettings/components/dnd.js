import { toggleBtn } from "./toggleButton.js";
const notifications = await Service.import('notifications');

export const DoNotDisturb = toggleBtn({
  icon: "do_not_disturb_on",
  tooltip: "Do not disturb",
  label: "Do not disturb",
}).hook(notifications, (self) => {
  self.on_clicked = function() {
    notifications.dnd = !notifications.dnd;
  };
  self.toggleClassName("active", notifications.dnd == true);
});
