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
