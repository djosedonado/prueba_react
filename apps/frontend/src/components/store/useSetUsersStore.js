import create from 'zustand'

const useSetUsersStore = create((set) => ({
    data: [],
    fetchData: async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        set({data});
    }
}))

export default useSetUsersStore;