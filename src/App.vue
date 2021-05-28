<template>
  <div class="Main">
    <the-header></the-header>
    <Radar />
  </div>
  <div class="Infobox">
    <Legend />
    <About />
  </div>
  <the-footer></the-footer>
</template>

<script>
import Radar from "./components/Radar";
import Legend from "./components/Legend";
import About from "./components/About";
import TheHeader from "./components/layout/TheHeader";
import TheFooter from "./components/layout/TheFooter";

export default {
  name: "App",
  components: {
    Radar,
    TheHeader,
    TheFooter,
    Legend,
    About,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: $font;
  display: grid;
  grid-auto-columns: 2fr 1.5fr;
  grid-template-areas:
    "Main Infobox"
    "Footer Footer";
}

.Main {
  grid-area: Main;
  padding-left: 20px;
}

.Infobox {
  display: flex;
  flex-direction: column;
  grid-area: Infobox;

  .Legend {
    height: 50vh;
  }

  .About {
    height: 50vh;
  }
}

.Footer {
  grid-area: Footer;
  height: auto;
}
</style>
