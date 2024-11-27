// JavaScript to handle like and comment buttons
document.addEventListener('DOMContentLoaded', function () {
    const likeButtons = document.querySelectorAll('.like-btn');
    const commentButtons = document.querySelectorAll('.comment-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Liked!');
        });
    });

    commentButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Add a comment!');
        });
    });
});
