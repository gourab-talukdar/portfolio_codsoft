import React from 'react';

const ClientBox = (props) => {
  return (
    <div className={`client-container__item ${props.client.c_id === props.active ? '' : 'd-none'}`}>
        <div className='client-designation'>
            <h4>{props.client.name}</h4>
            <small>{props.client.designation}, {props.client.company_name}</small>
        </div>
        <p><q><em>{props.client.review}</em></q></p>
        <div className='client-img'>
            <img src={props.client.client_img} alt='client_img' />
        </div>
    </div>
  )
}

export default ClientBox;
