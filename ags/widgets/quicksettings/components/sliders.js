import brightness from "../../../services/brightness.js";
import { MaterialIcon } from "../../../utils/materialIcon.js";  
const audio = await Service.import('audio');

/** @param {'speaker' | 'microphone'} type */
export const AudioSlider = (type = 'speaker', icon = "mic") => Widget.Box({
  hpack: "start",
  children: [
    MaterialIcon({
      icon: icon,
      size: 24,
    }),
    Widget.Slider({
      hexpand: true,
      drawValue: false,
      onChange: ({value}) => audio[type].volume = value,
      value: audio[type].bind('volume'),
      max: 1.5,
      min: 0,
    })
  ]
});

export const BrightnessSlider = Widget.Box({
  hpack: "start",
  children: [
    MaterialIcon({
      icon: "brightness_medium",
      size: 24,
    }),
    Widget.Slider({
      hexpand: true,
      drawValue: false,
      onChange: ({value}) => brightness.screen_value = value,
      value: brightness.bind('screen_value'),
    }),
  ]
});
