//Action creators
export const inc = () => ({ type: 'INC' }) // will get an error in the console it is plus of the creators
export const dec = () => ({ type: 'DEC' })
export const rnd = () => ({ type: 'RND', payload: Math.floor(Math.random() * 100) })