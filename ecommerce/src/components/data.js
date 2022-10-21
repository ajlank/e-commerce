import {v4 as uuidv4} from 'uuid'
const products=[
    {
        image:require('../img/product-1.png'),
        name:"Google Pixel -Black",
        price:"$10",
        id:uuidv4()
    },
    {
        image:require('../img/product-2.png'),
        name:"Samsing s7",
        price:"$16",
        id:uuidv4()
    },
    {
        image:require('../img/product-3.png'),
        name:"HTC 10 -Black",
        price:"$8",
        id:uuidv4()
    },
    {
        image:require('../img/product-4.png'),
        name:"HTC 10 -White",
        price:"$18",
        id:uuidv4()
    },
    {
        image:require('../img/product-5.png'),
        name:"HTC Desire 626s",
        price:"$24",
        id:uuidv4()
    },
    {
        image:require('../img/product-6.png'),
        name:"Vintage Iphone",
        price:"$17",
        id:uuidv4()
    },
    {
        image:require('../img/product-7.png'),
        name:"Iphone 7",
        price:"$30",
        id:uuidv4()
    },
    {
        image:require('../img/product-8.png'),
        name:"Smashed Iphone",
        price:"$2",
        id:uuidv4()
    }
]
export default products;