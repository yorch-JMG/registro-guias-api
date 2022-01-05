import {App} from './app';
import { connection } from './connection';
async function main() {
  connection.connect((err) => {
    if(err){
      console.error("\n",err.code);
      console.error(err.errno);
      console.error(err.sqlState);
      console.error(err.message)
      return
    }
    else{
      console.log('Connected to database!')
    }
  }); 
  const app = new App(3000);
  await app.listen();
}

main();

