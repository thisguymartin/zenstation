export const domain =
  {
    production: "zenstation.me",
    dev: "dev.zenstation.me",
  }[$app.stage] || $app.stage + ".dev.zenstation.me";


export const zone = cloudflare.getZoneOutput({
  name: "zenstation.me",
});

