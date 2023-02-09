import logo from "./logo.svg";
import styles from "./App.module.css";
import { createSignal } from "solid-js";

function App() {
  const [enable, setEnable] = createSignal(true);

  setInterval(() => {
    setEnable(!enable());
  }, 800);

  return (
    <div class="text-white bg-gradient-to-r from-[#0f0c29] to-[#302b63]">
      <div id="cover" class="flex flex-col  gap-10 items-center">
        <h1 class="text-center text-6xl mx-auto mt-[36vh]">
          Hi! I'm <span class="text-blue-400">Simon</span> <br /> I am a
          <span class="text-blue-500"> Frontend </span> Engineer
          <br /> and <br /> User Experience
          <span class="text-blue-600"> Professional</span>
        </h1>

        <a href="#skills">
          <img src="down-arrow.png" class="animate-bounce w-[65px] " alt="" />
        </a>
      </div>

      <div
        id="skills"
        class="flex flex-col mt-[15vh] items-center justify-center"
      >
        <h1 class="text-xl font-semibold text-blue-500">Most Developed</h1>
        <h1 class="text-4xl font-bold">Skills</h1>
        <p class="mt-[5vh] text-xl text-center">
          Some of the few niches at which I've gained adequate proficiency.{" "}
          <br />
          Learning is endless ofcourse, but I'm quite confident in the following
          stuff.
        </p>
        <div class="flex  gap-[2rem] sm:gap-[6rem]  mt-[5vh]">
          <span class="flex  flex-col items-center">
            <img
              src="preact.svg"
              class=" hover:w-[180px] hover:transition-all transition-all min-w-[80px] w-[80px]  sm:min-w-[140px]"
              alt=""
            />
            Preact
          </span>
          <span class="flex  flex-col items-center">
            <img
              src="deno.svg"
              class=" hover:w-[180px] hover:transition-all transition-all min-w-[80px] w-[80px]  sm:min-w-[140px]"
              alt=""
            />
            Fresh
          </span>
          <span class="flex  flex-col items-center">
            <img
              src="typescript.svg"
              class=" hover:w-[180px] hover:transition-all transition-all min-w-[80px] w-[80px]  sm:min-w-[140px]"
              alt=""
            />
            Typescript
          </span>
        </div>
        <div className="flex  gap-[6vh] mt-[5vh]">
          <span class="flex  flex-col items-center">
            <img
              src="solidjs.svg"
              class=" hover:w-[180px] hover:transition-all transition-all min-w-[80px] w-[80px]  sm:min-w-[140px]"
              alt=""
            />
            SolidJS
          </span>
          <span class="flex  flex-col items-center">
            <img
              src="figma.svg"
              class=" hover:w-[180px] hover:transition-all transition-all min-w-[80px] w-[80px]  sm:min-w-[140px]"
              alt=""
            />
            Figma
          </span>
        </div>
      </div>

      <div
        id="project"
        class="flex flex-col mt-[15vh]  mx-[10%]  items-center gap-[3vh] justify-center"
      >
        <h1 class="text-xl font-semibold text-blue-500">Projects</h1>
        <h1 class="text-4xl  font-bold">Pokédex</h1>
        <img src="backpoke.jpg" class=" rounded-md w-[800px]" alt="" />
        <span class="flex gap-10">
          <a
            href=""
            class="bg-pink-300 text-black hover:bg-pink-500 transition-all px-5 py-1 rounded-md"
          >
            Live Site
          </a>
          <a
            href=""
            class="bg-pink-300 text-black hover:bg-pink-500 transition-all px-5 py-1 rounded-md"
          >
            View Repo
          </a>
        </span>
        <span class=" text-gray-300 text-xl w-full sm:w-[66%] ">
          <p>
            This was one of my favourite projects since I'm a hardcore Pokéfan!
            It's a Pokédex (Pokémon Library) which contains info about all 746
            Pokémons! Includes Pokemon's description and move's types.
          </p>
          <p class="mt-5">
            The frontend is developed using React. Pokéapi is used for the
            data-images, moves, Pokémon names etc.
          </p>
        </span>

        <h1 class="text-4xl  font-bold">Fashion Ecommerce</h1>
        <img src="ecommerce.png" class=" rounded-md w-[800px]" alt="" />
        <span class="flex gap-10">
          <a
            href="https://ecommercesimon.deno.dev/"
            class="bg-pink-300 text-black hover:bg-pink-500 transition-all px-5 py-1 rounded-md"
          >
            Live Site
          </a>
          <a
            href=""
            class="bg-pink-300 text-black hover:bg-pink-500 transition-all px-5 py-1 rounded-md"
          >
            View Repo
          </a>
        </span>
        <span class=" text-gray-300 text-xl w-full sm:w-[66%] ">
          <p>
            A fashion-ecommerce theme website. Classic-light themed. Can easily
            adapt to any kind of store. Integrated with Stripe for payments.
          </p>
          <p class="mt-5">
            It runs on the recently released JS-runtime, Deno. Built on top of
            the Fullstack framework for Deno, Fresh. Styled using TailwindCSS
            and deployed though Netlify for reliable performance.
          </p>
        </span>
      </div>
      <footer class="bg-[#EEA47FFF] text-black h-[300px] mt-24 rounded-sm flex flex-col items-center">
        <span class="mt-10 font-semibold text-xl flex flex-col  items-center gap-6">
          <a href="#cover">Back to the top</a>
          <a href="mailto:">nikhilsimontoppo@gmail.com</a>
          <span class="flex mt-6  w-full justify-between">
            <img src="twitter.svg" class="w-10" alt="" />
            <img src="instagram.svg" class="w-10" alt="" />
            <img src="github.svg" class="w-10" alt="" />
          </span>
          <span class="text-sm">
            &copy 2022 Nikhil Toppo. All Rights Reserved.
          </span>
        </span>
      </footer>
    </div>
  );
}

export default App;
