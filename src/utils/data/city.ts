export type City = {
  id: string;
  country: string;
  city: string;
  images: string[];
  banner: {
    card: string;
    background: string;
  };
  video?: string;
  info: string;
};

export const cities: City[] = [
  {
    id: "662-434-540",
    country: "Perancis",
    city: "Paris",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F2-min.png?alt=media&token=804dd0d3-990b-4dfd-868e-ff822f66cf3d",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F15-min.png?alt=media&token=0668d163-ff43-4283-8143-3e457a5f449a",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F5-min.png?alt=media&token=0f40034f-6f9d-40a5-a9d7-d22a8639de77",
    ],
    banner: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F6-min.png?alt=media&token=c69b5586-e14e-4cc0-9499-0dc3badff217",
      card: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F5cc12ad5-84cc-4c57-a9b7-8af97998c704?alt=media&token=f4b37f93-42fa-4cf6-830e-2e4d32afaf61",
    },
    video: "https://www.youtube.com/watch?v=eoZ9wGtruEU&t=2s",
    info: "",
  },
  {
    id: "982-989-722",
    country: "Swiss",
    city: "Bern",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F8.png?alt=media&token=21e0c99f-44b0-4409-8ca6-fa30d77be8ff",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F6.png?alt=media&token=d2010787-68ff-4d54-8939-afdff8fd1c70",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F3.png?alt=media&token=c63cf043-4d14-4667-ba31-97c3487a768f",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F1.png?alt=media&token=29b2fcd7-f0e3-4e5f-8c70-669e83e2dfcc",
    ],
    banner: {
      background:
        "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F1.png?alt=media&token=29b2fcd7-f0e3-4e5f-8c70-669e83e2dfcc",
      card: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FBern-City(1).png?alt=media&token=4d7ec828-93dd-4a46-89d7-630e349135ea",
    },
    video: "https://www.youtube.com/watch?v=8ge-gluA7tU&t=4s",
    info: "",
  },
  {
    id: "522-7-760",
    country: "Belanda",
    city: "Amsterdam",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F20.png?alt=media&token=3dce5ac1-ebf0-4378-a6be-862dbf09f8da",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F19.png?alt=media&token=a471b5e8-5b16-41a7-9593-510522e94ae8",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F29.png?alt=media&token=52e1cbba-dda8-427b-8157-879a7edd2edb",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F22.png?alt=media&token=b1610611-e3c5-4b51-aa3b-fb500d2fe9cd",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F23.png?alt=media&token=0e33a78f-330e-48f8-b1e8-bb1304606244",
    ],
    banner: {
      card: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2F82baab12-2d5f-4e42-9ae0-438bcdc1224d?alt=media&token=b8ae1420-250a-4869-b1cc-01fb66a367ae",
      background:
        "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F18.png?alt=media&token=85f19222-a2ec-41c6-9eba-3dbda3558bfc",
    },
    video: "https://www.youtube.com/watch?v=Oxv6IRcuNaI&t=1s",
    info: "",
  },
  {
    id: "422-64-482",
    country: "Inggris",
    city: "London",
    images: [],
    banner: {
      card: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F1706723624lucas-davies-iP8ElEhqHeY-unsplash.jpg?alt=media&token=c191c6ec-c7d7-4c46-a3ba-7152dc06d3c2",
      background:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F1706723624lucas-davies-iP8ElEhqHeY-unsplash.jpg?alt=media&token=c191c6ec-c7d7-4c46-a3ba-7152dc06d3c2",
    },
    video: "",
    info: "",
  },
  {
    id: "404-630-622",
    country: "Italia",
    city: "Roma",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F57.png?alt=media&token=21ab59cb-6706-4152-a9ee-8539b348f128",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F60.png?alt=media&token=7884ab08-1f06-4717-87f1-3bf638d76ebf",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F59.png?alt=media&token=326125ff-aa52-48af-89cb-f61b1300457d",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F62.png?alt=media&token=58fd76ce-7aa6-4c63-86d5-e268b625fc56",
    ],
    banner: {
      card: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(19)-min.png?alt=media&token=84487726-2ddc-4ce8-838f-070b8e3d78e7",
      background:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(19)-min.png?alt=media&token=84487726-2ddc-4ce8-838f-070b8e3d78e7",
    },
    video: "https://www.youtube.com/watch?v=y_4p6_KsqoE&t=1s",
    info: "",
  },
  {
    id: "313-522-871",
    country: "Swiss",
    city: "Zurich",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F67.png?alt=media&token=7941100d-e3e9-4e10-a1b0-12e3c31e219f",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F73.png?alt=media&token=982d9de2-8f6b-40bf-bf49-3784d3f0b215",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F72.png?alt=media&token=35e6eea2-cb21-4647-b6a3-169d751ea40f",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F69.png?alt=media&token=d9f8a2ee-4779-4bc5-940c-025a1fcce651",
    ],
    banner: {
      card: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FGallery%201.png?alt=media&token=05b1d2ee-8140-4dd2-840d-98c5223d7d82",
      background:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FGallery%201.png?alt=media&token=05b1d2ee-8140-4dd2-840d-98c5223d7d82",
    },
    video: "https://www.youtube.com/watch?v=OzERXqRBys4&t=1s",
    info: "",
  },
  {
    id: "738-188-590",
    country: "Ceko",
    city: "Praha",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F98.png?alt=media&token=3f076920-6b5f-48ab-8d7d-96c4321b7e7c",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F91.png?alt=media&token=12a72f54-23f9-4936-b38d-f58b9f4a41ec",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F94.png?alt=media&token=0f7944e8-a61e-4096-b86a-8a6c6e7687f0",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F97.png?alt=media&token=2b17e8c0-176a-496a-b144-1e15bc09afc6",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/cityImages%2F92.png?alt=media&token=90089eb1-0413-499c-862f-6989dd6eb112",
    ],
    banner: {
      card: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(22)-min.png?alt=media&token=671d26df-88cd-4018-9ee4-261085dc4299",
      background:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/cityImages%2FUntitled%20design%20(22)-min.png?alt=media&token=671d26df-88cd-4018-9ee4-261085dc4299",
    },
    video: "https://youtu.be/nEtSeuBygFA",
    info: "",
  },
  {
    id: "516-685-566",
    country: "Inggris",
    city: "Liverpool",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/getGuideImage%2F1695136565atanas-paskalev-raxrEx8kdY0-unsplash.jpg?alt=media&token=9c9d267a-bbac-45a4-bb0b-328e0750a08f",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/getGuideImage%2F1695136565conor-samuel--iPuEST6f9Y-unsplash.jpg?alt=media&token=ed6a92bd-9ac1-4c1a-9173-2032a6eb5be3",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/getGuideImage%2F1695136565fleur-eADQs40WywY-unsplash.jpg?alt=media&token=12b60853-2d27-4093-8f2b-0fc505153f8e",
      "https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/getGuideImage%2F1695136565jorge-percival-gta3TTF8h6A-unsplash.jpg?alt=media&token=de98bd71-1033-4631-b04c-f456ac9b0eea",
    ],
    banner: {
      card: "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F1695136431neil-martin-nFo5hbJTM8A-unsplash.jpg?alt=media&token=a0182101-fa13-4502-9b80-2afdfd813270",
      background:
        "https://ik.imagekit.io/getgoing/tr:w-800,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F1695136431neil-martin-nFo5hbJTM8A-unsplash.jpg?alt=media&token=a0182101-fa13-4502-9b80-2afdfd813270",
    },
    video: "https://youtu.be/nEtSeuBygFA",
    info: "",
  },
];
