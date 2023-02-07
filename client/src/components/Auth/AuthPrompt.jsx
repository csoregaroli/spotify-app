import SpotifyButton from './SpotifyButton'

const AuthPrompt = ({ copy }) => {
  const { header, subheader, buttonCta } = copy || {}

  return (
    <div>
      <SpotifyButton cta={buttonCta} />
    </div>
  )
}

export default AuthPrompt
