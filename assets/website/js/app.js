/*
    __Conect Me___________________________________
    |                                             |
    |--- UX / Ui Devlope By   : Ahmed Mohamed Gad |
    |--- Mobile : +201113478716                   |
    |--- Email : ahmedsoft220@gmail.com           |
    |_____________________________________________|
*/
// ----------Get Dom
var QSA = function (tag, name, value) {
    var Div = document.querySelectorAll(tag + ("[" + name + " = '" + value + "']"));
    return Div;
};
// ---------Create Dom
var CD = function (tag) {
    var DOM = document.createElement(tag);
    return DOM;
};
// ---------Theme Style
var CS = function (em, css) {
    if (css === void 0) { css = []; }
    em.setAttribute("style", css.join("; "));
};
// const fT = (tag, hol = 0) =>{
//     let GH = tag;
//     for(let DT = 0; DT < GH.length; DT++){
//         if(GH[DT] != undefined){
//             hol
//         }
//     }
// }
// ------------------Section Main For Login & SignUp
var bgPage = function () {
    var WD = window.innerHeight, BG = QSA("section", "bgpage", "bg-app"), BG2 = QSA("div", "bgpage", "reviews-a");
    for (var RG = 0; RG < BG.length; RG++) {
        CS(BG[RG], [
            "min-height:" + WD + "px",
        ]);
    }
    for (var CG = 0; CG < BG2.length; CG++) {
        CS(BG2[CG], [
            "min-height:" + WD + "px",
        ]);
    }
};
// -------------ParaGraph For Login & SignUp
var loginAuthor = function () {
    var GH = QSA("div", "author", "loginA")[0];
    if (GH != undefined) {
        var PH = QSA("p", "author", "p")[0];
        var DH = GH.querySelectorAll(".line-gr");
        for (var TG = 0; TG < DH.length; TG++) {
            CS(PH, [
                "min-height:" + DH[TG].clientHeight + "px",
                "line-height : 1.4em",
            ]);
        }
    }
};
//------------------Link Reviews Header
var aLink = function () {
    var RN = QSA("header", "sm-header", "header"), RV = QSA("a", "a-link", "reviewer"), VN = QSA("nav", "a-link", "nav");
    if (RN[0].clientWidth < 992) {
        console.log(VN[0]);
        var GF = document.createElement("a");
        GF.setAttribute("class", "rev-header btn btn-secondary mr-auto");
        for (var DT = 0; DT < RV.length; DT++) {
            if (RV[DT] != undefined) {
                GF.innerHTML = RV[DT].innerHTML;
                GF.setAttribute("href", RV[DT].getAttribute("href"));
                VN[0].insertBefore(GF, VN[0].firstElementChild);
                RV[DT].remove();
            }
        }
    }
};
// -----Menu icon
var menuBtn = document.querySelectorAll(".menu-btn");
var Menuicon = function () {
    var _loop_1 = function (D) {
        if (menuBtn[D] != undefined) {
            menuBtn[D].addEventListener("click", function () {
                menuBtn[D].classList.toggle("is--active");
                menuBtn[D].classList.add("is--clicked");
                setTimeout(function () {
                    menuBtn[D].classList.remove("is--clicked");
                }, 300);
            });
        }
    };
    for (var D = 0; D < menuBtn.length; D++) {
        _loop_1(D);
    }
};
// ---------Header Postion
var ScrollBody = function () {
    var f = document.querySelectorAll("html"), em = QSA("div", "sm-brand", "brand"), w = QSA("nav", "a-link", "nav");
    for (var u = 0; u < em.length; u++) {
        if (f[0].scrollTop > em[u].clientHeight) {
            console.log(em[0].clientHeight);
            w[0].setAttribute("n-style", "nav");
            em[u].setAttribute("style", "margin-bottom:" + w[0].clientHeight + "px");
        }
        else {
            w[0].removeAttribute("n-style");
            em[u].setAttribute("style", "margin-bottom:" + 0 + "px");
        }
    }
};
window.addEventListener("scroll", function () {
    ScrollBody();
});
//-------------------Tables
var gTable = function () {
    var MT = QSA("div", "main", "tables");
    for (var R = 0; R < MT.length; R++) {
        if (MT[R] != undefined) {
            var TB = QSA("table", "Dtable", "datatable")[R], BD = TB.querySelectorAll("tbody")[R];
            if (TB.clientWidth < BD.clientWidth) {
                var main = CD("div");
                main.setAttribute("class", "scroll-table");
                main.setAttribute("main-t", "m-table");
                MT[R].appendChild(main);
                var mTable = QSA("div", "main-t", "m-table");
                for (var DV = 0; DV < 3; DV++) {
                    var go = {
                        DV: CD("div")
                    }, iC = {
                        DV: CD("i")
                    }, BX = [
                        "fas fa-chevron-circle-left",
                        "fas fa-cog fa-spin",
                        "fas fa-chevron-circle-right"
                    ];
                    go.DV.setAttribute("n-tables", "tb-" + DV);
                    go.DV.setAttribute("class", "sc-table");
                    mTable[R].appendChild(go.DV);
                    iC.DV.setAttribute("class", BX[DV]);
                    var CT = QSA("div", "class", "sc-table");
                    CT[DV].appendChild(iC.DV);
                    console.log(CT[DV]);
                }
                MT[R].setAttribute("style", "padding-bottom:" + mTable[R].clientHeight + "px !important");
            }
        }
    }
};
var GT = function () {
    var t = document.getElementById("editor");
    if (t != undefined) {
        var quill = new Quill('#editor', {
            theme: 'snow',
            modules: {
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline'],
                    ['image', 'code-block']
                ]
            },
            placeholder: 'Compose an epic...'
        });
    }
};
var me = function () {
    var body = document.querySelectorAll("html");
    var head = document.querySelectorAll("head");
    var code = document.createComment(" |--- UX / Ui Develope By   : Ahmed Mohamed Gad");
    var mob = document.createComment(" |--- Mobile : +201113478716     ");
    var em = document.createComment(" |--- Email : ahmedsoft220@gmail.com   ");
    var codeOne = document.createComment(" |--- Back-End Develper   : Ahmed Yossry");
    var mobOne = document.createComment(" |--- Mobile : +201113478716     ");
    var emOne = document.createComment(" |--- Email : ahmedsoft220@gmail.com   ");
    head[0].appendChild(code);
    head[0].appendChild(mob);
    head[0].appendChild(em);
    head[0].appendChild(codeOne );
    head[0].appendChild(mobOne );
    head[0].appendChild(emOne);
};
// -----------Run All Function
window.onload = function () {
    bgPage();
    loginAuthor();
    me();
    aLink();
    Menuicon();
    // gTable();
    GT();
    ScrollBody();
    // QSA("div", "page", "loadingPage")[0].remove();
};
$(document).ready(function () {
    $(".search").keyup(function () {
        var searchTerm = $(".search").val();
        var listItem = $('.results tbody').children('tr');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('");
        $.extend($.expr[':'], { 'containsi': function (elem, i, match, array) {
                return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
            }
        });
        $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function (e) {
            $(this).attr('visible', 'false');
        });
        $(".results tbody tr:containsi('" + searchSplit + "')").each(function (e) {
            $(this).attr('visible', 'true');
        });
        var jobCount = $('.results tbody tr[visible="true"]').length;
        $('.counter').text(jobCount + ' item');
        if (jobCount == '0') {
            $('.no-result').show();
        }
        else {
            $('.no-result').hide();
        }
    });
});
