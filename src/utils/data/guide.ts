export type Guide = {
  id: string;
  name: string;
  country: string;
  city: string;
  languages: string[];
  about?: string;
  imagesUrl: {
    profile: string;
    banner: string;
  };
  rate: number;
};

export const guides: Guide[] = [
  {
    id: "0d7158d277af446f8da576ad935e1975",
    name: "Nuel",
    country: "perancis",
    city: "paris",
    languages: ["indonesia", "prancis"],
    about:
      "Hi! panggil aja Nuel, karena lagi liburan jadi harus senang senang ya!!",
    imagesUrl: {
      profile:
        "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F17265609611724200976015.jpeg?alt=media&token=6a0ac354-f748-4c03-bf18-ff0f48f929e1",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F17265609611724200976015.jpeg?alt=media&token=6a0ac354-f748-4c03-bf18-ff0f48f929e1",
    },
    rate: 2_040_000,
  },
  {
    id: "73abb8498784407ebc86a3280f9eecb1",
    name: "Agues",
    country: "italia",
    city: "roma",
    languages: ["indonesia", "italia"],
    about: undefined,
    imagesUrl: {
      profile:
        "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FAgus%20Sandra?alt=media&token=921d2aff-6579-4bb7-a3fc-355ee4145f4f",
    },
    rate: 2_000_000,
  },
  {
    id: "783efd994d70421d9a363ee57bc63a42",
    name: "Stella",
    country: "swiss",
    city: "zurich",
    languages: ["indonesia", "inggris", "jerman"],
    about: undefined,
    imagesUrl: {
      profile:
        "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FStella%20Runia?alt=media&token=1b69c0d0-80d3-4947-8788-a421e2f00774",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FStella%20Runia?alt=media&token=1b69c0d0-80d3-4947-8788-a421e2f00774",
    },
    rate: 3_050_000,
  },
  {
    id: "47ecd0be6b4b44ac80200895370a6872",
    name: "Januar",
    country: "jerman",
    city: "munich",
    languages: ["indonesia", "inggris", "jerman"],
    about: undefined,
    imagesUrl: {
      profile:
        "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/avatar%2FPHOTO-2018-09-23-16-32-02.jpg?alt=media&token=4ea14f69-6ea5-4c9b-83ac-2e8b3ca107d6",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/avatar%2FPHOTO-2018-09-23-16-32-02.jpg?alt=media&token=4ea14f69-6ea5-4c9b-83ac-2e8b3ca107d6",
    },
    rate: 1_530_000,
  },
  {
    id: "58ce580c30a542208fc4acd599f2b525",
    name: "Gio",
    country: "belanda",
    city: "amsterdam",
    languages: ["indonesia", "inggris", "belanda"],
    about: undefined,
    imagesUrl: {
      profile:
        "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FIMG_1904.jpeg?alt=media&token=ee183e63-aa7a-452d-99dd-840c885486f6",
      banner:
        "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/bergabungFormImage%2FIMG_1904.jpeg?alt=media&token=ee183e63-aa7a-452d-99dd-840c885486f6",
    },
    rate: 2_000_000,
  },
];
