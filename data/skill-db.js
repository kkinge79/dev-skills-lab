const skills = [
  {text: 'Data Structures and Algorithms', rank: 'S Tier', _id: 125223, d: 'This skill is the topmost priority by most of the companies to check the problem solving and coding skill.'},
  {text: 'Programming Languages', rank: 'S Tier', _id: 127904, d: 'In order to become a good programmer you must have command on at least one programming language in depth.'},
  {text: 'Source Control', rank: 'S Tier', _id: 139608, d:'Source control helps the developer in managing and storing their code.'},
  {text: 'Text Editors', rank: 'S Tier', _id: 1567847, d: ' It doesn’t matter you are a beginner, intermediate or expert level programmer. Every programmer’s programming journey start from text editors.'},
  {text: 'IDEs, integrated Development Environment', rank: 'S Tier', _id: 111210, d:' IDEs allows you to write, modify, compile, run and debug your code.'},
  {text: 'DataBases', rank: 'S Tier', _id: 144567, d: 'An essential skill for developers is understanding of working with databases. ',
  text: 'Operating Systems', rank: 'S Tier', _id: 122321, d:'A serious software developer should know the fundamentals and mechanism of the operating system.'},
  {text: 'Networking Basics', rank: 'S Tier', _id: 199094, d:'In 70-80% cases developers work or application is based on the client-server model, where the request goes through the network to a server and client can be based anywhere in the world to access the application.'},
  {text: 'Basics of Training', rank: 'S Tier', _id: 188767, d:'Before releasing software in the market there are so many test cases a software or an application has to pass.'}
]

const find = (conditions, callback) => {
  try {
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    if (Object.keys(conditions).length === 0) return callback(null, skills)

  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback) {
  skill._id = Date.now() % 1000000
  skill.done = false
  skills.push(skill)
  return callback(null, skill)
}

export { 
	find,
  findById,
  create
}