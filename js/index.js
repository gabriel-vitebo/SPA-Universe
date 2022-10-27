import { Router } from "./router.js";

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/explore", "/pages/explore.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const homePage = document.querySelector(".img-home")
const universePage = document.querySelector(".img-universe")
const explorePage = document.querySelector(".img-explore")
const bodyBg = document.querySelector("body")

function removeAllBg () {
  bodyBg.classList.remove("home")
  bodyBg.classList.remove("universe")
  bodyBg.classList.remove("explore")
}

homePage.addEventListener("click", () => {
  removeAllBg()
  bodyBg.classList.add("home")
})

universePage.addEventListener("click", () => {
  removeAllBg()
  bodyBg.classList.add("universe")
})

explorePage.addEventListener("click", () => {
  removeAllBg()
  bodyBg.classList.add("explore")
})