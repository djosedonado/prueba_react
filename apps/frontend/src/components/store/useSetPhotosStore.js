import create from 'zustand';

const useSetPhotosStore = create((set) => ({
  data: [],
  fetchData: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos')
      const data = await response.json();
      set({data:data.slice(0,5)});
  }
}))

export default useSetPhotosStore;