import styles from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
       </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Nima with Love</p>
      </footer>
    </>
  );
};

export default Layout;
