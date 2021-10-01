import React from 'react';

export default function Message({ toggle, message }) {
  return (
    <div>
        {toggle ? <li>{message}</li> : null}
    </div>
  )
}