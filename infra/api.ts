sst.Linkable.wrap(random.RandomString, (resource) => ({
    properties: {
      value: resource.result,
    },
  }));

  export const authFingerprintKey = new random.RandomString(
    "AuthFingerprintKey",
    {
      length: 32,
    },
  );