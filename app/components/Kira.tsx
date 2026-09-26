import Image from "next/image";
import kira from "../assets/images/kira.jpg";
import styles from "./Kira.module.css";

export default function Kira() {
	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<Image src={kira} alt="Kira Whittle" className={styles.photo} />
				<div className={styles.name}>
					<h2>Kira Whittle</h2>
					<p>Verified Graduate</p>
				</div>
			</div>
			<div className={styles.body}>
				<h3 className={styles.title}>
					Such a life-changing experience. Highly recommended!
				</h3>
				<p className={styles.content}>
					Before joining the bootcamp, I&apos;ve never written a line
					of code. I needed some structure from professionals who can
					help me learn programming step by step. I was encouraged to
					enroll by a former student of theirs who can only say
					wonderful things about the program. The entire curriculum
					and staff did not disappoint. They were very hands-on and I
					never had to wait long for assistance. The agile team
					project, in particular, was outstanding. It took my learning
					to the next level in a way that no tutorial could ever have.
					In fact, I&apos;ve often referred to it during interviews as
					an example of my development experience. It certainly helped
					me land a job as a full-stack developer after receiving
					multiple offers. 100% recommend!
				</p>
			</div>
		</section>
	);
}
