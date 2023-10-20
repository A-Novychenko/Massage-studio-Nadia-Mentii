import Image from "next/image";

import {mongoApi} from "@/services/mongoApi";

export default async function NewsDetailPage({
  params: {_id},
}: NewsDetailPageProps) {
  const initialData = {
    _id: "1",
    title: "",
    shortDescription: "",
    longDescription: "",
    imgLink:
      "https://res.cloudinary.com/dsgx4xoew/image/upload/v1697839490/empty_gzi49n.png",
    imgLargeLink:
      "https://res.cloudinary.com/dsgx4xoew/image/upload/v1697839490/empty_gzi49n.png",
    date: "",
  };

  const mongoApiParams = {
    action: "findOne",
    data: {
      _id: {$oid: _id},
    },
    collection: "news-posts",
  };

  const res = await mongoApi(mongoApiParams);

  const data = res?.document ? res?.document : initialData;

  const {
    title,
    shortDescription,
    longDescription,
    imgLink,
    imgLargeLink,
    date,
  } = data;

  return (
    <div className="container">
      <h1>{title}</h1>

      <Image src={imgLargeLink} alt={title} width={1200} height={800} />
      <p>{longDescription}</p>
      <p> {new Date(Number(date)).toDateString()}</p>
    </div>
  );
}
