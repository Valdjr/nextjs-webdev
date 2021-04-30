import headerStyles from "../styles/Header.module.css";

export default function Header() {
	return (
		<div>
			<h1 className={headerStyles.title}>
				<span>Webdev</span> News
			</h1>
			<p className={headerStyles.description}>Keep up to date with the lateste web dev news</p>
		</div>
	);
}
