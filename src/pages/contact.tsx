import React from 'react'

const contact = () => {
  return (
    <div>
      <div className="flex items-center mx-auto">
        <div className="w-full max-w-7xl md:max-w-7xl lg:max-w-7xl mx-auto p-5 undefined">
          <div className="lg:ml-48 lg:mr-48 max-w-screen-xl mx-auto p-8">
            <h2 className="text-3xl p-3 text-right font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-12 ">
              دروستکردنی سڤی
            </h2>
            <ul className=" items-start gap-8 grid grid-col-2">
              <li className="w-full">
                <p className="text-lg font-medium leading-6 text-gray-900 text-right mr-2">
                  دۆزەرەوەی سیڤی مەیکەر پڵەس
                </p>
                <p className="mt-2">
                  <p className="text-base leading-6 text-gray-500 text-right mr-1 ">
                    سوپاس بۆخودای باڵا دەس کە ئەم دەرفەتەی بێبەخشیم کە بتووانم
                    کارئاسانی بۆ خۆموو هاوڕێکانم بکەم بۆبەدەست هێنانی کار و
                    ئامادەکردنی سیڤیەکانیان کەبەشێوازێکی ئاسان بەپێی توواناو
                    لێهاتووی کار لەسەر ئەوە ئەکەین کە زیاتر ئەپەکەمان خزمەت بە
                    بەکارهێنەری بەڕێز بکات{' '}
                  </p>
                </p>
              </li>
              <li className="w-full">
                <p className="text-lg font-medium leading-6 text-gray-900 text-right mr-2">
                  منیش ئەمەوێت بەشداربم؟
                </p>
                <p className="mt-2">
                  <p className="text-base leading-6 text-gray-500 text-right mr-1">
                    0772 522 1235 ✅ Fastpay ئەتوانن هاوکارمان بن بە ناردنی
                    دۆنەیت بۆ ئەم ژمارەیە
                  </p>
                </p>
              </li>
              <li className="w-full">
                <p className="text-lg font-medium leading-6 text-gray-900 text-right mr-2">
                  بیرۆکەیەکت هەیە نازانی چۆن بیکەیت ؟{' '}
                </p>
                <p className="mt-2">
                  <p className="text-base leading-6 text-gray-500 text-right mr-1">
                    بێگوومان ئیمە خاوەنی ئەزموون وو کەسانی پسپۆڕین لە دروستکردنی
                    وێبسایت و مۆبایل ئەپەکانتان بۆیە تۆش بێ دوو دڵی ئیشەکانتان
                    بە ێیمە بسپێرن تاکارێکی ناوازەت پێشکەش کەین کە شایەنی ئێوە
                    بێت
                  </p>
                </p>
              </li>

              <li className="w-full">
                <p className="text-lg font-medium leading-6 text-gray-900 text-right mr-2">
                  ✅ Facebook Account ئەکاونتی تایبەتی میرکۆ بۆ هەر کێشەیەک یان
                  هەر ڕەخنەیەک تکایە لەم ئەکاونتە ئاگادارم بکەرەوە
                </p>
                <p className="mt-2 text-right m-1">
                  <p className="text-base leading-6 text-gray-500">
                    <a
                      className="text-blue-400"
                      href="https://www.facebook.com/mirko.kawa.921"
                      target="blank"
                    >
                      کلیک لێرە بکە
                    </a>
                  </p>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className=" flex justify-center items-center mx-auto p-8">
      <h2 className="text-xl p-3 text-right font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-12 ">
    بەنوێترین تەکنەلۆجیای سەردەم
      </h2>
</div>
      <div className="sm:flex block items-center justify-center sm:space-x-4 space-y-6 mt-10">
        <div >
          <img src="../img/tailwind.png" alt="place" className=" sm:w-96 " />
        
        </div>
        <div>
          <img src="../img/react.png" alt="place" className=" sm:w-96 " />
        </div>
        <div>
          <img src="../img/nextjs.png" alt="place" className=" sm:w-96 " />
        </div>
      </div>

      <div className=" flex justify-center items-center mx-auto p-8 mt-10">
      <h2 className="text-xl p-3 text-right font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-12 ">
  مۆبایل ئەپ وێب ئەپ
      </h2>
</div>
      <div className="sm:flex block items-center justify-center sm:space-x-4 space-y-6 mt-10">
        <div>
          <img src="../img/web.png" alt="place" className=" sm:w-96 " />
        </div>
        <div>
          <img src="../img/mobile.png" alt="place" className=" sm:w-96 " />
        </div>
      
      </div>
    </div>
  )
}

export default contact
