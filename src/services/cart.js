
let cart = []


// export functions ->

async function addItem(item, qntd){
    const index = cart.findIndex(attribute => attribute.name === item.name)


    if(index != -1){
        cart[index].qntd += qntd
        cart[index].total = item.value * item.qntd
    }else{
        item.qntd = qntd
        item.total = parseFloat((item.value * item.qntd).toFixed(2))
        cart.push(item)
    }
}

async function removeItem(itemName, qntd){
    const index = cart.findIndex(item => item.name === itemName)

    if(index !== -1){
        if(cart[index].qntd > qntd){
            cart[index].qntd -= qntd
        }else{
            cart.splice(index, 1)
        }
    }
}


async function showCart(){
    console.log("\n\nCARRINHO: \n")
    console.table(cart)
    console.log(`\n\nVALOR TOTAL DO CARRINHO: R$${(await calculateSubTotalItems()).toFixed(2)}\n\n`)
}



// auxiliar functions -> 

async function calculateSubTotalItems(){
    let sum = 0
    for(let i = 0; i < cart.length; i++){
        sum += cart[i].total
    }
    return sum
}

export {
    addItem,
    showCart,
    removeItem,
}

