import {BannerSwiper} from "@/components/elements/swiper/swiper";
import {mongoApi} from "@/services/mongoApi";

const {MONGODB_API_KEY} = process.env;

export const BannerSection = async () => {
  // const res = await fetch(
  //   "https://eu-central-1.aws.data.mongodb-api.com/app/data-alsgc/endpoint/data/v1/action/find",
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Request-Headers": "*",
  //       "api-key": MONGODB_API_KEY!,

  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       collection: "slides",
  //       database: "db-site-content",
  //       dataSource: "Cluster-Nadia-Mentii",
  //     }),
  //   }
  // );

  const mongoApiParams = {
    action: "find",
    data: null,
    collection: "slides",
  };

  const res = await mongoApi(mongoApiParams);

  const initialSlides = [{_id: "1", title: "", imgLink: ""}];

  const slides = res?.documents ? res?.documents : initialSlides;

  return (
    <section
      style={{
        paddingTop: 50,
        paddingBottom: 100,

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
