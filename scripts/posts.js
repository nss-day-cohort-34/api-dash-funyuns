const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(posts => posts.json())
        .then(arrayOfPosts => {
            for (const post of arrayOfPosts) {
                if (post.id <= 20) {
                const convertedPost = dataConverter(post)
                displayInDom(convertedPost)
                }
                

            }
        })
}

getData()

const dataConverter = (dataObject) => {
    return `
    <section class ="post">
        <h2>${dataObject.title}</h2>
        <p>${dataObject.body}</p>
    </section>`
}

const toHTML = document.querySelector("#container")

const displayInDom = (postHTML) => {
    toHTML.innerHTML += postHTML
}