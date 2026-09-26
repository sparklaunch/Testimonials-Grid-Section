import Image from "next/image";
import jeanette from "../assets/images/jeanette.jpg";
import styles from "./Jeanette.module.css";

export default function Jeanette() {
	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<Image
					src={jeanette}
					alt="Jeanette Harmon"
					className={styles.photo}
				/>
				<div className={styles.name}>
					<h2>Jeanette Harmon</h2>
					<p>Verified Graduate</p>
				</div>
			</div>
			<div className={styles.body}>
				<h3 className={styles.title}>
					An overall wonderful and rewarding experience
				</h3>
				<p className={styles.content}>
					Thank you for the wonderful experience! I now have a job I
					really enjoy, and make a good living while doing something I
					love.
				</p>
			</div>
		</section>
	);
}
