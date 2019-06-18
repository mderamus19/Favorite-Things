// create HTML container
const container = document.querySelector("#favoriteThings")
document.querySelector("#saveEntry").addEventListener("click", event=> {
    const item = document.querySelector("#favoriteItem").value
    const store =document.querySelector("#favoriteStore").value
    container.innerHTML += `
    <section>
    <h2>I  can purchase ${item} at ${store}!
    </section>
    `
    document.querySelector("#favoriteItem").value = "";
    document.querySelector("#favoriteStore").value = "";
})