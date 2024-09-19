import { domain } from "./dns";

export const www = new sst.aws.Nuxt("Site", {
    domain: {
      name: "www." + domain,
      dns: sst.cloudflare.dns(),
    },
    path: "./packages/www",
    link: [],
  });
  
  export const outputs = {
    www: www.url,
  };