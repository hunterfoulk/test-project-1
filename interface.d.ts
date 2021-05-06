interface MenuItem {
    id: number
    title: string
    price: number
    img: string
    sides: string[]
    category: string
    reviews: Review[]
    cals: number
    description: string

}

interface Order {
    id: number
    date: string
    customer: string
    address: string
    phone: string
    amount: number
    items: MenuItem[]
}


interface Review {
    name: string;
    message: string;
}

interface GlobalState {
    cart: []
    cartCount: 0
}
