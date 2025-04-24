import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  id: number
  title: string
  img: string
  price: number
  quantity: number
}

interface CartState {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item: CartItem) => {
        const existingItem = get().cart.find((i) => i.id === item.id)
        if (existingItem) {
          set({
            cart: get().cart.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          })
        } else {
          set({ cart: [...get().cart, item] })
        }
      },

      removeFromCart: (id: number) => {
        set({ cart: get().cart.filter((item) => item.id !== id) })
      },

      updateQuantity: (id: number, quantity: number) => {
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        })
      },

      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'cart-storage', // localStorage key
    }
  )
)
