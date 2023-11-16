//Action creators
export const increment = () => ({ type: 'INC' }) // will get an error in the console it is plus of the creators
export const decrement = () => ({ type: 'DEC' })
export const random = (value) => ({ type: 'RND', payload: value })