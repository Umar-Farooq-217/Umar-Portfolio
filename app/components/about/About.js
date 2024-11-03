import React from 'react'

export default function About({onClose}) {
  return (
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sapiente libero corrupti optio vel quo eius fugit, quos quas unde deleniti placeat explicabo accusantium provident expedita eaque atque voluptates ut corporis. Natus possimus voluptatem sequi praesentium eaque accusantium rem id aperiam mollitia, repudiandae nostrum pariatur?</p>
      <button onClick={onClose}>close</button>
    </div>
  )
}
