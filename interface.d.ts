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

interface Review {
    name: string;
    message: string;
}

interface GlobalState {
    cart: []
    cartCount: 0
}
