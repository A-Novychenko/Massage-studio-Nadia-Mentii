type BannerData = {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    img: string;
  };
}[];

type SessionsAttributes = {
  img: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
};

type CommentAttributes = {
  name: string;
  comment: string;
  grade: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};