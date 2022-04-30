const contactButton=document.querySelector(".contact");
const contactPage= document.querySelector(".contact-me-page");
const contactCloseButton= document.querySelector(".close");
const navigation= document.querySelectorAll(".links span")
const dotNavigation= document.querySelectorAll(".dot")
const next= document.querySelector(".next")
const previous= document.querySelector(".prev")
const page= document.querySelector(".page-container")
// 1365
let index=0 ,pageOffset=window.outerWidth;

contactButton.addEventListener("click",()=>{
    contactPage.style.right="0%";
});
contactCloseButton.addEventListener("click",()=>{
    contactPage.style.right="-100%";
});
navigation.forEach((g)=>{
    if(g.classList.contains("contact")){
        console.log("found!");
    }else{
        g.addEventListener("click",()=>{
            index=g.dataset['position'];
            navigation.forEach((e)=>{
                e.classList.remove("active")
            })
            g.setAttribute("class","active")
            let location = parseInt(index)*pageOffset;
            page.scrollTo({
                top: 0,
                left: location,
                behavior: "smooth"

            })
            dotNavigation.forEach((r)=>{
                let checkIndex;
                checkIndex= r.dataset['index'];
                r.classList.remove("activeDot")
                r.classList.add("dot")
                if(checkIndex == index){
                    r.setAttribute("class","activeDot");
                }
            });
        })
    }

});

dotNavigation.forEach((g)=>{
    g.addEventListener("click",()=>{
        index=g.dataset['index'];
        dotNavigation.forEach((e)=>{
            e.classList.remove("activeDot")
            e.classList.add("dot")
        })
        g.setAttribute("class","activeDot")
        let location = parseInt(index)*pageOffset;
        page.scrollTo({
            top: 0,
            left: location,
            behavior: "smooth"

        })
        navigation.forEach((r)=>{
            let checkIndex;
            checkIndex= r.dataset['position'];
            r.classList.remove("active")
            if(checkIndex == index){
                r.setAttribute("class","active");
            }
        });
    })

});
next.addEventListener("click",()=>{
    if(index<2){
        index++;
    }
    console.log(index);
    let location = parseInt(index)*pageOffset;
    page.scrollTo({
        top: 0,
        left: location,
        behavior: "smooth"

    })
    dotNavigation.forEach((r)=>{
        let checkIndex;
        checkIndex= r.dataset['index'];
        r.classList.remove("activeDot")
        r.classList.add("dot")
        if(checkIndex == index){
            r.setAttribute("class","activeDot");
        }
    });
    navigation.forEach((r)=>{
        let checkIndex;
        checkIndex= r.dataset['position'];
        r.classList.remove("active")
        if(checkIndex == index){
            r.setAttribute("class","active");
        }
    });
})
previous.addEventListener("click",()=>{
    if(index>0){
        index--;
    }
    let location = parseInt(index)*pageOffset;
    page.scrollTo({
        top: 0,
        left: location,
        behavior: "smooth"

    })
    dotNavigation.forEach((r)=>{
        let checkIndex;
        checkIndex= r.dataset['index'];
        r.classList.remove("activeDot")
        r.classList.add("dot")
        if(checkIndex == index){
            r.setAttribute("class","activeDot");
        }
    });
    navigation.forEach((r)=>{
        let checkIndex;
        checkIndex= r.dataset['position'];
        r.classList.remove("active")
        if(checkIndex == index){
            r.setAttribute("class","active");
        }
    });
})

