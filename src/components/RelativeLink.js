import React from 'react';
import {
    Link,
    useRouteMatch
  } from "react-router-dom";


function RelativeLink(props){
    let { path } = useRouteMatch();
    return (
                <Link to={`${path}/${props.route}`}>
                    {props.children}
               </Link>
    )
}

export default RelativeLink;