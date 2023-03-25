const tetrominoes = {

  // AKA the straight tetromino.
  I: {
    number: 1,
    matrix: [
      [ 0, 1, 0, 0 ],
      [ 0, 1, 0, 0 ],
      [ 0, 1, 0, 0 ],
      [ 0, 1, 0, 0 ]
    ],
    color: 'teal'
  },

  // AKA the square tetromino.
  O: {
    number: 2,
    matrix: [
      [ 2, 2 ],
      [ 2, 2 ],
    ],
    color: 'yellow'
  },

  // The T tetromino.
  T: {
    number: 3,
    matrix: [
      [ 3, 3, 3 ],
      [ 0, 3, 0 ],
      [ 0, 3, 0 ]
    ],
    color: 'purple'
  },

  // The J tetromino. Reflection of L.
  J: {
    number: 4,
    matrix: [
      [ 0, 4, 0, 0 ],
      [ 0, 4, 0, 0 ],
      [ 0, 4, 0, 0 ],
      [ 4, 4, 0, 0 ]
    ],
    color: 'blue'
  },

  // The L tetromino. Reflection of J.
  L: {
    number: 5,
    matrix: [
      [ 0, 5, 0, 0 ],
      [ 0, 5, 0, 0 ],
      [ 0, 5, 0, 0 ],
      [ 0, 5, 5, 0 ]
    ],
    color: 'orange'
  },

  // The S or skew tetromino. Reflection of Z.
  S: {
    number: 6,
    matrix: [
      [ 0, 6, 6 ],
      [ 6, 6, 0 ],
      [ 0, 0, 0 ]
    ],
    color: 'green'
  },

  // The Z tetromino. Reflection of S.
  Z: {
    number: 7,
    matrix: [
      [ 7, 7, 0 ],
      [ 0, 7, 7 ],
      [ 0, 0, 0 ]
    ],
    color: 'red'
  }
};

export default tetrominoes;