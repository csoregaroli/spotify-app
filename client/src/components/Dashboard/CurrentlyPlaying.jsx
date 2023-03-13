import { useCurrentlyPlaying } from '../../hooks/useCurrentlyPlaying'

export const CurrentlyPlaying = () => {
  const { currentlyPlaying } = useCurrentlyPlaying()

  //   console.log(currentlyPlaying)

  return <div>currently playing</div>
}
