import create from 'zustand';
import image from '../assets/images/kanban.jpg'

interface Item {
  title: string;
  image: string;
}

interface ItemsStore {
  items: Item[];
  addItem: (newItem: Item) => void;
}

export const useItemsStore = create<ItemsStore>((set) => ({
  items: [
    {title: "Kanban Template", image: image},
  ],
  addItem: (newItem: Item) => set((state) => {
    const updatedItems = [...state.items, newItem];
    // localStorage.setItem('items', JSON.stringify(updatedItems)); // Uncomment if using localStorage
    return { items: updatedItems };
  }),
}));
