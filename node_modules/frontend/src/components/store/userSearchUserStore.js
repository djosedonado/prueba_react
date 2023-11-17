import create from 'zustand'

const useSearchUserStore = create((set) => ({
    data: [],
  fetchData: async (param1, param2) => {
    try {
      // Usar los parámetros en tu solicitud API si es necesario
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/?param1=${param1}&param2=${param2}`);
      const data = await response.json();
      set({ data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}))