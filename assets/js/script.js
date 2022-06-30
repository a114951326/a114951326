

const plats = [
    {
        imgSrc: "./assets/img/img-01.jpg",
        title:"farandole de framboises",
        text: "Un goût pour l'acidité de la framboise et la douceur d'un voile sucré ? Il suffit de demander!"
    },
    {
        imgSrc: "./assets/img/img-02.jpg",
        title:"combo vitaminé",
        text: "Besoin d'un coup de boost ? Envie d'un peu de tout ? On vous propose ce combo pour vous aider à vous rafraîchir !"
    }, {
        imgSrc: "./assets/img/img-03.jpg",
        title:"simple et efficace",
        text: "La sobriété sans négliger le bon, le frais et le goût ? Pas de problème, on a tout prévu pour vous !"
    },
    {
        imgSrc: "./assets/img/img-04.jpg",
        title:"une assiette verte",
        text: "Envie de déguster de la verdure ? Et de beaucoup de fraicheur ? C'est ce plat qui vous ira !"
    },
    {
        imgSrc: "./assets/img/img-05.jpg",
        title:"pluie étoilée",
        text: "Un fruit simple relevé des saveurs uniques de cet anis si spécial ... une délicieuse dégustation !"
    },
    {
        imgSrc: "./assets/img/img-12.jpg",
        title:"",
        text: ""
    }
];



let menu = document.getElementById("menu");
let attente = '';
for (const tbl of plats) {
    attente += '<section class="article-js"><article class="float-l section-js"><img class="item-img padding" src="'+tbl.imgSrc +' "/></article><article class"float-r"><h3 class="padding" >' + tbl.title + '</h3><p class="padding" >' + tbl.text + '</p></article></section><div class="clear"></div>';
}
menu.innerHTML = attente;