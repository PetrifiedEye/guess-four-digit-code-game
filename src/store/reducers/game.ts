import { GameActions } from '../constants/actions'
import {
  GameState,
  SetGameSecretAction,
  UpdateAnswerAction,
} from '../types/game'

const initialState: GameState = {
  answer: [],
  secret: [],
}

type ActionTypes = SetGameSecretAction | UpdateAnswerAction

export default function gameReducer(
  state = initialState,
  action: ActionTypes
): GameState {
  switch (action.type) {
    case GameActions.SET_GAME_SECRET: {
      return { ...state, secret: action.payload }
    }
    case GameActions.UPDATE_ANSWER: {
      return { ...state, answer: action.payload }
    }
    default:
      return state
  }
}
