import Image from "next/image";
import jonathan from "../assets/images/jonathan.jpg";
import styles from "./Jonathan.module.css";

export default function Jonathan() {
	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<Image
					src={jonathan}
					alt="Jonathan Walters"
					className={styles.photo}
				/>
				<div className={styles.name}>
					<h2>Jonathan Walters</h2>
					<p>Verified Graduate</p>
				</div>
			</div>
			<div className={styles.body}>
				<h3 className={styles.title}>
					The team was very supportive and kept me motivated
				</h3>
				<p className={styles.content}>
					I started as a total newbie with virtually no coding skills.
					I now work as a mobile engineer for a big company. This was
					one of the best investments I&apos;ve made in myself.
				</p>
			</div>
		</section>
	);
}
