async function fc37ce8540d5b05a94c69f1d145d() {
  let textContainer = document.getElementsByClassName("text-container")[0]
  let body = document.getElementsByTagName("body")[0]
  let html = document.getElementsByTagName("html")[0]
  let background = document.getElementsByClassName("sliding-background")[0]
  let slide = document.getElementsByClassName("slide")[0]
  let img = document.getElementsByClassName("img")[0]

  body.style.transition = "1s ease-in-out"
  body.style.background = "#fcf5e8"
  body.style.overflow = "hidden"
  textContainer.style.animation = "shake 0.2s linear infinite"
  textContainer.style.filter = "invert(1)";
  background.style.animation = "slide 0.5s linear infinite"
  background.style.filter = "blur(0) drop-shadow(0 0 1px black)"
  await sleep(2000)
  img.style.animation = "unblur 2s ease-in-out"
  textContainer.style.filter = "invert(0)";
  background.style.animation = "slide 0.2s linear infinite"
  slide.style.animation = "move-up 7s ease-in-out infinite"
  await sleep(2000)
  img.style.filter = "opacity(1) blur(0)"
  background.style.animation = "slide 0.1s linear infinite"
  textContainer.style.animation = "shake 0.1s linear infinite"
  await sleep(3000)
  window.location.href = "https://cdc.clxxiii.dev"
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
