import { memo } from 'react'
import { useSelector } from 'react-redux'
import gameStateSelector from '../../store/selectors/game'
import { styles } from './styles'

const Result = () => {
  const { secret, answer } = useSelector(gameStateSelector)

  return (
    <div style={styles.container}>
      {secret.length > 0
        ? secret.map((item, index) => {
            const style =
              answer[index] === secret[index].value
                ? styles.whiteDot
                : styles.blackDot
            return <div key={item.key} style={{ ...styles.dot, ...style }} />
          })
        : null}
    </div>
  )
}

export default memo(Result)
