console.log('comments linked')
const commentButtons = document.querySelectorAll('.comment-button')
commentButtons.forEach((ele) => {
    ele.addEventListener('click', e => {
        console.log('doggie')
        e.preventDefault()
        const blogComment = ele.querySelector("input").value
        let id = e.target.getAttribute("id");
        console.log(blogComment + id)
        // fetch(`/api/comments`, {
        //     method: "POST",
        //     body: JSON.stringify({
        //         id,
        //         blogComment
        //     }),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // }).then(res => {
        //     if (res.ok) {
        //         console.log('res was ok')
        //     } else {
        //         alert("Comment could not be commented")
        //     }
        // })
    })
})