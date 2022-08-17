import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Input } from './components/input'
import { Result } from './components/result'
import { checkIsAnswerValid, generateSecret } from './helpers'
import { setGameSecret } from './store/actions/game'
import gameStateSelector from './store/selectors/game'

const TITLE = 'Guess 4 digit code'
const SUCCESS_MESSAGE = 'Hacked!'

const Game = () => {
  const { answer, secret } = useSelector(gameStateSelector)
  const [valid, setValid] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setGameSecret(generateSecret()))
  }, [dispatch])

  useEffect(() => {
    setValid(checkIsAnswerValid(secret, answer))
  }, [secret, answer])

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">{valid ? SUCCESS_MESSAGE : TITLE}</div>
        <Result />
        <Input />
      </header>
    </div>
  )
}

export default Game
