import React, { useEffect } from "react";
import useSetUsersStore from './store/useSetUsersStore'

function MainComponents() {
    const data = useSetUsersStore(state => state.data);
    const fetchData = useSetUsersStore(state => state.fetchData);
    /*
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    */
    useEffect(() => {
        // Llama a fetchData con los parámetros deseados
        fetchData('param1Value', 'param2Value');
    }, [fetchData]);

    return (
        <div className="container pt-5">
            <div className="mb-3">
                <label className="form-label">id</label>
                <input className="form-control"/>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((user) => (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MainComponents;