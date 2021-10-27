const skills = [
  {text: 'Data Structures and Algorithms', rank: 1, _id: 125223},
  {text: 'Programming Languages', rank: 2, _id: 127904},
  {text: 'Source Skills', rank: 3, _id: 139608},
  {text: 'Text Editors', rank: 4, _id: 1567847},
  {text: 'IDEs, integrated Development Environment', rank: 5, _id: 111210},
  {text: 'DataBases', rank: 6, _id: 144567,
  text: 'Operating Systems', rank: 7, _id: 122321},
  {text: 'Networking Basics', rank: 8, _id: 199094},
  {text: 'Basics of Training', rank: 9, _id: 188767}
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, skills)

  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}