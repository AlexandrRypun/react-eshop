export const addItemToCart = (items, newItem) => {
    const index = items.findIndex(item => item.id === newItem.id);
    if (index > -1) {
        const updatedItem = { ...items[index], quantity: items[index].quantity += 1 };
        items.splice(index, 1, updatedItem);
    } else {
        newItem.quantity = 1;
        items.push(newItem);
    }
    return [...items];
}

export const removeItemFromCart = (items, itemId) => {
    const index = items.findIndex(item => item.id === itemId);
    if (index === -1) {
        return items;
    }
    if (items[index].quantity === 1) {
        return items.filter(item => item.id !== itemId);
    }
    const updatedItem = { ...items[index], quantity: items[index].quantity -= 1 };
    items.splice(index, 1, updatedItem);
    return [...items];
}
