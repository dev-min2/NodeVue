const crypto = require('crypto');
const data = 'pw1234';

let encData = crypto.createHash('sha512').update(data).digest('base64');
console.log(encData);
encData = crypto.createHash('sha512').update(data).digest('hex');
console.log(encData);

const createSalt = () => {
    return new Promise((res,rej) => {
        crypto.randomBytes(64,(err,buf)=> {
            if(err) 
                rej(err)
            res(buf.toString('base64'));
        })
    }); 
}

async function test() {
    let value = await createSalt();
    console.log(value);
}

const createCrpytoPassword = async (plainPassword) => {
    const salt = await createSalt();

    return new Promise((resolve,reject) => {
        crypto.pbkdf2(plainPassword,salt,9999, 64, "sha512",(err,key) => {
                if(err)
                    reject(err);
                resolve({password: key.toString("base64"), salt});
        }
    )});
}

async function result(data) {
    const res = await createCrpytoPassword(data);
    console.log(res);
}

let value3 = result("alsry123");