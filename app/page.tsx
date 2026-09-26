import styles from "./Home.module.css";
import Daniel from "./components/Daniel";
import Jonathan from "./components/Jonathan";

export default function Home() {
	return (
		<main className={styles.main}>
			<Daniel />
			<Jonathan />
		</main>
	);
}
