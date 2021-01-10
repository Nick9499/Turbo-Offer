const sell = document.getElementById('sell')
const company = document.getElementById('company')

const companyFaqs = () => {
    sell.setAttribute('style', 'display: none;')
    company.setAttribute('style', 'display: block;')
}
const sellFaqs = () => {
    sell.setAttribute('style', 'display: block;')
    company.setAttribute('style', 'display: none;')
}
sellFaqs()
