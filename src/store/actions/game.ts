import { GameActions } from '../constants/actions'
import { SecretItem } from '../types/game'

export const setGameSecret = (input: SecretItem[]) => ({
  type: GameActions.SET_GAME_SECRET,
  payload: input,
})

export const updateAnswer = (input: number[]) => ({
  type: GameActions.UPDATE_ANSWER,
  payload: input,
})
