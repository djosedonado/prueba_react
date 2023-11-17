import React, { useEffect } from "react";
import useSetUsersStore from '../../store/useSetUsersStore';

function Report() {
    const data = useSetUsersStore(state => state.data);
    const fetchData = useSetUsersStore(state => state.fetchData);
    useEffect(() => {
        // Llama a fetchData con los parámetros deseados
        fetchData('param1Value', 'param2Value');
    }, [fetchData]);

    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col">
                    <button className="button-primary"></button>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((user) => (
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="col pt-5 pl-5">
                    <div className="stats shadow">

                        <div className="stat">
                            <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div className="stat-title">Total Likes</div>
                            <div className="stat-value text-primary">25.6K</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <div className="stat-title">Page Views</div>
                            <div className="stat-value text-secondary">2.6M</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <div className="avatar online">
                                    <div className="w-16 rounded-full">
                                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="stat-value">86%</div>
                            <div className="stat-title">Tasks done</div>
                            <div className="stat-desc text-secondary">31 tasks remaining</div>
                        </div>

                    </div>
                    <div className="pt-5">
                        <div className="diff aspect-[16/9]">
                            <div className="diff-item-1">
                                <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">FrontEnd</div>
                            </div>
                            <div className="diff-item-2">
                                <div className="bg-base-200 text-9xl font-black grid place-content-center">FrontEnd</div>
                            </div>
                            <div className="diff-resizer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Report;