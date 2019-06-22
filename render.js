const Renderer=function(){


    const renderPosts=function(posts){
        $('#posts').empty()


        for(let i=0; i<posts.length; i++){

            $('#posts').append(`<div class="post" data-id="${posts[i].id}" >${posts[i].text}</div>`)
            let postAdd= $('.post')

            for(let j=0; j<posts[i].comments.length; j++){
            
              $(postAdd[i]).append(`<br><div class="delete-comment" data-id="${posts[i].comments[j].id}">x</div>`)
              $(postAdd[i]).append(`<div class="comments" data-id="${posts[i].comments[j].id}" >${posts[i].comments[j].text}</div>`)

                     
        }

            $(postAdd[i]).append(`<br><br><input class="input" placeholder="Share your thoughts"</input>`)
            $(postAdd[i]).append(`<button class="comment-button">Post`)
            $(postAdd[i]).append(`<br><br><div class="delete">Delete Post</div>`)
        }

    }
            return{
                renderPosts:renderPosts
            }
}

const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())
