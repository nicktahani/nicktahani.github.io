let colors = ['#ffad00', '#777777', '#004080', '#0059b3', '#3f3f3f'];
const el = document.querySelectorAll('.content a')

const getRandColor = () => colors[Math.round(Math.random() * colors.length)]

const setBorderColor = () => {
  Array.from(el).forEach(e => {
    e.style.borderBottomColor = getRandColor()
  })
}
setBorderColor()

