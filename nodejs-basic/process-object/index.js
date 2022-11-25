// let path = process.env.PWD
// let names = process.env.USER
// let cpuInformation = process.memoryUsage()
// let fisrtName = process.argv[2]
// let secondName = process.argv[3]
// let allInformation = process.argv

// console.log(`hallo ${fisrtName} ${secondName}`)
// console.log(allInformation)
// // console.log(path, names, cpuInformation)



const initialMemoryUsage = process.memoryUsage().heapUsed
const yourName = process.argv[2]
const environment =process.env.NODE_ENV
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage = process.memoryUsage().heapUsed
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`)