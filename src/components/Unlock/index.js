// Write your code here
import {useState} from 'react'
import {
  UnlockContainer,
  LockImage,
  UnlockImage,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)

  // Log message when component is mounted
  console.log('useState hook called')

  const handleUnlock = () => {
    // Using a callback to update state based on previous state
    setIsLocked(prevIsLocked => !prevIsLocked)
  }

  const handleLock = () => {
    setIsLocked(true)
  }

  return (
    <UnlockContainer>
      {isLocked ? (
        <>
          <LockImage
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <Text>Your Device is Locked</Text>
          <Button onClick={handleUnlock}>Unlock</Button>
        </>
      ) : (
        <>
          <UnlockImage
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <Text>Your Device is Unlocked</Text>
          <Button onClick={handleLock}>Lock</Button>
        </>
      )}
    </UnlockContainer>
  )
}

export default Unlock
