// ΑΛΛΑΓΗ: Κάνε import το Product type από το σωστό σημείο
import { Product } from "../../../types/product.schema";

const products: Product[] = [
    { 
        id: 1, 
        name: "Laptop", 
        price: 999, 
        image: "/images/laptop.jpg",
        description: "High-performance laptop for professionals." 
    },
    { 
        id: 2, 
        name: "Phone", 
        price: 499, 
        image: "/images/phone.jpg",
        description: "Latest smartphone with stunning display."
    },
    { 
        id: 3, 
        name: "Headphones", 
        price: 199, 
        image: "/images/headphones.jpg" 
    },
    { 
        id: 4, 
        name: "Smart Watch", 
        price: 299, 
        image: "/images/smart-watch.jpg" 
    },
    { 
        id: 5, 
        name: "Tablet", 
        price: 399, 
        image: "/images/tablet.jpg" 
    },
    { 
        id: 6, 
        name: "Gaming Console", 
        price: 499, 
        image: "/images/gaming-console.jpg" 
    },
    { 
        id: 7, 
        name: "Wireless Mouse", 
        price: 49, 
        image: "/images/wireless-mouse.jpg" 
    },
    { 
        id: 8, 
        name: "Bluetooth Speaker", 
        price: 149, 
        image: "/images/bluetooth-speaker.jpg" 
    },
    { 
        id: 9, 
        name: "External Hard Drive", 
        price: 89, 
        image: "/images/external-hard-drive.jpg" 
    },
    { 
        id: 10, 
        name: "Camera", 
        price: 599, 
        image: "/images/camera.jpg" 
    }
];

export default products;