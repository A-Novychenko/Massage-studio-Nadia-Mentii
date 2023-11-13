import { OurSpecialistsList } from "@/components/sections/Specialists/Specialists";

export default function AboutPage() {
  return (
    <>
      <OurSpecialistsList />
      <br />
      <br />
      <br />
      <br />
      <section className="about-me-page section">
        <h1 className="visually-hidden">про мене</h1>
        <div className="about-me-content container">
          <div className="about-me-img">
            {/* <img src="./img/about-me-photo.jpg" alt="фото" className="about-me-photo" width="648"> */}
          </div>
          <div className="about-me-text">
            <h2 className="about-me-title">Надія Ментій</h2>
            <p className="about-me-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cumque
              aliquam dolores quam maxime excepturi nesciunt voluptates facilis
              amet aliquid dicta vitae velit, obcaecati modi odio quae numquam
              atque, incidunt est cupiditate accusamus dignissimos. Earum eaque,
              a libero eum at praesentium dolorem ad quasi nostrum expedita
              facere odit quas dicta sint enim ratione. Eius labore accusamus
              voluptatum eum repellendus. Error quas atque in porro a tempore
              vitae debitis accusantium iure dolore. Saepe fugit commodi tenetur
              cumque illum, voluptatibus at dolorem nam totam, omnis officiis id
              suscipit dolores quasi, corporis repudiandae voluptatum?
              Laboriosam, dolorum adipisci id explicabo animi accusantium
              cupiditate quae qui deleniti aliquid, vitae amet nisi ea unde ad.
              In alias sapiente, magni assumenda iure laborum aperiam ab nemo
              esse, perferendis, et voluptate aut sint suscipit rerum incidunt
              ratione molestias sed reprehenderit quasi distinctio! Dolores eum
              quidem harum odio, reiciendis eligendi. Velit error numquam eos
              optio modi, molestiae dolor. Ab praesentium a impedit, ipsa
              adipisci totam doloribus ipsam! Eos praesentium, possimus
              laudantium non voluptatem sit provident cumque illo molestiae iste
              beatae eligendi, sunt tempore, doloribus fugiat. Iusto nulla
              sapiente, adipisci animi ad eligendi alias odit non ducimus
              repellat rerum similique incidunt iste minus dignissimos ipsam ab
              quod aut inventore rem? Maxime, fugit nam accusamus eum
              exercitationem magnam minima nulla suscipit modi tempora delectus
              assumenda fugiat. Accusantium soluta facere earum natus officia
              aspernatur delectus voluptates unde vel, libero sunt. Delectus
              perferendis quidem sequi quisquam quod quia nemo non quasi,
              repellendus minus, cum consectetur, ad illo at rem voluptate eum!
              Esse, iusto?
            </p>
          </div>
        </div>
      </section>
      <section className="certificate-page section">
        <div className="container">
          <ul className="certificate-list list">
            <li className="certificate-item">
              {/* <img src="./img/diplom-2.jpg" alt="" className="certificate-img"> */}
            </li>
            <li className="certificate-item">
              {/* <img src="./img/sertifikat-1.jpg" alt="" className="certificate-img"> */}
            </li>
            <li className="certificate-item">
              {/* <img src="./img/diplom-2.jpg" alt="" className="certificate-img"> */}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
