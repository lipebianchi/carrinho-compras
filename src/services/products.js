// Export functions -> 

async function createItem(id, name, value, category, mark){
    return  {
        id: id,
        name: name,
        value: value,
        category: category,
        mark: mark,
    }
}

// auxiliar functions -> 


export {
    createItem,
}