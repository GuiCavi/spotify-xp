import styles from "./HorizontalList.module.scss";

const HorizontalList = ({ children }) => (
  <ul className={styles.HorizontalList}>
    {children}
  </ul>
);

export default HorizontalList;
