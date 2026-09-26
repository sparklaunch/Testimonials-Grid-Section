import styles from "./Home.module.css";
import Daniel from "./components/Daniel";

export default function Home() {
	return (
		<main className={styles.main}>
			<Daniel />
		</main>
	);
}
