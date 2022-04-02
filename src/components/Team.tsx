import React from 'react'

const Team = () => {
  return (
    <>
      <section className="py-24 text-center">
        <div className="container">
          <div className="text-center">
            <h2
              className="mb-12 section-heading wow fadeInDown"
              data-wow-delay="0.3s"
            >
              Our Team
            </h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="team-item">
                <div className="team-img relative">
                  <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt=""
                  />
                  <div className="team-overlay">
                    <ul className="flex justify-center">
                      <li className="mx-1">
                        <a href="#" className="social-link hover:bg-indigo-500">
                          <i
                            className="lni lni-facebook-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="#" className="social-link hover:bg-blue-400">
                          <i
                            className="lni lni-twitter-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="#" className="social-link hover:bg-red-500">
                          <i
                            className="lni lni-instagram-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center px-5 py-3">
                  <h3 className="team-name">John Doe</h3>
                  <p>UX UI Designer</p>
                </div>
              </div>
            </div>

            <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="team-item">
                <div className="team-img relative">
                  <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt=""
                  />
                  <div className="team-overlay">
                    <ul className="flex justify-center">
                      <li className="mx-1">
                        <a href="#" className="social-link hover:bg-indigo-500">
                          <i
                            className="lni lni-facebook-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="#" className="social-link hover:bg-blue-400">
                          <i
                            className="lni lni-twitter-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="#" className="social-link hover:bg-red-500">
                          <i
                            className="lni lni-instagram-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center px-5 py-3">
                  <h3 className="team-name">Sarah Doe</h3>
                  <p>Front-End Developer</p>
                </div>
              </div>
            </div>

            <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
              <div className="team-item">
                <div className="team-img relative">
                  <img
                    className="img-fluid"
                    src="https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt="rasm nea"
                  />
                  <div className="team-overlay">
                    <ul className="flex justify-center">
                      <li className="mx-1">
                        <a href="#" className="social-link hover:bg-indigo-500">
                          <i
                            className="lni lni-facebook-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="#" className="social-link hover:bg-blue-400">
                          <i
                            className="lni lni-twitter-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="mx-1">
                        <a href="#" className="social-link hover:bg-red-500">
                          <i
                            className="lni lni-instagram-original"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center px-5 py-3">
                  <h3 className="team-name">Rob Hope</h3>
                  <p>Front-end Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team
