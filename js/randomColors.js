let colors = ['#999999', '#777777', '#555555', '#33333', '#11111'];
const el = document.querySelectorAll('.content a')

const getRandColor = () => colors[Math.floor(Math.random() * colors.length)]

const setBorderColor = () => {
  Array.from(el).forEach(e => {
    e.style.borderBottomColor = getRandColor()
  })
}
setBorderColor()