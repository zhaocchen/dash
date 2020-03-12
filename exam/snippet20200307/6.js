setTimeout(_ => console.log(4))

async function main() {
  console.log(1)
  await Promise.resolve()
  console.log(3)
}

main()

console.log(2)

// node10=chrome80
// 1
// 2
// 3
// 4
