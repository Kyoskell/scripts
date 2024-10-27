import { toggleBtn } from "./toggleButton.js";
const notifications = await Service.import('notifications');

export const DoNotDisturb = toggleBtn({
  icon: "do_not_disturb_on",
  tooltip: "Do not disturb",
  label: "Do not disturb",
}).hook(notifications, (self) => {
  if (notifications.dnd) {
    self.class_name = "active";
  }
});
