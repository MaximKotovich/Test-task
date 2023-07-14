const express = require('express')
const app = express()
const axios = require('axios');

const getStocks = async () => {
    const wbUrl = 'https://card.wb.ru/cards/detail?appType=1&curr=rub&dest=-1257786&nm=138590435;94340606;94339119;138593051;94340317;138607462;94339244'
    const response = await axios.get(wbUrl)
    const products = response.data.data.products
    const result = []

    for(const element of products) {
        const productSizes = element.sizes

        const articleWithNumberOfSize = {
            art: element.id
        }
        // const product = response.data.data.products[0].sizes
        productSizes.forEach(item => {
            if(!item.stocks.length) {
                return
            }
            const numbers = item.stocks.reduce((acc, curr) => acc+curr.qty, 0)
            articleWithNumberOfSize[item.name] = numbers
        })
        result.push(articleWithNumberOfSize)
    }
    return result
}

app.get("/get-stocks", async (req, res) => {
    const result = await getStocks()
    res.json(result)
})



app.listen(3010, () => {console.log('Server start on port 3010')})