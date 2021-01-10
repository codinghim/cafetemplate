import path from 'path';
const fs = require('fs');

/**
 *  This function returns a JSON object of menu
 */
export const getMenu = async () => {
    const dir = "data/menu.json"
    const file = fs.readFileSync(dir)
    const res = JSON.parse(file)
    return res
}