/// <reference path="./.sst/platform/config.d.ts" />

import { readdirSync } from "fs";

export default $config({
  app(input) {
    return {
      name: "codecoffeebreak",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
          aws: {
            region: "us-east-1",
          },
          cloudflare: true,
          random: true,
          tls: true,
      },
    };
  },
  async run() {
    $transform(cloudflare.WorkerScript, (script) => {
      script.logpush = true;
    });
    sst.Linkable.wrap(cloudflare.Record, function (record) {
      return {
        properties: {
          url: $interpolate`https://${record.name}`,
        },
      };
    });


    sst.Linkable.wrap(aws.cloudwatch.LogGroup, function (record) {
      return {
          properties: {
            retentionInDays: $app.stage === "production" ? 30 : 1, // 30 days in production, 1 day in dev
          }
      };
    });

    const outputs = {};
    for (const value of readdirSync("./infra/")) {
      const result = await import("./infra/" + value);
      if (result.outputs) Object.assign(outputs, result.outputs);
    }
    return outputs;
  },
});
