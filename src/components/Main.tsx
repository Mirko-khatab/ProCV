import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
    <div className='space-y-16'>
      <div className="flex mx-auto flex-col items-center  sm:mt-28 mt-16 sm:space-y-6 space-y-4 ">
        <h3 className="text-xl sm:text-4xl font-bold  leading-6 text-gray-900 text-center">
          دروستکردنی سیڤیەکی ناوازە
        </h3>
        <p className="text-base leading-6 text-gray-500 text-center  ">
          لەماوەی کەمتر لە پێنج خولەك و بەسێ زمان{' '}
        </p>
        <Link href="/resumepage">
          <a className="px-10 py-3 bg-gray-500  text-gray-200 rounded-md font-bold">
            دەستپێبکە
          </a>
        </Link>
      </div>
      <div className="flex items-center justify-center sm:space-x-4  mt-10">
        <div>
          <img src="../img/work.png" alt="place" className="w-48 sm:w-96 " />
        </div>
        <div>
          <h3 className="text-sm sm:text-3xl w-44  sm:w-72 leading-6 sm:leading-8 text-right">
            سیفێکەی خۆت خۆت دروستی کە بەشێوازێکی ناوازە
          </h3>
        </div>
      </div>

      <div className="flex items-center justify-center  space-x-4  mt-10">
        <div>
          <h3 className="text-sm sm:text-3xl w-44  sm:w-72 leading-6 sm:leading-8 text-right">
            سیڤی مەیکەر پڵەس لەسەر هەموو پلاتفۆرمەکان
          </h3>
        </div>
        <div>
          <img src="../img/3device.png" alt="place" className="w-48 sm:w-96 " />
        </div>
      </div>

      <div className="flex items-center justify-center sm:space-x-4  mt-10">
        <div>
          <img src="../img/index2.png" alt="place" className="w-48 sm:w-96 " />
        </div>
        <div>
          <h3 className="text-sm sm:text-3xl w-44  sm:w-72 leading-6 sm:leading-8 text-right">
خێرا، سادە ئاسان لەبەکارهێنان
          </h3>
        </div>
      </div>


      <div className="flex items-center justify-center sm:space-x-4  mt-10">
        <div>
          <h3 className="text-sm sm:text-3xl w-44  sm:w-72 leading-6 sm:leading-8 text-right">
بە سێ زمان و بێ بەرامبەر لەبەکارهێتان
          </h3>
        </div>
        <div>
          <img src="../img/free.png" alt="place" className="w-48 sm:w-96 " />
        </div>
      </div>



    </div>
  )
}

export default Main
