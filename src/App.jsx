import logo from "./logo.svg";
import styles from "./App.module.css";
import { createSignal } from "solid-js";

function App() {
  const [enable, setEnable] = createSignal(true);

  setInterval(() => {
    setEnable(!enable());
  }, 800);

  return (
    <div>
      <div id="cover" class="flex flex-col border gap-10 items-center">
        <h1 class="text-center text-6xl mx-auto mt-[36vh]">
          Hi! I am <span class="text-blue-400">Simon</span> <br /> I am a
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
          Some of the few niche's at which I've gained adequate proficiency.{" "}
          <br />
          Learning is endless ofcourse, but I'm quite confident in the following
          stuff.
        </p>
        <div class="flex gap-5 mt-[5vh]">
          <span>React/Preact</span>
          <span>Deno/Fresh</span>
          <span>Javscript/Typescript</span>
        </div>
        <div className="flex gap-5 mt-[5vh]">
          <span>SolidJS</span>
          <span>Figma</span>
        </div>
      </div>
    </div>
  );
}

export default App;
