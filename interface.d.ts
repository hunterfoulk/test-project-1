interface MenuItem {
    id: number
    title: string
    price: number
    img: string
    sides: string[]
    category: string
    ,
}

interface GlobalState {
    cart: []
    cartCount: 0
}
