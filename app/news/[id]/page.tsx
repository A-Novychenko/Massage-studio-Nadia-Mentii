import Image from "next/image";

type NewsDetailPageProps = {
  params: {
    id: number;
  };
};

export default async function NewsDetailPage({
  params: {id},
}: NewsDetailPageProps) {
  const res = await fetch(`http://127.0.0.1:1337/api/news-posts/${id}`);

  const {data} = await res.json();

  const {
    title,
    createdAt,
    updatedAt,
    publishedAt,
    short_descr,
    img_small,
    img_big,
    long_descr,
  } = data?.attributes;
  return (
    <div className="container">
      <h1>{title}</h1>

      <Image src={img_big} alt={title} width={1200} height={800} />
      <p>{long_descr}</p>
      <p>{createdAt}</p>
    </div>
  );
}
