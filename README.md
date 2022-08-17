# Guessing a code of 4 digits game

## Quick start

- run `yarn install`
- run `yarn start`

## Task

> React App
> Use redux.
>
> we're going to build this in steps 0. boot up a create-react-app with a root (stateful) component
>
> 1. guessing a code of 4 digits
>    - build a pure component (controlled style input) which lets us input the code
>    - build another pure component which displays the result (black and white dots)
>    - use the stateful component to render the two pure components
>    * initialize with a valid state and render the components
>    * bind event handlers to the pure components, update the state based thereon
>    * ( state will trigger a render which will show the new valid state )
>    - testing these components is KEY
> 2. running the game based on the guesses
>    - each guess should trigger the next guess, unless it solves the game
>
> (1) is the most important item, along withe testing for it AND USING CREATE-REACT-APP linting actually getting a game running is like bonus

## Notes

App written using react-create-app tool, also the following core dependencies are used:

- `redux` and `react-redux` for state management
- `typescript` for types coverage
- `uuid` for generating unique keys for array items

## Architecture overview

App written using functional components and hooks, but same result can be achieved with class components too

Wrapping `Input` and `Result` in React.memo function is not necessary since we're not providing any props

### Folder structure

- `components` - (includes `Result` and `Input` components)
- `helpers` - (includes all calculation functions that used in the game)
- `store`
  - `actions` - (for redux actions)
  - `constants` - (for redux action types)
  - `reducers` - (for app reducers and index.ts which exports rootReducer)
  - `selectors` - (for selector functions)
  - `types` - (for all necessary types)
  - `index.ts` - (exports `store` variable for redux `Provider`)

#### App includes four components

##### `src/App.tsx`

Which wraps application with redux `Provider` and provide `store` to it.

##### `src/game.tsx`

Component which renders title, `Result` and `Input` components

It sets the digit code which is generated randomly using `generateSecret` function on initial render

Checks is answer valid or not and change the title

##### `src/components/input/input.component.tsx`

Renders controlled `input` and take `answer` variable from `store` to show inserted answer

Fires `updateAnswer` action on each `onChange` event, map this value using `castStringToNumberArray` helper

#### `src/components/result/result.component.tsx`

Renders a list with dots mapped form `secret` and `answer` from `store`

If `secret` and `answer` values equal by the same index then dot will be colored in white, otherwise black
