import React from "react";

export default function footer() {
  return (
    <footer className=" mx-auto bg-primer pt-14 pb-12 bottom-0 right-0 w-full items-center z-10 lg:px-[100px] ">
      <div className="lg:flex-wrap">
        <div className="container mx-auto p-5 lg:item-center lg:justify-between lg:flex ">
          <div className="">
            <div className="text-justify text-white text-xl font-bold  leading-6">
              Badan Pengembangan <br />
              dan Pembinaan Bahasa
            </div>
            <div className="text-justify text-white text-base font-semibold leading-9 mt-4">
              Jalan Daksinapati Barat IV, Rawamangun Jakarta Timur 13220
              <br />
              Telepon (021) 4706287, 4706288, 4896558, 4894546
              <br />
              Faksimile (021) 4750407
              <br />
              <a href="mailto:badan.bahasa@kemdikbud.go.id">
                Pos-el badan.bahasa[at]kemdikbud.go.id
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 ">
            <div className="text-justify text-white text-xl font-bold  leading-6 ">
              Media Sosial
            </div>
            <div className="flex items-center text-white hover:text-sekunder text-base font-semibold leading-9 mt-4">
              <img
                src="/komponen/ikon/Instagram.svg"
                alt="Instagram Icon"
                className="mr-2 w-4 h-4 "
              />
              <a
                href="https://www.instagram.com/badanbahasakemendikbud/"
                className=""
              >
                @badanbahasakemendikbud
              </a>
            </div>
            <div className="flex items-center text-white hover:text-sekunder text-base font-semibold leading-9">
              <img
                src="/komponen/ikon/Twitter.svg"
                alt="Twitter Icon"
                className="mr-2 w-4 h-4"
              />
              <a href="https://twitter.com/BadanBahasa">@BadanBahasa</a>
            </div>
            <div className="flex items-center text-white hover:text-sekunder text-base font-semibold leading-9">
              <img
                src="/komponen/ikon/Facebook.svg"
                alt="Facebook Icon"
                className="mr-2 w-4 h-4"
              />
              <a href="https://www.facebook.com/Badan.Bahasa">
                Badan Pengembangan dan Pembinaan Bahasa
              </a>
            </div>
            <div className="flex items-center text-white hover:text-sekunder text-base font-semibold leading-9">
              <img
                src="/komponen/ikon/Youtube.svg"
                alt="Youtube Icon"
                className="mr-2 w-4 h-4"
              />
              <a href="https://www.youtube.com/@BadanBahasa">
                Badan Pengembangan dan Pembinaan Bahasa
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" container mx-auto w-full pt-5 mt-10 border-t border-slate-50 ">
        <p className="text-white justify-center text-center ">
          © 2024 Badan Pengembangan dan Pembinaan Bahasa - Kementerian
          Pendidikan, Kebudayaan, Riset, dan Teknologi
        </p>
      </div>
    </footer>
  );
}
