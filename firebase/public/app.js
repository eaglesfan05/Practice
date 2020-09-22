document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app)
})

function googleLogin() {
    //define provider in this case google//
    const provider = new firebase.auth.GoogleAuthProvider();
    //reference firebase.auth library and pass in provider as argument//
    firebase.auth().signInWithPopup(provider)
    //returns promise so can do .then and can put user into a variable//
    .then(result => {
        const user = result.user;
        document.write(`Hello ${user.displayName}`)
        console.log(user)
    })
    .catch(console.log)
}