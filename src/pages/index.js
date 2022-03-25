import styles from "../../styles/Home.module.css";
import YouTube from "react-youtube";

export default function Home() {
  return (
    <div className={styles.container}>
      <p>test</p>
      <YouTube videoId="2g811Eo7K8U" />
    </div>
  );
}
