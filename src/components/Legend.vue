<template>
  <div class="Legend">
    <div class="Legend-categories" v-for="(data, index) in sortedData" :key="data.technology">
      <h1>{{ index + 1 }}. {{ data.technology }}</h1>
      <div class="Legend-statuses">
        <div v-for="b in data.statuses" :key="b.name">
          <h3>{{ b.name }}</h3>
          <p v-for="tech in b.data" :key="tech.name">{{ tech.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { technologies, statuses, categories } from "../technologies";

export default {
  computed: {
    console: () => console,
  },
  data() {
    return {
      technologies: technologies,
      statuses: statuses,
      categories: categories,
      sortedData: [],
    };
  },
  methods: {
    // prepare data for dynamic rendering
    sortData: function() {
      this.categories.forEach((category) => {
        this.sortedData.push({
          technology: category,
          statuses: this.statuses.map((b) => ({
            name: b.name,
            data: this.technologies.filter((e) => e.category === category && e.status === b.name),
          })),
        });
      });
    },
  },
  created() {
    this.sortData(this.preparedData);
  },
};
</script>

<style lang="scss" scoped>
.Legend {
  background: $color-mid-grey;
  color: $color-white;
  overflow: auto;
  text-align: center;

  &-category {
    text-transform: capitalize;
  }
  &-categories {
    border: 5px solid $color-white;
    height: auto;
    margin: 20px;

    & h1 {
      text-transform: capitalize;
      text-decoration: underline;
    }
  }

  &-statuses {
    display: flex;
    justify-content: space-around;

    & h3 {
      text-transform: uppercase;
    }

    & p {
      padding: 5px 20px;
      scroll-margin: 50px;
    }
  }
}
</style>
