"use strict";

document.querySelector(".btn-testuotojas").addEventListener("click", function(){
    document.querySelector(".btn-testuotojas").classList.add("active");
    document.querySelector(".btn-projektu-vadovas").classList.remove("active");
    document.querySelector(".btn-techninis-autorius").classList.remove("active");
    document.querySelector(".btn-verslo-analitikas").classList.remove("active");
    document.querySelector(".btn-produkto-vadovas").classList.remove("active");
    document.querySelector(".btn-front-end").classList.remove("active");
    document.querySelector(".btn-mobile").classList.remove("active");
    document.querySelector(".btn-back-end").classList.remove("active");
    document.querySelector(".btn-ux").classList.remove("active");
    document.querySelector(".testuotojas").classList.remove("d-none");
    document.querySelector(".projektu-vadovas").classList.add("d-none");
    document.querySelector(".techninis-autorius").classList.add("d-none");
    document.querySelector(".verslo-analitikas").classList.add("d-none");
    document.querySelector(".produkto-vadovas").classList.add("d-none");
    document.querySelector(".front-end").classList.add("d-none");
    document.querySelector(".mobile").classList.add("d-none");
    document.querySelector(".back-end").classList.add("d-none");
    document.querySelector(".ux-dizaineris").classList.add("d-none");
});

document.querySelector(".btn-projektu-vadovas").addEventListener("click", function(){
    document.querySelector(".btn-testuotojas").classList.remove("active");
    document.querySelector(".btn-projektu-vadovas").classList.add("active");
    document.querySelector(".btn-techninis-autorius").classList.remove("active");
    document.querySelector(".btn-verslo-analitikas").classList.remove("active");
    document.querySelector(".btn-produkto-vadovas").classList.remove("active");
    document.querySelector(".btn-front-end").classList.remove("active");
    document.querySelector(".btn-mobile").classList.remove("active");
    document.querySelector(".btn-back-end").classList.remove("active");
    document.querySelector(".btn-ux").classList.remove("active");
    document.querySelector(".testuotojas").classList.add("d-none");
    document.querySelector(".projektu-vadovas").classList.remove("d-none");
    document.querySelector(".techninis-autorius").classList.add("d-none");
    document.querySelector(".verslo-analitikas").classList.add("d-none");
    document.querySelector(".produkto-vadovas").classList.add("d-none");
    document.querySelector(".front-end").classList.add("d-none");
    document.querySelector(".mobile").classList.add("d-none");
    document.querySelector(".back-end").classList.add("d-none");
    document.querySelector(".ux-dizaineris").classList.add("d-none");
});

document.querySelector(".btn-techninis-autorius").addEventListener("click", function(){
    document.querySelector(".btn-testuotojas").classList.remove("active");
    document.querySelector(".btn-projektu-vadovas").classList.remove("active");
    document.querySelector(".btn-techninis-autorius").classList.add("active");
    document.querySelector(".btn-verslo-analitikas").classList.remove("active");
    document.querySelector(".btn-produkto-vadovas").classList.remove("active");
    document.querySelector(".btn-front-end").classList.remove("active");
    document.querySelector(".btn-mobile").classList.remove("active");
    document.querySelector(".btn-back-end").classList.remove("active");
    document.querySelector(".btn-ux").classList.remove("active");
    document.querySelector(".testuotojas").classList.add("d-none");
    document.querySelector(".projektu-vadovas").classList.add("d-none");
    document.querySelector(".techninis-autorius").classList.remove("d-none");
    document.querySelector(".verslo-analitikas").classList.add("d-none");
    document.querySelector(".produkto-vadovas").classList.add("d-none");
    document.querySelector(".front-end").classList.add("d-none");
    document.querySelector(".mobile").classList.add("d-none");
    document.querySelector(".back-end").classList.add("d-none");
    document.querySelector(".ux-dizaineris").classList.add("d-none");
});

document.querySelector(".btn-verslo-analitikas").addEventListener("click", function(){
    document.querySelector(".btn-testuotojas").classList.remove("active");
    document.querySelector(".btn-projektu-vadovas").classList.remove("active");
    document.querySelector(".btn-techninis-autorius").classList.remove("active");
    document.querySelector(".btn-verslo-analitikas").classList.add("active");
    document.querySelector(".btn-produkto-vadovas").classList.remove("active");
    document.querySelector(".btn-front-end").classList.remove("active");
    document.querySelector(".btn-mobile").classList.remove("active");
    document.querySelector(".btn-back-end").classList.remove("active");
    document.querySelector(".btn-ux").classList.remove("active");
    document.querySelector(".testuotojas").classList.add("d-none");
    document.querySelector(".projektu-vadovas").classList.add("d-none");
    document.querySelector(".techninis-autorius").classList.add("d-none");
    document.querySelector(".verslo-analitikas").classList.remove("d-none");
    document.querySelector(".produkto-vadovas").classList.add("d-none");
    document.querySelector(".front-end").classList.add("d-none");
    document.querySelector(".mobile").classList.add("d-none");
    document.querySelector(".back-end").classList.add("d-none");
    document.querySelector(".ux-dizaineris").classList.add("d-none");
});

