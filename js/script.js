let img = 0

function contagem(){
    if(img == 0){
        img += 1
    }else{
        img -= 1
    }
}

function trocar(){
    const avatarImg = document.getElementById("avatar")
    let avatarTxt = document.getElementById("avatar-txt")
    let role = document.getElementById("role")
    let name = document.getElementById("name")

    if(img == 0){
        avatarImg.src = "images/image-tanya.jpg"
        avatarTxt.innerText = "“ I've been interested in coding for a while\n never taken the jump, until now. \n couldn't recommend this course enough\n I'm now inthe job of my dreams and so\n excited about the future.” "
        name.innerText = "Tanya Sinclair"
        role.innerText = "UX Engineer"
    }else if(img == 1){
        avatarImg.src = "images/image-john.jpg"
        avatarTxt.innerText = "“ If you want to lay the best foundation\n possible I'd recommend taking this\n course. The depth the instrctors go into \n is incredible. I  now feel so confident about\n starting up as a professional developer"
        name.innerText = "John Tarkpor"
        role.innerText = "Junior Front-end Developer"
    }
    
}