import styles from "./Home.module.css";
import Daniel from "./components/Daniel";
import Jeanette from "./components/Jeanette";
import Jonathan from "./components/Jonathan";
import Kira from "./components/Kira";

export default function Home() {
	return (
		<main className={styles.main}>
			<Daniel />
			<Jonathan />
			<Kira />
			<Jeanette />
		</main>
	);
}
