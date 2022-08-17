import { GameActions } from '../constants/actions'

export interface SecretItem {
  value: number
  key: string
}

export interface GameState {
  secret: SecretItem[]
  answer: number[]
}

export interface UpdateAnswerAction {
  type: GameActions.UPDATE_ANSWER
  payload: number[]
}

export interface SetGameSecretAction {
  type: GameActions.SET_GAME_SECRET
  payload: SecretItem[]
}
