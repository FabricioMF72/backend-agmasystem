import fs from "fs"

export const readFile = (path:string)=>{
    try {
        const data = fs.readFileSync(path, 'utf8');
        return data;
    } catch (err) {
        throw err;
    }
}