import { tourAssetPath } from "@/lib/assets";
import type { Tour } from "@/types/tour";

const matterportTours = [
  {
    id: "tour-01",
    order: 1,
    slug: "silo",
    titleEn: "Silo",
    titleAr: "الصوامع",
    descriptionEn: "Virtual tour of the silo area.",
    descriptionAr: "جولة افتراضية داخل منطقة الصوامع.",
    matterportModelId: "5tCfqntXjR6",
  },
  {
    id: "tour-02",
    order: 2,
    slug: "shrink",
    titleEn: "Shrink Factory",
    titleAr: "مصنع الشرنك",
    descriptionEn: "Virtual tour of the shrink factory.",
    descriptionAr: "جولة افتراضية داخل مصنع الشرنك.",
    matterportModelId: "iLdhB8C67gH",
  },
  {
    id: "tour-03",
    order: 3,
    slug: "ampoules",
    titleEn: "Ampoules Factory",
    titleAr: "مصنع الأمبولات",
    descriptionEn: "Virtual tour of the ampoules factory.",
    descriptionAr: "جولة افتراضية داخل مصنع الأمبولات.",
    matterportModelId: "DjHQnTfYjbs",
  },
  {
    id: "tour-04",
    order: 4,
    slug: "printing",
    titleEn: "Printing Factory",
    titleAr: "مصنع الطباعة",
    descriptionEn: "Virtual tour of the printing factory.",
    descriptionAr: "جولة افتراضية داخل مصنع الطباعة.",
    matterportModelId: "Fo3oedGmDfc",
  },
  {
    id: "tour-05",
    order: 5,
    slug: "caps",
    titleEn: "Caps Factory",
    titleAr: "مصنع الأغطية",
    descriptionEn: "Virtual tour of the caps factory.",
    descriptionAr: "جولة افتراضية داخل مصنع الأغطية.",
    matterportModelId: "fBEumNUJZVd",
  },
] as const;

const tourGalleryImages: Record<(typeof matterportTours)[number]["slug"], string[]> = {
  silo: ["09162026_090101.jpg", "09162026_090127.jpg", "09162026_090155.jpg"],
  shrink: [
    "09162026_090441.jpg",
    "09162026_090512.jpg",
    "09162026_090555.jpg",
    "09162026_090652.jpg",
  ],
  ampoules: [
    "09162026_091305.jpg",
    "09162026_091334.jpg",
    "09162026_091423.jpg",
    "09162026_091447.jpg",
    "09162026_091607.jpg",
    "09162026_091633.jpg",
    "10292025_203356.jpg",
    "10292025_203523.jpg",
  ],
  printing: [
    "09162026_092307.jpg",
    "09162026_092333.jpg",
    "09162026_092358.jpg",
    "09162026_092456.jpg",
    "09162026_092530.jpg",
    "09162026_092644.jpg",
    "09162026_092738.jpg",
    "10292025_202517.jpg",
  ],
  caps: [
    "09162026_093314.jpg",
    "09162026_093340.jpg",
    "09162026_093406.jpg",
    "10302025_132428.jpg",
  ],
};

export const tours: Tour[] = matterportTours.map((tour) => ({
  ...tour,
  matterportUrl: `https://my.matterport.com/show/?m=${tour.matterportModelId}`,
  qrDestinationUrl: `https://my.matterport.com/show/?m=${tour.matterportModelId}`,
  coverImage: tourAssetPath(tour.slug, "cover.jpg"),
  posterImage: tourAssetPath(tour.slug, "poster.jpg"),
  video: tourAssetPath(tour.slug, "video.mp4"),
  qrImage: tourAssetPath(tour.slug, "qr.png"),
  gallery: tourGalleryImages[tour.slug].map((filename) => tourAssetPath(tour.slug, filename)),
  highlights: [],
  facts: [],
  enabled: true,
}));

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}
