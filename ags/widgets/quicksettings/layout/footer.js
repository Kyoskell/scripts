import { AudioSlider, BrightnessSlider } from "../components/sliders.js";

export const Footer = Widget.Box(
  {
    class_name: "footer",
    vertical: true,
  },
  AudioSlider("speaker", "speaker"),
  AudioSlider("microphone", "media_output"),
  BrightnessSlider
);
