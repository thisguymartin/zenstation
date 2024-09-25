const ZenStationsTable = new sst.aws.Dynamo("ZenStations", {
    fields: {
      pk: "string",
      sk: "string"
    },
    primaryIndex: { hashKey: "pk", rangeKey: "sk" }
  });