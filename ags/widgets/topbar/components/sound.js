import { MaterialIcon } from "../../../utils/materialIcon.js";
const audio = await Service.import('audio');

export const Volume = Widget.EventBox({
  on_scroll_up: () => (audio.speaker.volume += 0.01),
  on_scroll_down: () => (audio.speaker.volume -= 0.01),
  on_secondary_click_release: () => (audio.speaker.is_muted = !audio.speaker.is_muted),
  child: Widget.Box({
    class_name: "applets",
  },
  MaterialIcon({
    size: 24,
  }).hook(audio.speaker, (self) => {
        const vol = audio.speaker.volume * 100;
        const icon = [
          [101, "sound_detection_loud_sound"],
          [67, "volume_up"],
          [34, "volume_down"],
          [1, "volume_mute"],
          [0, "volume_off"]
        ].find(([threshold]) => Number(threshold) <= vol)?.[1];
        if (audio.speaker.is_muted) self.label = "volume_off";
        else self.label = String(icon);
      }),
  Widget.Label()
    .hook(audio.speaker, (self) => {    
        const volume = audio.speaker.volume * 100;
        self.label = `${Math.floor(volume)}%`;
      })
  )
})
