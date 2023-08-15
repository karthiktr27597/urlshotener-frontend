import React, { useEffect, useState } from 'react';
import { findAllDataApi } from '../../Api';
import Header from '../../Header';
import './index.css'
import { useNavigate } from 'react-router-dom';

function CreatedURLs() {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const token = localStorage.getItem("token")
            const config = { headers: { "x-auth-token": token } }
            const response = await findAllDataApi(config)
            setData([...response.data.data]);
        } catch (err) {
            console.log(err)
            if (err.response.data.message === "Invalid Authorization") {
                const confirmed = window.confirm("Please login to continue")
                if (confirmed) {
                    navigate("/login")
                } else {
                    navigate("/urlshortener")
                }
            }
        }
    }

    useEffect(() => {
        getData()
    }, [data])


    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className='AllURLs'>
                <h1>Created URLs</h1>
                <div className="table">
                    < table >
                        <thead>
                            <tr>
                                <th>Long URL</th>
                                <th>Short URL</th>
                                <th>Clicked Cound</th>
                            </tr>
                        </thead>
                        {
                            data.map((val, index, arr) => (
                                <tbody key={val.shorturl}>
                                    <tr>
                                        <td><a href={val.longurl}>{val.longurl}</a></td>
                                        <td><a href={val.shorturl}>http://localhost:9000/{val.shorturl}</a></td>
                                        <td>{val.visitedhistory.length}</td>
                                    </tr>
                                </tbody>
                            ))
                        }
                    </table>
                </div>
            </div >
        </div>
    )
}

export default CreatedURLs