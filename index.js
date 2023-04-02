// function createPost(post){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             post.push(post);
//             const error= ture;
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject('Error');
//             }
//         }, 1000)
//     })
// }
const promise1= Promise.resolve('Hello World')
const promise2= 10;
const promise3= new Promise((resolve, reject) => 
    setTimeout(resolve, 1000, 'GoodBye')
)
// Promise.all([promise1, promise2, promise3]).then(values=> console.log(values));

function updateLastUserActivityTime(user, posts, createPost, deletePost) {
    const newPost = { userId: user.id, content: "New post" };
    const createPostPromise = createPost(newPost);
    const updateLastActivityPromise = new Promise((resolve) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        resolve();
      }, 1000);
    });
    
    return Promise.all([createPostPromise, updateLastActivityPromise])
      .then(([post, _]) => {
        posts.push(post);
        console.log(`Posts created by user ${user.name}:`);
        console.log(posts);
        console.log(`Last activity time for user ${user.name}: ${user.lastActivityTime}`);
        
        return deletePost(post.id);
      })
      .then(() => {
        const remainingPosts = posts.filter(p => p.userId === user.id);
        console.log(`Remaining posts for user ${user.name}:`);
        console.log(remainingPosts);
      })
      .catch(err => console.error(err));
  }
  