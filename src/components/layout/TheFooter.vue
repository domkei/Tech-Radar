<template>
  <div class="Footer">
    <h2>Sources:</h2>

    <div>
      <ul>
        <li v-for="quelle in quellen" :key="quelle.name">
          <p>
            {{ quelle.description }}: <a :href="quelle.link" target="blank">{{ quelle.name }}</a>
          </p>
        </li>
      </ul>
    </div>
    <h3>only optimized for desktop viewport 😊</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      quellen: [
        {
          name: "Zalando Tech Radar",
          description: "The System, how it works and how it could look",
          link: "https://opensource.zalando.com/tech-radar/",
        },
        {
          name: "Douglas Eggleton Tech-Radar/Vue",
          description: "Logic is highly inspired by Douglas Eggletons Tech-Radar",
          link: "https://github.com/douglaseggleton/vue-tech-radar",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.Footer {
  background: $color-mid-grey;
  color: $color-white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  a {
    color: $color-white;

    &:visited {
      color: $color-white;
    }
    &:hover {
      color: $color-blue;
    }
  }
}
</style>
