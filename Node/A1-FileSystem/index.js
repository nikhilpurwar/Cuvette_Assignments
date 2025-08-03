const fs = require('fs');
fs.writeFileSync('read.txt', 'Hello I am created')

console.log(fs.readFileSync('read.txt', 'utf-8'));

fs.appendFileSync('read.txt', 'this is my first day on VS')

fs.renameSync('read.txt', 'readme.txt')

fs.readFile('readme.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});


try {
  const data = fs.readFileSync('readme.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Error reading file:', err);
}
fs.unlinkSync('readme.txt')


