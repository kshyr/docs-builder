import Link from "next/link";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Work in progress...</h1>
        <p className={styles.description}>
          You can check{" "}
          <Link
            href={"/react-playground"}
            className="bg-gradient-to-b from-green-300 to-green-800 bg-clip-text font-semibold text-transparent"
          >
            React playground
          </Link>{" "}
          in the meantime.
        </p>
      </main>
    </div>
  );
}
