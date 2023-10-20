type MongoApiParams = {
  action: string;
  data: object | null;
  collection: string;
};

type MongoApiBody = {
  collection: string;
  database: string;
  dataSource: string;
  filter?: object;
};

const {MONGODB_API_KEY} = process.env;

export const mongoApi = async ({action, data, collection}: MongoApiParams) => {
  const body: MongoApiBody = {
    collection: collection,
    database: "db-site-content",
    dataSource: "Cluster-Nadia-Mentii",
  };

  if (data) {
    body.filter = data;
  }

  const res = await fetch(
    `https://eu-central-1.aws.data.mongodb-api.com/app/data-alsgc/endpoint/data/v1/action/${action}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": MONGODB_API_KEY!,

        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  return await res.json();
};
