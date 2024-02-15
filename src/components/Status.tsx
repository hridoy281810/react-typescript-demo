import React from 'react';
type StatusProps = {
    status: "loading" | "success" | "error"
}
const Status = (props: StatusProps) => {
    let message;
    if(props.status === 'loading'){
        message = 'Loading....'
    }
    else if(props.status === "success"){
        message = "Data fetched successfully1"
    }
    else if(props.status === "error"){
        message = "Error fetching data"
    }
  return (
    <div>
     <h2>loading:- {props.status}</h2>
     <h2>success:- {message}</h2>
    </div>
  );
};

export default Status;