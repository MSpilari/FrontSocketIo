import logoImg from '../../assets/logo.svg'
import styles from './styles.module.scss'

const MessageList = () => {
	return (
		<div className={styles.messageListWrapper}>
			<img src={logoImg} alt='DoWhile Logo' />

			<ul className={styles.messageList}>
				<li className={styles.message}>
					<p className={styles.messageContent}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
						vel expedita vero culpa eum.
					</p>
					<div className={styles.messageUser}>
						<div className={styles.userImage}>
							<img src='https://github.com/MSpilari.png' alt='User Image' />
						</div>
						<span>MSpilari</span>
					</div>
				</li>
				<li className={styles.message}>
					<p className={styles.messageContent}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
						vel expedita vero culpa eum.
					</p>
					<div className={styles.messageUser}>
						<div className={styles.userImage}>
							<img src='https://github.com/MSpilari.png' alt='User Image' />
						</div>
						<span>MSpilari</span>
					</div>
				</li>
				<li className={styles.message}>
					<p className={styles.messageContent}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
						vel expedita vero culpa eum.
					</p>
					<div className={styles.messageUser}>
						<div className={styles.userImage}>
							<img src='https://github.com/MSpilari.png' alt='User Image' />
						</div>
						<span>MSpilari</span>
					</div>
				</li>
			</ul>
		</div>
	)
}

export { MessageList }
