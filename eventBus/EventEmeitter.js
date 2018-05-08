class EventEmeitter{
    constructor(){
        this._events = this._events || new Map();
        this._maxListeners = this._maxListeners||10;
    }
    emit(type,...args){
        let handler;
        handler = this._events.get(type);
        if(Array.isArray(handler)){
            handler.forEach(fn=>{
                if(args.length>0){  //当年Node的Event模块就在三个参数以下用call否则用apply
                    fn.apply(this,args);  
                }else{
                    fn.call(this);
                } 
            })
        }else{
            if(args.length>0){  //当年Node的Event模块就在三个参数以下用call否则用apply
                handler.apply(this,args);  
            }else{
                handler.call(this);
            }
        }
        return true;
    }
    addListener(type,fn){
        let handler = this._events.get(type);
        if(!handler){
            this._events.set(type,fn);
        }else if(handler&& typeof handler === 'function'){
            this._events.set(type,[handler,fn]);
        }else{
            handler.push(fn);
        }
    }
    removeListener(type,fn){ //移除监听函数,但是匿名函数是无法移除的
        let handler = this._events.get(type);
        if(handler&&typeof handler === 'function'){
            this._events.delete(type)
        }else{
            // 如果handler是数组,说明被监听多次要找到对应的函数
            let postion=-1;
            handler.forEach((h,i)=>{
                if(h===fn){
                    postion = i;
                }
            });
            if(postion!==-1){
                handler.splice(postion,1);
                if(handler.length===1){
                    this._events.set(type, handler[0]);
                }
            }else{
                return this;
            }
        }
    }
}

var emeitter = new EventEmeitter();
function h1(name){
    console.log(`Hello ${name}`);
}
function h2(name){
    console.log(`his ${name}`);
}
emeitter.addListener('arson',h1);
emeitter.addListener('arson',h2);
emeitter.emit('arson','afei');
emeitter.removeListener('arson',h2);
emeitter.emit('arson','afei');