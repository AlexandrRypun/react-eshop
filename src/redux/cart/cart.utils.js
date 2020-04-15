export const addItemToCart = (items, newItem) => {
    const index = items.findIndex(item => item.id === newItem.id);
    if (index > -1) {
        items[index].quantity += 1;
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
    items[index].quantity -= 1;
    return [...items];
}
