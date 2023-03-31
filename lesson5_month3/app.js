const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

// som.addEventListener("input", (e) => {
//     console.log(e.target.value)
//     const request = new XMLHttpRequest()
//     request.open("GET", "data.json")
//     request.setRequestHeader("Content-Type", "application/json")
//     request.send()
//     request.addEventListener("load", () => {
//         console.log(request.response)
//         const data = JSON.parse(request.response)
//         usd.value = (e.target.value / data.usd).toFixed(2)
//     })
// })

const convert = (elem, target, target2) => {
    elem.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open("GET", "data.json")
        request.setRequestHeader("Content-Type", "application/json")
        request.send()

        request.addEventListener("load", () => {
            const data = JSON.parse(request.response)
            if (elem === som){
                target.value = (elem.value / data.usd).toFixed(2)
                target2.value = (elem.value / data.eu).toFixed(2)
            }else if(elem === usd){
                target.value = (elem.value * data.usd).toFixed(2)
                target2.value = (target.value / data.eu).toFixed(2)
            }else if(elem === eur){
                target.value = (elem.value * data.eu).toFixed(2)
                target2.value = (target.value / data.usd).toFixed(2)
            }
        })
        elem.value === '' && (target.value = '')
        elem.value === '' && (target2.value = '')
    })
}


convert(som, usd, eur)
convert(usd, som, eur)
convert(eur, som, usd)