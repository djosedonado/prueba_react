import React, { useEffect } from "react";
import useSetPhotosStore from '../../store/useSetPhotosStore';
import '../home/home.css';


function Home() {
    const data = useSetPhotosStore(state => state.data);
    const fetchData = useSetPhotosStore(state => state.fetchData);
    useEffect(() => {
        // Llama a fetchData con los parámetros deseados
        fetchData('param1Value', 'param2Value');
    }, [fetchData]);
    return (
        <div className="container">
            <div className="row p-5">
                <div className="col p-5">
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img src="https://img.freepik.com/free-photo/digital-painting-mountain-with-colorful-tree-foreground_1340-25699.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699574400&semt=ais" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                        </div>
                    </div>
                </div>
                <div className="col-5 pl-10">
                    <ul role="list" className="divide-y divide-gray-100 col-5">
                        {data.map((person) => (
                            <li key={person.id} className="flex justify-between gap-x-6 py-5">
                                <div className="flex min-w-0 gap-x-4">
                                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.url} alt="" />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">{person.title}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;