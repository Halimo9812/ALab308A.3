// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
    const dataBaseName = await central(id);
    console.log(dataBaseName)

   //step two users basic info
   const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
   const basicInfo = await dbs[dataBaseName](id)
   console.log(basicInfo)

   //step three : access to vault and steal personal data
   const personalData = await vault(id);
   console.log(personalData);
   return {
    ...basicInfo,
    ...personalData
   }

}

const user = await getUserData(6)
console.log(user);