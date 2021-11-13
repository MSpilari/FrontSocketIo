import styles from './styles.module.scss'

const LoginBox = () => {
	return (
		<div className={styles.loginBoxWrapper}>
			<strong>Entre e compartilhe sua mensagem</strong>
			<a href='#' className={styles.signInWithGithub}>
				Entrar com Github
			</a>
		</div>
	)
}

export { LoginBox }
