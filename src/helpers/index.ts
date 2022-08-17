import { v4 } from 'uuid'
import { SecretItem } from '../store/types/game'

const MAX_VALUE = 9

export const castStringToNumberArray = (input: string) =>
  input
    .slice(0, 4)
    .split('')
    .map((item) => {
      if (isNaN(+item)) {
        return 0
      }
      return +item
    })

export const generateSecret = (): SecretItem[] => {
  return new Array(4).fill(null).map(() => ({
    value: Math.floor(Math.random() * MAX_VALUE),
    key: v4(),
  }))
}

export const checkIsAnswerValid = (secret: SecretItem[], answer: number[]) => {
  return secret.every((item, index) => item.value === answer[index])
}
