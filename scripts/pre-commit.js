var spawnSync = require('child_process').spawnSync
const {username} = require('os').userInfo()
console.log('user', username)
if (username === 'kentcdodds') {
  const result = spawnSync('npm run validate', {stdio: 'inherit', shell: true})

  if (result.status !== 0) {
    process.exit(result.status)
  }
}
