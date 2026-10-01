let blog =document.getElementById("blog")
let themeInput=document.getElementById("theme")
let thoughtsInput=document.getElementById("thoughts")
let addPostButton=document.getElementById("button")
let postList=document.getElementById("postList")

let blogPost=[]



addPostButton.addEventListener('click', ()=>  {
    if( !theme.value || !thoughts.value){
        // alert("please enter thoughts")
    }

    let themeValue = themeInput.value
    let thoughtsValue= thoughtsInput.value
    
    let newPost= {
        blogTitle: themeValue,
        blogThoughts:thoughtsValue,
    }
    
    //   console.log(
        blogPost.push(newPost)
    // )
    
        let blogInfo = document.createElement("li");
        blogInfo.textContent= `${newPost.blogTitle}: ${newPost.blogThoughts} `
       
       


 let deletebtn= document.createElement("button")
        deletebtn.textContent="Delete";
        // am i deleting the button od the whole post 
        blogInfo.appendChild(deletebtn)

         postList.appendChild(blogInfo)

         themeInput.value = "";
        thoughtsInput.value = "";

         deletebtn.addEventListener('click', (event)=>{
     const deleteblogInfo= event.target.closest('li');
     deleteblogInfo.remove()
//   const blogThoughts = blogInfo.dataset.blogThoughts;
//   updateTotalPrice(blogThoughts);
  blogInfo.remove();
    });
   
});

        // parseFloat
   