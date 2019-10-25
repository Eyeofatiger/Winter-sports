/*NAv button*/

class Dropdown{
    constructor(selector){
        this.el = document.querySelector(selector);
        this.nav = document.querySelector("nav");

        this.el.addEventListener('click', (eventObject)=>{
            if(eventObject.target.classList.contains('dropdown-label')){
                if(this.el.classList.contains('open')){
                    this.close();
                }else{                
                this.open();
                }
            }
        });
    }

    open(){
        this.nav.style.height = '40vh';
        this.nav.style.width = '350px';
        this.el.classList.add('open');
    }

    close(){
        this.nav.style.height = '50px';
        this.nav.style.width = '50px';
        this.el.classList.remove('open');
    }
}

const dropdown = new Dropdown('.dropdown');

