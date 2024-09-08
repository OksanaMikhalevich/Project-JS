let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('details'));

function postInfo(post) {
    for (let postKey in post) {

        if (typeof post[postKey] !== 'object') {
            let postWrap = document.createElement('div');
            postWrap.classList.add('post');
            postWrap.innerHTML = `<strong>${postKey}:</strong> ${post[postKey]}`;
            document.body.appendChild(postWrap);
        } else if (typeof post[postKey] === 'object') {
            postInfo(post[postKey]);
        }
    }
}

postInfo(post);

let commentsWrap = document.createElement('div');
commentsWrap.classList.add('comments');

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => {
        return response.json()
    })
    .then(commentsPost => {

        for (let commentPost of commentsPost) {

            let commentWrap = document.createElement('div');
            commentWrap.classList.add('comment');
            commentWrap.innerHTML =
                `
                    <strong>postId:</strong>${commentPost.postId}</br>
                    <strong>id:</strong>${commentPost.id}</br>
                    <strong>name:</strong>${commentPost.name}</br>
                    <strong>email:</strong>${commentPost.email}</br>
                    <strong>body:</strong>${commentPost.body}</br></br>
                    `
            commentsWrap.appendChild(commentWrap);
        }
        document.body.appendChild(commentsWrap);
    })