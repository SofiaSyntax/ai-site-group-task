import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="hero bg-center">
        <Image
          src="/images/aiheader.jpg"
          alt="Hero Image"
          width={2000}
          height={200}
          objectFit="cover"
          objectPosition="center"
          layout="responsive"
        />

        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello There</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 flex flex-col gap-4 m-4">
        <div className="card card-side bg-base-100 shadow-xl ">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/black-boy-posing-with-vinyls_23-2148171547.jpg?t=st=1737645682~exp=1737649282~hmac=6a96d81370cb3bb8002afdb5dd121f1df0270b79d62cb773ceff132ab1b68e84&w=900"
              alt="Music"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">Music</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <Link href={"/sofia"}>
                <button className="btn btn-primary">Watch</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/arrangement-natural-pigments-with-copy-space_23-2148734363.jpg?t=st=1737647432~exp=1737651032~hmac=996e793f26f567e0cd11321ae68be305f07fbe440d763be7e884a50466f2dcfd&w=1380"
              alt="Recipes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Recipes</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <Link href={"/embla"}>
                <button className="btn btn-primary">Watch</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/flat-lay-3d-glasses-movies-clapper-board_23-2149558759.jpg?t=st=1737646494~exp=1737650094~hmac=e5f29c20befefd5685184d1db70d157610de153dea192cabd41691ed1e1ab74d&w=740"
              alt="Movies"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Movies</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <Link href={"/fabricio"}>
                <button className="btn btn-primary">Watch</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/old-books-arrangement-with-copy-space_23-2148898331.jpg?t=st=1737646712~exp=1737650312~hmac=ef9b7eb2e4f739c725a29020aff013eecb07cd27d0465c13c1452e7d08e72b6b&w=1380"
              alt="Books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Books</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <Link href={"/mustaf"}>
                <button className="btn btn-primary">Watch</button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" md:col-span-2 md:justify-self-center card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/top-view-virtual-reality-headset-with-joystick_23-2148912728.jpg?t=st=1737647033~exp=1737650633~hmac=c73b70dacce475ad61cf679b4b44ad8cbb5d358096527c7c2566827ad1f32749&w=1800"
              alt="Games"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Games</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <Link href={"/ahmet"}>
                <button className="btn btn-primary">Watch</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
