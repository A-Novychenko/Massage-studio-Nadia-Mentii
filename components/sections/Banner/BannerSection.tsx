import {mongoApi} from "@/services/mongoApi";
import {BannerSwiper} from "@/components/elements/swiper/swiper";

export const BannerSection = async () => {
  const initialSlides = [
    {
      _id: "1",
      title: "",
      imgLink:
        "https://res.cloudinary.com/dsgx4xoew/image/upload/v1697839490/empty_gzi49n.png",
    },
  ];
  const mongoApiParams = {
    action: "find",
    data: null,
    collection: "slides",
  };

  const res = await mongoApi(mongoApiParams);

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
