/*NAv button*/

class Dropdown{
    constructor(selector){
        this.el = document.querySelector(selector);
        this.nav = document.querySelector("nav");
        this.but = document.querySelector(".dropdown-label");

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
        this.nav.style.height = '70vh';
        this.nav.style.width = '100%';
        this.el.classList.add('open');
        this.but.style.transform= 'matrix(-1, 0, 0, -1, 0, 0)';
        this.but.style.border = 'none';
        this.but.style.borderRight = '3px solid white';
    }

    close(){
        if(document.documentElement.clientWidth < 700 && document.documentElement.clientWidth > 380){
            this.nav.style.height = '10vw';
            this.nav.style.width = '5vw';
            this.el.classList.remove('open');
            this.but.style.transform= 'matrix(1, 0, 0, 1, 0, 0)';
            this.but.style.border = 'none';
            this.but.style.borderLeft = '3px solid white';
        } else if (document.documentElement.clientWidth < 380){
            this.nav.style.height = '15vw';
            this.nav.style.width = '7.5vw';
            this.el.classList.remove('open');
            this.but.style.transform= 'matrix(1, 0, 0, 1, 0, 0)';
            this.but.style.border = 'none';
            this.but.style.borderLeft = '3px solid white';
        } else{
            this.nav.style.height = '5vw';
            this.nav.style.width = '2.5vw';
            this.el.classList.remove('open');
            this.but.style.transform= 'matrix(1, 0, 0, 1, 0, 0)';
            this.but.style.border = 'none';
            this.but.style.borderLeft = '3px solid white';
        }
    }
}

const dropdown = new Dropdown('.dropdown');

