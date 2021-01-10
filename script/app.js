const sellWith = document.getElementById('sellwith')
const sellDirect = document.getElementById('selldirect')

const sellWithDisappear = () => {
    sellWith.setAttribute('style', 'display: none;')
    sellDirect.setAttribute('style', 'display: block;')
}
const sellDirectDisappear = () => {
    sellDirect.setAttribute('style', 'display: none;')
    sellWith.setAttribute('style', 'display:block;')
}
sellWithDisappear()
