export type TourFact = {
  labelEn: string;
  labelAr?: string;
  valueEn: string;
  valueAr?: string;
};

export type Tour = {
  id: string;
  order: number;
  slug: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  coverImage: string;
  posterImage: string;
  video?: string;
  gallery: string[];
  qrImage: string;
  qrDestinationUrl: string;
  matterportUrl: string;
  matterportModelId: string;
  categoryEn?: string;
  categoryAr?: string;
  locationEn?: string;
  locationAr?: string;
  productionDescriptionEn?: string;
  productionDescriptionAr?: string;
  highlights?: string[];
  facts?: TourFact[];
  enabled: boolean;
};
