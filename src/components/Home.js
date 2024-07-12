// import React, { useState, useEffect, useContext } from 'react'
//  import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
//  import CreateIcon from '@mui/icons-material/Create';
//  import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
// import { adddata, deldata } from './context/ContextProvider';
// import { updatedata } from './context/ContextProvider'

const Home = () => {

    return (
         <div className="mt-5">
                <div className="container">
                    <div className="add_btn mt-2 mb-2">
                        <NavLink to="/register" className="btn btn-primary">Add data</NavLink>
                    </div>

                    <table class="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">id</th>
                                <th scope="col">Username</th>
                                <th scope="col">email</th>
                                <th scope="col">Job</th>
                                <th scope="col">Number</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>aman</td>
                                    <td>aman@.com</td>
                                    <td>aman</td>
                                    <td>9765322</td>
                                    <td className="d-flex justify-content-between">
                                        <button className="btn btn-success">read</button>
                                        
                                        <button className="btn btn-primary">update</button>
                                        
                                        <button className="btn btn-danger">delete</button>
                                    </td>

                                  
                                  
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>kamo </td>
                                    <td>aman@.com</td>
                                    <td>sde</td>
                                    <td>9765322</td>
                                    <td className="d-flex justify-content-between">
                                        <button className="btn btn-success">read</button>
                                        
                                        <button className="btn btn-primary">update</button>
                                        
                                        <button className="btn btn-danger">delete</button>
                                    </td>

                                  
                                  
                                </tr>
                            </tbody>
                       
                    </table>


                </div>
            </div>
        
    )
}

export default Home;