import { projects } from "/js/projects.js";
import { lerp } from '/js/utils.js'

const content = document.querySelector('.content');
const contentImage = document.querySelector('.content__main__img');
const contentHeader = document.querySelector('.content__header');
const contentText = document.querySelector('.content__text');
const contentClose = document.querySelector('.close');
const container = document.querySelector('.container');
const columns = [...document.querySelectorAll('.column')]


let projectsArray = [];
let animating = true;

class Project{
    constructor(image,idx,title,content){
        this.image = image;
        this.idx = idx;
        this.title = title;
        this.content = content;
        this.active = false;
        this.createItem()
     }

     createItem(){
        this.gridItem = document.createElement('div');
        this.gridItem.classList.add('item');
        this.img = document.createElement('img');
        this.img.src = this.image;
        this.gridItem.appendChild(this.img);
        let i = this.idx % columns.length;
        columns[i].appendChild(this.gridItem)
        this.gridItem.addEventListener('click',this.activate.bind(this))
     }

     activate(){
        document.body.scrollTo = document.documentElement.scrollTop =  0 ;
        this.active = true;
        animating = false;

        for (let i=0; projectsArray.length;i++)
     }
}

projects.forEach((project,idx)=>{
    let newProject = new Project(project.image,idx,project.title,project.content)
    projectsArray.push(newProject);
})

console.log(projectsArray)