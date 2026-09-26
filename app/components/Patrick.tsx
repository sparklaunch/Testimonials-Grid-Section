import Image from "next/image";
import patrick from "../assets/images/patrick.jpg";
import styles from "./Patrick.module.css";

export default function Patrick() {
	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<Image
					src={patrick}
					alt="Patrick Abrams"
					className={styles.photo}
				/>
				<div className={styles.name}>
					<h2>Patrick Abrams</h2>
					<p>Verified Graduate</p>
				</div>
			</div>
			<div className={styles.body}>
				<h3 className={styles.title}>
					Awesome teaching support from TAs who did the bootcamp
					themselves. Getting guidance from them and learning from
					their experiences was easy.
				</h3>
				<p className={styles.content}>
					The staff seem genuinely concerned about my progress which I
					find really refreshing. The program gave me the confidence
					necessary to be able to go out in the world and present
					myself as a capable junior developer. The standard is above
					the rest. You will get the personal attention you need from
					an incredible community of smart and amazing people.
				</p>
			</div>
		</section>
	);
}
