
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'G',
    //   age: 47
    // })
    reject('wrong!')
  }, 5000)
})

console.log('before')

promise.then((data) => {

  console.log(data)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise')
    }, 5000)
  })
}).then((str) => {
  console.log('run', str)
}).catch((error) => {
  console.log('error:', error)
})

console.log('after')