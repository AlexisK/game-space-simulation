export function removeFromList(list, value) {
    let ind = list.indexOf(value);
    if ( ind >= 0 ) {
        return list.splice(ind, 1)[0];
    }
    return null;
}
