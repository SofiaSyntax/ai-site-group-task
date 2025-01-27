import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="hero bg-center">
        <Image
          className=" max-h-96 sm:max-h-80 md:max-h-96 lg:max-h-160 xl:max-h-192"
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
            <h1 className="mb-5 text-5xl font-bold">Welcome to the future</h1>
            <p className="mb-5">
              Welcome to our new AI-site, whether you're looking for
              inspiration, searching for new ideas or want to explore new AI
              tools, our website makes it easy to find innovative ideas and
              solutions. Look around and get inspired!
            </p>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-1 md:w-full max-w-6xl mx-auto">
        <div className="md:grid md:grid-cols-2 flex flex-col gap-10 p-10 md:mx-auto  md:justify-center">
          <div className="card card-side bg-base-100 shadow-xl ">
            <figure className="flex-shrink-0 w-40 max-h-52">
              <Image
                className="object-cover min-h-full"
                src="/images/redvinyle.jpg"
                alt="Vinyl image"
                width={256}
                height={160}
                layout="responsive"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">Music</h2>
              <p>Click the button to get some new music for your playlist.</p>
              <div className="card-actions justify-end">
                <Link href={"/sofia"}>
                  <button className="btn btn-primary">Take me There!</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="card card-side bg-base-100 shadow-xl">
            <figure className="flex-shrink-0 w-40 max-h-52">
              <Image
                className="object-cover min-h-full"
                src="/images/recipies.jpg"
                alt="Recipies Image"
                width={256}
                height={160}
                layout="responsive"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Recipes</h2>
              <p>Click the button to get inspired and try some new recipies.</p>
              <div className="card-actions justify-end">
                <Link href={"/embla"}>
                  <button className="btn btn-primary">Take me There!</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className="flex-shrink-0 w-40 max-h-52">
              <Image
                className="object-cover min-h-full"
                src="/images/movies.jpg"
                alt="Movies Image"
                width={256}
                height={160}
                layout="responsive"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Movies</h2>
              <p>
                Click the button and pick between some movie you probably never
                watched.
              </p>
              <div className="card-actions justify-end">
                <Link href={"/fabricio"}>
                  <button className="btn btn-primary">Take me There!</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className="flex-shrink-0 w-40 max-h-52">
              <Image
                className="object-cover min-h-full"
                src="/images/books.jpg"
                alt="Books Image"
                width={256}
                height={160}
                layout="responsive"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Books</h2>
              <p>
                Click the button to try some new books between different genres.
              </p>
              <div className="card-actions justify-end">
                <Link href={"/mustaf"}>
                  <button className="btn btn-primary">Take me There!</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 md:max-w-[516px] md:justify-self-center card card-side bg-base-100 shadow-xl">
            <figure className="flex-shrink-0 w-40 max-h-52">
              <Image
                className="object-cover min-h-full"
                src="/images/games2.png"
                alt="Games Image"
                width={256}
                height={160}
                layout="responsive"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">AI Generated Quiz</h2>
              <p>Click the button for your AI Generated Quiz.</p>
              <div className="card-actions justify-end">
                <Link href={"/ahmet"}>
                  <button className="btn btn-primary">Take me There!</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
