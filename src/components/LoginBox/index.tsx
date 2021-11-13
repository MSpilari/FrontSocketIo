import { useEffect } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'
import { api } from '../../services/api'
import styles from './styles.module.scss'

type AuthResponse = {
	token: string
	user: {
		id: string
		avatar_url: string
		name: string
		login: string
	}
}

const LoginBox = () => {
	const sigInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=46b4bbca1a356d5e4c1c`

	const signIn = async (githubCode: string) => {
		const response = await api.post<AuthResponse>('authenticate', {
			code: githubCode
		})

		const { token, user } = response.data

		localStorage.setItem('@dowhile:token', token)

		console.log(user)
	}

	useEffect(() => {
		const url = window.location.href

		const hasGithubCode = url.includes('?code=')

		if (hasGithubCode) {
			const [urlWithoutCode, githubCode] = url.split('?code=')

			window.history.pushState({}, '', urlWithoutCode)

			signIn(githubCode)
		}
	}, [])
	return (
		<div className={styles.loginBoxWrapper}>
			<strong>Entre e compartilhe sua mensagem</strong>
			<a href={sigInUrl} className={styles.signInWithGithub}>
				<VscGithubInverted size='24' />
				Entrar com Github
			</a>
		</div>
	)
}

export { LoginBox }
