const sellWith = document.getElementById('sellwith')
const sellDirect = document.getElementById('selldirect')

const sellDirectDisappear = () => {
    sellWith.setAttribute('style', 'display: none;')
    sellDirect.setAttribute('style', 'display: block;')
}
const sellWithDisappear = () => {
    sellDirect.setAttribute('style', 'display: none;')
    sellWith.setAttribute('style', 'display:block;')
}
sellWithDisappear()
