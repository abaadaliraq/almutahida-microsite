import { notFound } from "next/navigation";
import { ExperienceFooter } from "@/components/factory/ExperienceFooter";
import { FactoryGallery } from "@/components/factory/FactoryGallery";
import { FactoryHeader } from "@/components/factory/FactoryHeader";
import styles from "@/components/factory/FactoryLayout.module.css";
import { FactoryQR } from "@/components/factory/FactoryQR";
import { FactoryTour } from "@/components/factory/FactoryTour";
import { FactoryVideo } from "@/components/factory/FactoryVideo";
import { OtherFactories } from "@/components/factory/OtherFactories";
import { getTourBySlug, tours } from "@/data/tours";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  return {
    title: tour ? `${tour.titleEn} | Almutahida Virtual Tours` : "Factory Tour",
  };
}

export default async function FactoryTourPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const enabledTours = tours.filter((item) => item.enabled).sort((a, b) => a.order - b.order);

  return (
    <main className={styles.factoryPage}>
      <FactoryHeader tour={tour} totalTours={enabledTours.length} />
      <FactoryTour tour={tour} />
      <FactoryGallery tour={tour} />
      <FactoryVideo tour={tour} />
      <FactoryQR tour={tour} />
      <OtherFactories currentSlug={tour.slug} tours={enabledTours} />
      <ExperienceFooter />
    </main>
  );
}
