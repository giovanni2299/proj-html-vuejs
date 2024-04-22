import {reactive} from 'vue'

export const store = reactive({
    headerMenu:[
        {
            name:'Home',
            src: 'www.home.it'
        },
        {
            name:'About Us',
            src: 'www.AboutUs.it'
        },
        {
            name:'Veichles',
            src:'www.Veicles.it'
        },
        {
            name:'Dealers',
            src:'www.Dealers.it'
        },
        {
            name:'Packages',
            src:'www.Packages.it'
        },
        {
            name:'Blog',
            src:'www.Blog.it'
        },
        {
            name:'Contact',
            src:'www.Contact.it'
        }
    ]
})