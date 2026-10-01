let blog =document.getElementById("blog")
let themeInput=document.getElementById("theme")
let thoughtsInput=document.getElementById("thoughts")
let addPostButton=document.getElementById("button")
let postList=document.getElementById("postList")




let blogPost=[]

function savePosts() {
  localStorage.setItem('blogInfo', JSON.stringify(blogPost));
}
function loadPosts() {
  const saved = localStorage.getItem('blogPost');
  if (saved) {
    blogPost = JSON.parse(saved);
  }
}



addPostButton.addEventListener('click', (event)=>  {
    event.preventDefault()
    if( !themeInput.value || !thoughtsInput.value){
        alert("Please Enter Your Theme and Thought")
        return

    }

    let themeValue = themeInput.value
    let thoughtsValue= thoughtsInput.value
    
    let newPost= {
        blogTitle: themeValue,
        blogThoughts:thoughtsValue,
    }
    

    
        blogPost.push(newPost)
        savePosts()
    
        let blogInfo = document.createElement("li");
        blogInfo.textContent= `${newPost.blogTitle}: ${newPost.blogThoughts} `
       
       


 let deletebtn= document.createElement("button")
        deletebtn.textContent="Delete";
       
        blogInfo.appendChild(deletebtn)

         postList.appendChild(blogInfo)

         themeInput.value = "";
        thoughtsInput.value = "";

         deletebtn.addEventListener('click', (event)=>{
     const deleteblogInfo= event.target.closest('li');
     deleteblogInfo.remove()

         })


     let editbtn= document.createElement("button")
        editbtn.textContent="Edit";
    
        blogInfo.appendChild(editbtn)

         postList.appendChild(blogInfo)

        themeInput.value = "";
        thoughtsInput.value = "";
   
    editbtn.addEventListener('click', (event)=>{
        themeInput.value = newPost.blogTitle
    thoughtsInput.value = newPost.blogThoughts

    blogPost = blogPost.filter((post) => post !== newPost)
    event.target.closest('li').remove()
    savePosts()
 })

    
})