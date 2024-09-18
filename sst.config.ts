/// <reference path="./.sst/platform/config.d.ts" />

import { readdirSync } from "fs";

export default $config({
  app(input) {
    return {
      name: "zenstation",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "cloudflare",
      providers: {
          aws: true,
          cloudflare: true,
      },
    };
  },
  async run() {
    // $transform(cloudflare.WorkerScript, (script) => {
    //   script.logpush = true;
    // });
    // sst.Linkable.wrap(cloudflare.Record, function (record) {
    //   return {
    //     properties: {
    //       url: $interpolate`https://${record.name}`,
    //     },
    //   };
    // });
    // const outputs = {};
    // for (const value of readdirSync("./infra/")) {
    //   const result = await import("./infra/" + value);
    //   if (result.outputs) Object.assign(outputs, result.outputs);
    // }
    // return outputs;
  },
});
