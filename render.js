const Renderer=function(){


    const renderPosts=function(posts){

        const post='<div class="post"></div>'


        $('#posts').empty()

        for(let i=0; i<posts.length; i++){

            $(post).append('#posts')

            $('#posts').append(`<div class="post">${posts[i].text}</div>`)
        
            for(let j=0; j<posts[i].comments.length; j++){
           
            $('#posts').append(`<div class="comments" data-id='${posts[i].comments[j].id}'>${posts[i].comments[j].text}</div>`) 
             
        }
        
      }
    }





return{
    renderPosts:renderPosts
}


}

const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())
