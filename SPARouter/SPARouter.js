class SPARouter{
    constructor(router) {
        this.router = router||{};
        this.cUrl = '';
        this.history = [];
        this.isBack=false;
        this.GoAhead=false;
        this.cIndex = this.history.length-1;
        window.addEventListener('load',this.reflec.bind(this));
        window.addEventListener('hashchange',this.reflec.bind(this));
    }
    setRouter(url,callback){
        this.router[url] = callback||function(){};
    }
    reflec(){
        this.cUrl =  window.location.hash.slice(1)||'/';
        if(!this.isBack&&!this.GoAhead){
            this.history.push(this.cUrl);
            this.cIndex++;
        }
        this.router[this.cUrl]();
        this.isBack = false;
        this.GoAhead=false;
    }
    back(){//后退
        this.isBack = true;
        if(this.cIndex===0){
            return;
        }
        window.location.hash = '#'+this.history[--this.cIndex]
    }
    goAhead(){//前进
        this.GoAhead = true;
        if(this.cIndex===this.history.length-1){
            return;
        }
        window.location.hash = '#'+this.history[++this.cIndex]
    }
}