import Image from "next/image";
import daniel from "../assets/images/daniel.jpg";
import quotation from "../assets/images/quotation.svg";
import styles from "./Daniel.module.css";

export default function Daniel() {
	return (
		<section className={styles.backdrop}>
			<div className={styles.background}>
				<Image src={quotation} alt="" className={styles.quotation} />
			</div>
			<div className={styles.card}>
				<div className={styles.header}>
					<Image
						src={daniel}
						alt="Daniel Clifford"
						className={styles.photo}
					/>
					<div className={styles.name}>
						<h2>Daniel Clifford</h2>
						<p>Verified Graduate</p>
					</div>
				</div>
				<div className={styles.body}>
					<p className={styles.title}>
						I received a job offer mid-course, and the subjects I
						learned were current, if not more so, in the company I
						joined. I honestly feel I got every penny&apos;s worth.
					</p>
					<p className={styles.content}>
						I was an EMT for many years before I joined the
						bootcamp. I&apos;ve been looking to make a transition
						and have heard some people who had an amazing experience
						here. I signed up for the free intro course and found it
						incredibly fun! I enrolled shortly thereafter. The next
						12 weeks was the best - and most grueling - time of my
						life. Since completing the course, I&apos;ve
						successfully switched careers, working as a Software
						Engineer at a VR startup.
					</p>
				</div>
			</div>
		</section>
	);
}
