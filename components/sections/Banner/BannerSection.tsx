import {BannerSwiper} from "@/components/elements/swiper/swiper";
import clientPromise from "@/services/mongoDB";

export interface IDocument {
  _id: IId;
  title: string;
  imgLink: string;
}

export interface IId {
  $oid: string;
}

const {MONGODB_API_KEY} = process.env;

export const BannerSection = async () => {
  // const res = await fetch("http://localhost:3000/api/slides");
  // Novik
  // const res = await fetch(`/api/slides`);
  /////////////////////
  // const res = await fetch(`${process.env.BASE_HOST}/api/slides`);
  // const data = await res.json();
  // const slides = data?.data;
  /////////////////////////

  // const client = await clientPromise;
  // const db = client.db("db-site-content");

  // const data = await db.collection("slides").find().toArray();

  // const slides = data.map((el) => ({
  //   _id: el._id.toString(),
  //   title: el.title.toString(),
  //   imgLink: el.imgLink.toString(),
  // }));

  //   curl --location --request POST 'https://eu-central-1.aws.data.mongodb-api.com/app/data-alsgc/endpoint/data/v1/action/findOne' \
  // --header 'Content-Type: application/json' \
  // --header 'Access-Control-Request-Headers: *' \
  // --header 'api-key: hmYaEGFYYKUAzKz8IH6xKjPDJXovAYkxbFyFWVUnQ2QKZdKbjH2cxcXQufVyMZdl' \
  // --header 'Accept: application/ejson' \
  // --data-raw '{
  //     "collection":"<COLLECTION_NAME>",
  //     "database":"db-site-content",
  //     "dataSource":"Cluster-Nadia-Mentii",
  //     "projection": {"_id": 1}
  // }'

  // //

  const res = await fetch(
    // "https://eu-central-1.aws.data.mongodb-api.com/app/data-alsgc/endpoint/data/v1/action/findOne",
    "https://eu-central-1.aws.data.mongodb-api.com/app/data-alsgc/endpoint/data/v1/action/find",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": MONGODB_API_KEY!,
        // "api-key":
        //   "hmYaEGFYYKUAzKz8IH6xKjPDJXovAYkxbFyFWVUnQ2QKZdKbjH2cxcXQufVyMZdl",
        Accept: "application/ejson",
      },
      body: JSON.stringify({
        collection: "slides",
        database: "db-site-content",
        dataSource: "Cluster-Nadia-Mentii",
        // projection: {_id: 1},
      }),
    }
  );

  const {documents} = await res.json();
  console.log("documents", documents);

  const slides = documents.map((el: IDocument) => ({
    _id: el._id["$oid"].toString(),
    title: el.title.toString(),
    imgLink: el.imgLink.toString(),
  }));

  return (
    <section
      style={{
        paddingTop: 50,
        paddingBottom: 100,
        // marginTop: 50,
        // marginBottom: 50,
        backgroundColor: "rgba(51, 15, 179, 0.1)",
      }}
    >
      <div className="container">
        <h1 className="visually-hidden">Cтудія масажу Надії Ментій</h1>
        <BannerSwiper slides={slides} />
      </div>
    </section>
  );
};
