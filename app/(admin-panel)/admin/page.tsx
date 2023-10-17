import {AdminSlidesSection} from "./components/sections/Slides/Slides";

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
    </>
  );
}
