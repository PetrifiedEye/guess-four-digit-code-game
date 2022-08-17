import { memo, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { castStringToNumberArray } from '../../helpers'
import { updateAnswer } from '../../store/actions/game'
import gameStateSelector from '../../store/selectors/game'

const Input = () => {
  const ref = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const { answer } = useSelector(gameStateSelector)

  useEffect(() => {
    ref.current?.focus()
  }, [])

  const onChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    dispatch(updateAnswer(castStringToNumberArray(value)))
  }

  return (
    <input
      onChange={onChange}
      ref={ref}
      value={answer.join('')}
      placeholder="Type digits here"
    />
  )
}

export default memo(Input)
