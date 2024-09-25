export const domain =
  {
    production: "codecoffeebreak.com",
    dev: "dev.codecoffeebreak.com",
  }[$app.stage] || $app.stage + ".codecoffeebreak.com";


export const zone = cloudflare.getZoneOutput({
  name: "codecoffeebreak.com",
});

