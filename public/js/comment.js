document.querySelectorAll(".form-control").forEach((commentBtn) => {
    commentBtn.addEventListener("submit", e => {
        e.preventDefault()
        const blogComment = {
            commentBody: commentBtn.querySelector("input").value,
        }
        let id = e.target.getAttribute("id");
        fetch(`/api/comments/${id}`, {
            method: "POST",
            body: JSON.stringify(blogComment),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (res.ok) {
                location.reload()
            } else {
                alert("Comment didn't work")
            }

        })
    })
})