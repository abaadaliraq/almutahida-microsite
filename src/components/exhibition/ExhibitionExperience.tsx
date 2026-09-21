import { OptionalImage } from "@/components/ui/OptionalImage";
import { exhibitionAssetPath, videoAssets } from "@/lib/assets";
import { OptionalVideo } from "./OptionalVideo";
import styles from "./ExhibitionExperience.module.css";

export function ExhibitionExperience() {
  return (
    <section className={styles.section} aria-labelledby="exhibition-title">
      <div className={styles.copyBlock}>
        <p className={styles.kicker}>Exhibition & VR Experience</p>
        <h2 id="exhibition-title" className={styles.heading}>
          BEYOND THE SCREEN
        </h2>
        <div className={styles.text}>
          <p dir="rtl">تجربة تتجاوز الشاشة</p>
          <p dir="rtl">
            يمكن استكشاف الجولات مباشرة عبر الشاشة، الهاتف، أو من خلال تجربة الواقع الافتراضي
            في المعارض والفعاليات.
          </p>
          <p>
            Experience the virtual factory on screen, on your phone, or through VR at
            exhibitions and events.
          </p>
        </div>
      </div>

      <div className={styles.mediaComposition}>
        <div className={styles.primaryMedia}>
          <OptionalVideo
            src={videoAssets.exhibition}
            poster={exhibitionAssetPath("exhibition-01.jpg")}
            className={styles.video}
            placeholderLabel="Exhibition video pending"
          />
        </div>
        <div className={styles.sideImageOne}>
          <OptionalImage
            src={exhibitionAssetPath("vr-01.jpg")}
            alt="VR exhibition experience"
            className={styles.image}
            placeholderLabel="VR photo pending"
          />
        </div>
        <div className={styles.sideImageTwo}>
          <OptionalImage
            src={exhibitionAssetPath("exhibition-02.jpg")}
            alt="Almutahida exhibition display"
            className={styles.image}
            placeholderLabel="Exhibition photo pending"
          />
        </div>
        <div className={styles.flow} aria-label="Experience flow">
          <span>REAL SPACE</span>
          <span>DIGITAL TOUR</span>
          <span>VR EXPERIENCE</span>
        </div>
      </div>
    </section>
  );
}
