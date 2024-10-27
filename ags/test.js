Utils.notify({
  summary: "Notification example",
  iconName: "info-symbolic",
  body: "This is an example notification popup."
      + "You can style this with scss!",
  actions: {
    "Cool": () => print("pressed Cool"),
    "Another": () => print("Another"),
  },
})

