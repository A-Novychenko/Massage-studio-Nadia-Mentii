type BannerData = {
  _id: string;
  title: string;
  imgLink: string;
}[];

type AdminBannerData = {
  _id: string;
  title: string;
  imgLink: string;
};

type SessionsData = {
  _id: string;
  title: string;
  imgLink: string;
  description: string;
};

type ReviewsData = {
  _id: string;
  name: string;
  comment: string;
  grade: string;
  date: string;
};

type AboutMassageData = {
  _id: string;
  title: string;
  description: string;
  imgLink: string;
};

type PriceData = {
  _id: string;
  service: string;
  price: string;
  duration: string;
};

type CloseModalProps = {
  closeModal: () => void;
};

interface IFormInput {
  name: string;
  phone: string;
  comment: string;
}

interface IConsultFormInput {
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

type NewsData = {
  _id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imgLink: string;
  imgLargeLink: string;
  date: string;
};

type NewsDetailPageProps = {
  params: {
    _id: number;
  };
};

type SpecialistsData = {
  _id: string;
  name: string;
  summary: string;
  info: string;
  photoLink: string;
  сertificateLink: string;
};
