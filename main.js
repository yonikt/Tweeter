$("#post").on('click', function() {
    if($("#input").val()!==""){
    tweeter.addPost($("#input").val())
    renderer.renderPosts(tweeter.getPosts())
    }
})

$('body').on('click', '.delete', function() {
    let id = $(this).parent().data().id
    tweeter.removePost(id)
    renderer.renderPosts(tweeter.getPosts())
})



$('body').on('click', '.comment-button', function() {

  let id = $(this).parent().data().id
  tweeter.addComment($(this).siblings('.input').val(),id)
  renderer.renderPosts(tweeter.getPosts())

})


$('body').on('click', '.delete-comment', function() {
    let id = $(this).parent().data().id
    tweeter.removeComment(id, $(this).data().id)
    renderer.renderPosts(tweeter.getPosts())
})

