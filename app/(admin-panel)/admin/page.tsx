import { AdminAboutMassage } from "./components/sections/AboutMassage/AboutMassage";
import { AdminNews } from "./components/sections/News/News";
import { AdminOurSpecialists } from "./components/sections/OurSpecialists/OurSpecialists";
import { AdminPrice } from "./components/sections/Price/Price";
import { AdminReviews } from "./components/sections/Reviews/Reviews";
import { AdminSession } from "./components/sections/Session/Session";
import { AdminSlidesSection } from "./components/sections/Slides/Slides";

export default function AdminPage() {
  return (
    <>
      <div className="container">
        <h1
          style={{
            marginBottom: 40,
            textAlign: "center",
            fontSize: 32,
            textTransform: "uppercase",
          }}
        >
          Admin panel
        </h1>
      </div>
      <AdminSlidesSection />
      <AdminSession />
      <AdminReviews />
      <AdminAboutMassage />
      <AdminPrice />
      <AdminNews />
      <AdminOurSpecialists />
    </>
  );
}
