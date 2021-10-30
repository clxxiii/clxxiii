async function fc37ce8540d5b05a94c69f1d145d() {
  await sleep(1000)
  window.location.href = ""
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