document.querySelector(".btn-produkto-vadovas").addEventListener("click", function(){
    document.querySelector(".btn-testuotojas").classList.remove("active");
    document.querySelector(".btn-projektu-vadovas").classList.remove("active");
    document.querySelector(".btn-techninis-autorius").classList.remove("active");
    document.querySelector(".btn-verslo-analitikas").classList.remove("active");
    document.querySelector(".btn-produkto-vadovas").classList.add("active");
    document.querySelector(".btn-front-end").classList.remove("active");
    document.querySelector(".btn-mobile").classList.remove("active");
    document.querySelector(".btn-back-end").classList.remove("active");
    document.querySelector(".btn-ux").classList.remove("active");
    document.querySelector(".testuotojas").classList.add("d-none");
    document.querySelector(".projektu-vadovas").classList.add("d-none");
    document.querySelector(".techninis-autorius").classList.add("d-none");
    document.querySelector(".verslo-analitikas").classList.add("d-none");
    document.querySelector(".produkto-vadovas").classList.remove("d-none");
    document.querySelector(".front-end").classList.add("d-none");
    document.querySelector(".mobile").classList.add("d-none");
    document.querySelector(".back-end").classList.add("d-none");
    document.querySelector(".ux-dizaineris").classList.add("d-none");
});

document.querySelector(".btn-front-end").addEventListener("click", function(){
    document.querySelector(".btn-testuotojas").classList.remove("active");
    document.querySelector(".btn-projektu-vadovas").classList.remove("active");
    document.querySelector(".btn-techninis-autorius").classList.remove("active");
    document.querySelector(".btn-verslo-analitikas").classList.remove("active");
    document.querySelector(".btn-produkto-vadovas").classList.remove("active");
    document.querySelector(".btn-front-end").classList.add("active");
    document.querySelector(".btn-mobile").classList.remove("active");
    document.querySelector(".btn-back-end").classList.remove("active");
    document.querySelector(".btn-ux").classList.remove("active");
    document.querySelector(".testuotojas").classList.add("d-none");
    document.querySelector(".projektu-vadovas").classList.add("d-none");
    document.querySelector(".techninis-autorius").classList.add("d-none");
    document.querySelector(".verslo-analitikas").classList.add("d-none");
    document.querySelector(".produkto-vadovas").classList.add("d-none");
    document.querySelector(".front-end").classList.remove("d-none");
    document.querySelector(".mobile").classList.add("d-none");
    document.querySelector(".back-end").classList.add("d-none");
    document.querySelector(".ux-dizaineris").classList.add("d-none");
});

document.querySelector(".btn-mobile").addEventListener("click", function(){
    document.querySelector(".btn-testuotojas").classList.remove("active");
    document.querySelector(".btn-projektu-vadovas").classList.remove("active");
    document.querySelector(".btn-techninis-autorius").classList.remove("active");
    document.querySelector(".btn-verslo-analitikas").classList.remove("active");
    document.querySelector(".btn-produkto-vadovas").classList.remove("active");
    document.querySelector(".btn-front-end").classList.remove("active");
    document.querySelector(".btn-mobile").classList.add("active");
    document.querySelector(".btn-back-end").classList.remove("active");
    document.querySelector(".btn-ux").classList.remove("active");
    document.querySelector(".testuotojas").classList.add("d-none");
    document.querySelector(".projektu-vadovas").classList.add("d-none");
    document.querySelector(".techninis-autorius").classList.add("d-none");
    document.querySelector(".verslo-analitikas").classList.add("d-none");
    document.querySelector(".produkto-vadovas").classList.add("d-none");
    document.querySelector(".front-end").classList.add("d-none");
    document.querySelector(".mobile").classList.remove("d-none");
    document.querySelector(".back-end").classList.add("d-none");
    document.querySelector(".ux-dizaineris").classList.add("d-none");
});

document.querySelector(".btn-back-end").addEventListener("click", function(){
    document.querySelector(".btn-testuotojas").classList.remove("active");
    document.querySelector(".btn-projektu-vadovas").classList.remove("active");
    document.querySelector(".btn-techninis-autorius").classList.remove("active");
    document.querySelector(".btn-verslo-analitikas").classList.remove("active");
    document.querySelector(".btn-produkto-vadovas").classList.remove("active");
    document.querySelector(".btn-front-end").classList.remove("active");
    document.querySelector(".btn-mobile").classList.remove("active");
    document.querySelector(".btn-back-end").classList.add("active");
    document.querySelector(".btn-ux").classList.remove("active");
    document.querySelector(".testuotojas").classList.add("d-none");
    document.querySelector(".projektu-vadovas").classList.add("d-none");
    document.querySelector(".techninis-autorius").classList.add("d-none");
    document.querySelector(".verslo-analitikas").classList.add("d-none");
    document.querySelector(".produkto-vadovas").classList.add("d-none");
    document.querySelector(".front-end").classList.add("d-none");
    document.querySelector(".mobile").classList.add("d-none");
    document.querySelector(".back-end").classList.remove("d-none");
    document.querySelector(".ux-dizaineris").classList.add("d-none");
});

document.querySelector(".btn-ux").addEventListener("click", function(){
    document.querySelector(".btn-testuotojas").classList.remove("active");
    document.querySelector(".btn-projektu-vadovas").classList.remove("active");
    document.querySelector(".btn-techninis-autorius").classList.remove("active");
    document.querySelector(".btn-verslo-analitikas").classList.remove("active");
    document.querySelector(".btn-produkto-vadovas").classList.remove("active");
    document.querySelector(".btn-front-end").classList.remove("active");
    document.querySelector(".btn-mobile").classList.remove("active");
    document.querySelector(".btn-back-end").classList.remove("active");
    document.querySelector(".btn-ux").classList.add("active");
    document.querySelector(".testuotojas").classList.add("d-none");
    document.querySelector(".projektu-vadovas").classList.add("d-none");
    document.querySelector(".techninis-autorius").classList.add("d-none");
    document.querySelector(".verslo-analitikas").classList.add("d-none");
    document.querySelector(".produkto-vadovas").classList.add("d-none");
    document.querySelector(".front-end").classList.add("d-none");
    document.querySelector(".mobile").classList.add("d-none");
    document.querySelector(".back-end").classList.add("d-none");
    document.querySelector(".ux-dizaineris").classList.remove("d-none");
});

