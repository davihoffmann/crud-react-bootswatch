import React from 'react';

export default function Alert({type, title, mesage }){

  const alertType = `alert ${type}`;

  return (
    <div className={alertType}>
      <strong>{ title }</strong> { mesage }
    </div>
  )
}