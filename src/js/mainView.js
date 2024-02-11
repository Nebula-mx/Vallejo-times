class MAIN_VIEW {
    constructor(clicksManager){
        this.clicksManager = clicksManager;
        this.clickableElements = {
            "goToArticle": async (e) => {
                const article = e.target.dataset.article;
                const content = (await import(`../views/${article}.js`)).default()

                document.querySelector("main").innerHTML = content;
                window.scrollTo(0, 0)
            },
        };
    }
    shotInteraction(e){
        if(this.clickableElements[e.target.dataset.mode]){
            this.clickableElements[e.target.dataset.mode](e)
        }
    }
    startModule(){
        document.addEventListener("click", this.clicksManager)
    }
}
function clicksManager(e){
    mainView.shotInteraction(e)
}
export const mainView = new MAIN_VIEW(clicksManager)