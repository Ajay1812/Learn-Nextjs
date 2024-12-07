import styles from "./projects.module.css";
import Link from "next/link";
export default function ProjectList() {
  return (
    <main>
      <h1>ProjectList</h1>
      <ul className={styles.ul}>
        <li>
          <Link href="/projects/jobit">JobIt</Link>
        </li>
        <li>
          <Link href="/projects/carrent">CarRent</Link>
        </li>
        <li>
          <Link href="/projects/hipnode">Hipnode</Link>
        </li>
      </ul>
    </main>
  );
}
