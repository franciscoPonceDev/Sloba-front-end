import React from 'react';

const Hero = () => (
  <div className="section-shadow">
    <div className="clip-hero bg-white h-70vh flex items-center justify-center">
      <main className="my-24 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-0">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
            <span className="block xl:inline">Data to enrich your</span>
            {' '}
            <span className="block text-indigo-600 xl:inline">
              online business
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
            cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
            aliqua.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center ">
            <div className="rounded-md shadow w-1/4">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Cadastre-se
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 w-1/4">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Leilões ativos
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default Hero;
