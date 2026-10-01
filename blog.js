let blog =document.getElementById("blog")
let theme=document.getElementById("theme")
let thoughts=document.getElementById("thoughts")
let addPostButton=document.getElementById("button")
let postList=document.getElementById("postList")

let blogPost=[]



addPostButton.addEventListener('click', ()=>  {
    if( !theme.value || !thouhts.value){
        // alert("please enter thoughts")
    }

    let theme = theme.value
    let thoguhts= thoughts.value
    
    let newPost= {
        blogTitle: theme,
        blogThoughts:thoughts,
    }
    
      console.log(blogPost.push(newPost))
    
//         let blogInfo = document.createElement("li");
//         blogInfo.textContent= `${newPost.blogTitle} $${newPost.blogThoughts} `
       
//         postList.appendChild(blogInfo)


//  let deletebtn= document.createElement("button")
//         deletebtn.textContent="Delete";
//         // am i deleting the button od the whole post 
//         blogInfo.appendChild(deletebtn)

//          deletebtn.addEventListener('click', (event)=>{
//      const blogInfo= event.target.closest('li');
//   const blogThoughts = parseFloat(blogInfo.dataset.blogThoughts);
// //   updateTotalPrice(blogThoughts);
//   blogInfo.remove();
// })
   
 })

        
   