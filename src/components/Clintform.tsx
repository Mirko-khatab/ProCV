import React from 'react'

const Clintform = () => {
  return (
    
  <div id="clients" className="py-16 bg-blue-100">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-12 section-heading wow fadeInDown" data-wow-delay="0.3s">As Seen On</h2>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-1/2 md:w-1/4 lg:w-1/4">
            <div className="m-3 wow fadeInUp" data-wow-delay="0.3s">
              <img className="client-logo" src="assets/img/clients/img1.svg" alt="" />
            </div>
          </div>
          <div className="w-1/2 md:w-1/4 lg:w-1/4">
            <div className="m-3 wow fadeInUp" data-wow-delay="0.6s">
              <img className="client-logo" src="assets/img/clients/img2.svg" alt="" />
            </div>
          </div>
          <div className="w-1/2 md:w-1/4 lg:w-1/4">
            <div className="m-3 wow fadeInUp" data-wow-delay="0.9s">
              <img className="client-logo" src="assets/img/clients/img3.svg" alt="" />
            </div>
          </div>
          <div className="w-1/2 md:w-1/4 lg:w-1/4">
            <div className="m-3 wow fadeInUp" data-wow-delay="1.2s">
              <img className="client-logo" src="assets/img/clients/img4.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Clintform
