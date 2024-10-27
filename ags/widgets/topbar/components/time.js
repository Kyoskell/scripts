import { MaterialIcon } from "../../../utils/materialIcon.js";
const date = Variable("", {
    poll: [1000, 'date "+%H:%M"'],
})

export const Time = Widget.Box({
  class_name: "applets",
  spacing: 5,
  children: [
    Widget.Label({
      label: date.bind(),
    }),
    MaterialIcon({
      icon: "calendar_clock",
      size: 24,
    })
  ]
})
