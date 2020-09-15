/*
    __Conect Me___________________________________
    |                                             |  
    |--- UX / Ui Devlope By   : Ahmed Mohamed Gad |
    |--- Mobile : +201113478716                   |
    |--- Email : ahmedsoft220@gmail.com           |
    |_____________________________________________|
*/

// ----------Get Dom
const QSA = (tag, name, value) =>{
    let Div = document.querySelectorAll(tag + `[${name} = '${value}']`);
    return Div;
}


// ---------Create Dom
const CD = (tag) =>{
    let DOM = document.createElement(tag);
    return DOM;
}

// ---------Theme Style
const CS = (em,css = []) =>{
    em.setAttribute("style", css.join("; "));
}

// const fT = (tag, hol = 0) =>{
//     let GH = tag;
//     for(let DT = 0; DT < GH.length; DT++){
//         if(GH[DT] != undefined){
//             hol
//         }
//     }
// }


// ------------------Section Main For Login & SignUp
const bgPage = () =>{
    let WD = window.innerHeight,
        BG = QSA("section", "bgpage", "bg-app"),
        BG2 = QSA("div", "bgpage", "reviews-a");
    for(let RG = 0; RG < BG.length; RG++){
        CS(BG[RG],[
            `min-height:${WD}px`,
        ]);
    }
    for(let CG = 0; CG < BG2.length; CG++){
        CS(BG2[CG],[
            `min-height:${WD}px`,
        ]);
    }
}

// -------------ParaGraph For Login & SignUp
const loginAuthor = () =>{
    let GH = QSA("div", "author", "loginA")[0];
    if(GH != undefined){
        let PH = QSA("p", "author", "p")[0];
        let DH = GH.querySelectorAll(".line-gr");
        for(let TG = 0; TG < DH.length; TG++){
            CS(PH,[
                `min-height:${DH[TG].clientHeight}px`,
                "line-height : 1.4em",
            ]); 
        }
    }
}

//------------------Link Reviews Header
const aLink = () =>{
    let RN = QSA("header", "sm-header", "header"),
        RV = QSA("a", "a-link", "reviewer"), VN = QSA("nav", "a-link", "nav");
    if(RN[0].clientWidth < 992){
        console.log(VN[0]);
        let GF = document.createElement("a");
            GF.setAttribute("class", "rev-header btn btn-secondary mr-auto");
        for(let DT = 0; DT < RV.length; DT++){
            if(RV[DT] != undefined){
                GF.innerHTML = RV[DT].innerHTML;
                GF.setAttribute("href", RV[DT].getAttribute("href"));
                VN[0].insertBefore(GF, VN[0].firstElementChild)
                RV[DT].remove();
            }
        }
    }
}
// -----Menu icon
const menuBtn = document.querySelectorAll(".menu-btn");

const Menuicon = () =>{
    for(let D = 0; D < menuBtn.length; D++){
        if(menuBtn[D] != undefined){
            menuBtn[D].addEventListener("click", () => {
                menuBtn[D].classList.toggle("is--active");
                menuBtn[D].classList.add("is--clicked");
                setTimeout(() =>{
                    menuBtn[D].classList.remove("is--clicked");
                }, 300);
            });
        }
    }

}


// ---------Header Postion
const ScrollBody = () => {
    let f = document.querySelectorAll("html"),
         em = QSA("div", "sm-brand", "brand"),
         w = QSA("nav", "a-link", "nav");
    for(let u = 0; u < em.length; u++){
        if(f[0].scrollTop > em[u].clientHeight){
            console.log(em[0].clientHeight);
            w[0].setAttribute("n-style", "nav");
            em[u].setAttribute("style", `margin-bottom:${w[0].clientHeight}px`)
        }else{
            w[0].removeAttribute("n-style");
            em[u].setAttribute("style", `margin-bottom:${0}px`)
        }
    }

}

window.addEventListener("scroll", () => {
    ScrollBody();

});


//-------------------Tables
const gTable = () =>{
    let MT = QSA("div", "main", "tables");
    for(let R = 0; R < MT.length; R++){

        if(MT[R] != undefined){
            let 
                TB = QSA("table", "Dtable", "datatable")[R],
                BD = TB.querySelectorAll("tbody")[R]; 

            if(TB.clientWidth < BD.clientWidth){
                let 
                    main = CD("div");
                    main.setAttribute("class", "scroll-table");
                    main.setAttribute("main-t", "m-table");
                    MT[R].appendChild(main);
                let mTable = QSA("div", "main-t", "m-table");

                 for(let DV = 0; DV < 3; DV++){
                    let go = {
                        DV : CD("div"),
                    }, iC = {
                        DV : CD("i"),
                    },
                    BX = [
                        "fas fa-chevron-circle-left",
                        "fas fa-cog fa-spin",
                        "fas fa-chevron-circle-right"
                    ];
                    go.DV.setAttribute("n-tables", `tb-${DV}`);
                    go.DV.setAttribute("class", "sc-table");
                    mTable[R].appendChild(go.DV);
                    iC.DV.setAttribute("class", BX[DV]);

                    let CT = QSA("div", "class", `sc-table`);
                    CT[DV].appendChild(iC.DV);
                    console.log(CT[DV]);
                }

                MT[R].setAttribute("style", `padding-bottom:${mTable[R].clientHeight}px !important`)
            }
        }
    }
}

const GT  = () =>{
    let t = document.getElementById("editor");
    if(t != undefined){
        let quill = new Quill('#editor', {
            theme: 'snow',
            modules: {
                toolbar: [
                  [{ header: [1, 2, false] }],
                  ['bold', 'italic', 'underline'],
                  ['image', 'code-block']
                ]
              },
              placeholder: 'Compose an epic...',
        });  
    }
  
}
const me = () =>{
    let body = document.querySelectorAll("html");
    let head = document.querySelectorAll("head");
    let  code = document.createComment(" |--- UX / Ui Develope By   : Ahmed Mohamed Gad");
    let  mob = document.createComment(" |--- Mobile : +201113478716     ");
    let  em = document.createComment(" |--- Email : ahmedsoft220@gmail.com   ");
    let am = [];
    head[0].appendChild(code);
    head[0].appendChild(mob);
    head[0].appendChild(em);
}
// -----------Run All Function
window.onload = () => {
    bgPage();
    loginAuthor()
    me();
    aLink();
    
    Menuicon();
    // gTable();
    GT();
    ScrollBody();
    // QSA("div", "page", "loadingPage")[0].remove();
}


