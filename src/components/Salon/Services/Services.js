import React from 'react'
import v4 from 'uuid/v4'

export const Services = ({services}) => {
  if(services) {
    return (
      <section className="service">
        <div className="title-small text-center">Service</div>
        <div className="service__table">
          {
            services.map(({name, duration, price}) => {
              return (
                <div className="row flex" key={v4()}>
                  <div className="item name">{name}</div>
                  <div className="item minutes">{duration} minutes</div>
                  <div className="item kd">{price} KD</div>
                </div>
              )
            })
          }
        </div>
      </section>
    )
  }
  return null
}
