import {BannerSwiper} from "@/components/elements/swiper/swiper";

export const BannerSection = async () => {
  // const res = await fetch("http://localhost:3000/api/slides");
  // Novik
  const res = await fetch(`${process.env.BASE_HOST}/api/slides`);
  const data = await res.json();

  const slides = data?.data;

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
