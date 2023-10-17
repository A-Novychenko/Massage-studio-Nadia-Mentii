type BannerData = {
  _id: string;
  title: string;
  imgLink: string;
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

type AboutMassageAttributes = {
  subtitle: string;
  text: string;
  img: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type PriceAttributes = {
  service: string;
  price: string;
  duration: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type CloseModalProps = {
  closeModal: () => void;
};

interface IFormInput {
  name: string;
  phone: string;
  comment: string;
}

type InputsBuySessionForm = {
  phone: string;
  name: string;
};

type BunnerModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

type PriceFormProps = {
  service: string;
  price: string;
  duration: string;
};

type NewsAttributes = {
  title: string;
  long_descr: string;
  short_descr: string;
  img_small: string;
  img_big: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
