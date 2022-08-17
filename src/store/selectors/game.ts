import { RootState } from '../reducers'
import { GameState } from '../types/game'

const gameStateSelector = (state: RootState): GameState => state.game

export default gameStateSelector
