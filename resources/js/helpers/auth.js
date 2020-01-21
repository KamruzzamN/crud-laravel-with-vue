export function login(credentials){
    return new Promise((result, reject) =>{
        axios.post('/authorized', credentials)
        .then((response) => {
            result(response.data)
        }).catch((error) => {
            console.log(error)
        });
    })
}

export function getLocalUser(){
    const currentUser = localStorage.getItem('user');
    if(!user){
        return null
    }
    return JSON.parse(currentUser);
}