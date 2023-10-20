import Image from "next/image";

type NewsDetailPageProps = {
  params: {
    _id: number;
  };
};

export default async function NewsDetailPage({
  params: {_id},
}: NewsDetailPageProps) {
  // const res = await fetch(`http://localhost:3000/api/news-posts/${_id}`);
  // Novik
  const res = await fetch(`${process.env.BASE_HOST}/api/news-posts/${_id}`);

  const {data} = await res.json();

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
