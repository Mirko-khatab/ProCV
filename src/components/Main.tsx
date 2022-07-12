import React from 'react'
import Expereans from './resume/left/Expereans'
import Head from './resume/right/Head'
import { Preview, print } from 'react-html2pdf'

const Main = () => {
  return (
    <>
      <Preview id={'jsx-template'}>
        <div className="main-page">
          <div className="sub-page">
            <div className="grid grid-cols-3 ">
              <div className="sub-page w-full bg-rasas">
                <Head />
              </div>
              <div className="col-span-2 ">
                <Expereans />
              </div>
              <button onClick={() => print('a', 'jsx-template')}> print</button>
            </div>
          </div>
        </div>
      </Preview>
    </>
  )
}

export default Main
