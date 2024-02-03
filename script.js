const postButton = document.querySelector('.button');
// console.log(postButton);

postButton.addEventListener('click', function(){
    const inputPost = document.querySelector('#text');
    const post = inputPost.value;
    
    if(post ==''){
        alert('Please write some in Text Box');
    }

    else{
        const showPost = document.querySelector('.post');
    
        const newElement = document.createElement('p')
        newElement.innerText = post;

        // console.log(newElement);

        showPost.appendChild(newElement);

        inputPost.value = '';
    }


})

