import { useParams } from "react-router-dom";
import { useBusiness } from "@/components/business/hooks";
import ErrorPage from "./ErrorPage";
import styles from "./BusinessPage.module.scss";

const BusinessPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useBusiness(params.id ?? "");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <ErrorPage />;

  return (
    data && (
      <div className={styles.flexContainer}>
        <div className={styles.topArea}>
          <div className={styles.topLeft}>
            <img src={data.imageUrls[0]} alt={data.name} />
            <div className={styles.topMainInfo}>
              <p className={styles.chip}>{data.category}</p>
              <h2>{data.name}</h2>
              <p>{data.address}</p>
              <p>{data.email}</p>
            </div>
          </div>
          <div className={styles.topRight}>
            <p className={styles.placeholder}>
              TODO: upload button / contact person / availability to be added
            </p>
          </div>
        </div>
        <div className={styles.mainArea}>
          <div className={styles.mainLeft}>
            <div className={styles.businessDescription}>
              <p className={styles.placeholder}>TODO: business description</p>
            </div>
            <div className={styles.galleryContainer}>
              <p className={styles.placeholder}>TODO: add gallery</p>
            </div>
          </div>
          <div className={styles.mainRight}>
            <button>BOOK APPOINTMENT</button>
            <p className={styles.placeholder}>TODO: similar businesses</p>
          </div>
        </div>
      </div>
    )
  );
};

export default BusinessPage;
