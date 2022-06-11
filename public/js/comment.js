console.log('comments linked')
const inputBox = document.querySelector('.comment-boxes')
const commentButtons = document.querySelectorAll('.comment-button')
commentButtons.forEach((ele) => {
    ele.addEventListener('click', e => {
        console.log('doggie')
        e.preventDefault()
        const blogComment = inputBox.value
        let id = e.target.getAttribute("id");
        console.log(blogComment + id)
        fetch(`/api/comments`, {
            method: "POST",
            body: JSON.stringify({
                id,
                blogComment
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (res.ok) {
                console.log('res was ok')
            } else {
                alert("Comment could not be commented")
            }
        })
    })
})