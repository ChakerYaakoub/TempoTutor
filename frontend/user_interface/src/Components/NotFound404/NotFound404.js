import React from 'react'
import "./NotFound404.css"

import { Link, useNavigate } from "react-router-dom";

const NotFound404 = () => {
    return (
        <div>

            <div id="notfoundMy">
                <div className="notfoundMy">
                    <div className="notfound-404My">
                        <h1>Oops!</h1>
                        <h2>404 - The Page can't be found</h2>
                    </div>

                    <Link to={"/"}>  Go TO Homepage</Link>
                   
                </div>
            </div>
        </div>
    )
}

export default NotFound404