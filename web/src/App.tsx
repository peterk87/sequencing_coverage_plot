import type {Component} from 'solid-js';

import "@thisbeyond/solid-select/style.css";

import {Sidebar} from "./ui/Sidebar";
import {ChartContainer} from "./ui/ChartContainer";
import {state} from "./state";
import {AboutPage} from "./ui/AboutPage";
import {VariantHeatMapPage} from "./ui/VariantHeatMapPage";
import {Nav} from "./ui/Nav";

const App: Component = () => {
  return (
    <div class="h-screen dark:bg-gray-900">
      <div class="h-full flex flex-col">
        <Nav/>
        <div class={"h-full flex flex-grow flex-shrink " + (state.activePage === "chart" ? "" : "hidden")}>
            <Sidebar/>
            <ChartContainer/>
          </div>
          <div class={"flex " + (state.activePage === "about" ? "" : "hidden")}>
            <AboutPage/>
          </div>
        <div class={"flex " + (state.activePage === "heatmap" ? "" : "hidden")}>
          <VariantHeatMapPage/>
        </div>
      </div>

    </div>
  );
}

export default App;
