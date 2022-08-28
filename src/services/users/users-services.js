


export default function UsersService (){
    try{
         return fetch ("https://my-json-server.typicode.com/Jeck99/fake-server/users").then(response=>response.json())
    }
    catch(error){
        console.log(error);
    }
}