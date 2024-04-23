import { reactive } from 'vue'

export const store = reactive({
    footerArrayAccount: [
        {
            name: 'My Account',
            src: '#'
        },
        {
            name: 'Checkout',
            src: '#'
        },
        {
            name: 'Cart',
            src: '#'
        },
        {
            name: 'Packages',
            src: '#'
        },
        {
            name: 'Add Cars',
            src: '#'
        },
    ],
    footerArrayLinks: [
        {
            name: 'Home',
            src: '#'
        },
        {
            name: 'About Us',
            src: '#'
        },
        {
            name: 'Blog',
            src: '#'
        },
        {
            name: 'Contact',
            src: '#'
        },
        {
            name: 'Refound & Returns',
            src: '#'
        },
    ],
    footerArrayCompanyInfo:[
        {
            adress: 'New Jersey, USA'
        },
        {
            number: '+1(234) 567 89 10'
        },
        {
            mail: 'exemple@exemple.com'
        },

    ]
})