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
    ]
})