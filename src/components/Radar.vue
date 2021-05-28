<template>
  <svg width="700" height="700">
    <!-- Circles for the Chart -->
    <circle
      v-for="(status, i) in statuses"
      :key="status.name"
      class="status-circle"
      :cx="chartRadius + containerOffset"
      :cy="chartRadius + containerOffset"
      :r="chartRadius - (chartRadius / statuses.length) * i"
    ></circle>
    <!-- Chart line -->
    <line
      v-for="(category, i) in categories"
      :key="category"
      class="category-radius"
      :x1="calcLineXPos(i) + containerOffset"
      :y1="calcLineYPos(i) + containerOffset"
      :x2="chartRadius + containerOffset"
      :y2="chartRadius + containerOffset"
    ></line>

    <!-- Label for the Categories -->
    <text
      v-for="(category, i) in categories"
      :key="category + 1"
      class="category-label"
      :x="getCategoryLabelXPos(category, i) + containerOffset"
      :y="getCategoryLabelYPos(category, i) + containerOffset"
    >
      {{ category }}
    </text>

    <!-- Chart points for technologies -->
    <g
      v-for="(technology, i) in technologies"
      :key="technology.name"
      class="pointer"
      :data-name="technology.name"
      @mouseover="addLabelHighlight"
      @mouseout="removeLabelHighlight"
    >
      <circle
        class="pointer__circle"
        :fill="getStatusColor(technology.status)"
        :cx="getTechnologyXPos(technology, i) + containerOffset"
        :cy="getTechnologyYPos(technology, i) + containerOffset"
        r="15"
      ></circle>
      <text
        class="pointer__text"
        :x="getTechnologyXPos(technology, i) + containerOffset"
        :y="getTechnologyYPos(technology, i) + containerOffset + pointerSize * 0.5"
      >
        {{ i }}
      </text>
    </g>

    <!-- Status labels for adopt, assess, hold and trial -->
    <g v-for="(status, i) in statuses" :key="status.name + 1" class="status-label">
      <rect
        class="status-label__rect"
        :height="50"
        :width="100"
        :x="chartRadius - 100 / 2 + containerOffset"
        :y="getStatusLabelYPos(status, i) + containerOffset"
        rx="20"
        :data-status="status.name"
      ></rect>
      <text
        class="status-label__text"
        :font-size="containerSize * 0.023"
        :x="chartRadius + containerOffset"
        :y="getStatusLabelYPos(status, i) + 50 * 0.7 + containerOffset"
      >
        {{ status.name }}
      </text>
    </g>
  </svg>
</template>

<script>
import * as seedrandom from "seedrandom";
import { technologies, statuses, categories } from "../technologies";

//Basic Config
const random = seedrandom.default("");
const numberCache = {};
const chartDiameter = 600;
const containerOffset = 50;
const radians = (degrees) => {
  return (degrees * Math.PI) / 180;
};

// cache used for providing the same pointer position
function generateRandomNumber(i) {
  return numberCache[i] ? numberCache[i] : (numberCache[i] = random());
}

export default {
  data() {
    return {
      technologies: technologies,
      statuses: statuses,
      categories: categories,
      containerSize: chartDiameter,
      radiansPerCategory: radians(360 / categories.length),
      pointerSize: 10,
      labelWidth: chartDiameter * 0.2,
      labelHeight: chartDiameter * 0.1,
      chartDiameter: chartDiameter,
      chartRadius: chartDiameter / 1.5,
      containerOffset: containerOffset,
    };
  },
  mounted() {},
  methods: {
    addLabelHighlight: function(event) {
      const value = event.target.parentNode.getAttribute("data-name");
      const elementWithinLegend = [...document.querySelectorAll("p")].filter((p) => p.textContent.includes(value));
      elementWithinLegend[0].scrollIntoView({ block: "end", behavior: "smooth" });
      elementWithinLegend[0].style.backgroundColor = "#03b4ce";
    },
    removeLabelHighlight: function(event) {
      const value = event.target.parentNode.getAttribute("data-name");
      const elementWithinLegend = [...document.querySelectorAll("p")].filter((p) => p.textContent.includes(value));
      elementWithinLegend[0].style.backgroundColor = "transparent";
    },
    //  calculates line positiong within chart
    calcLineXPos: function(categoryIndex) {
      const angle = (360 / this.categories.length) * categoryIndex;
      return this.chartRadius * Math.cos(radians(angle)) + this.chartRadius;
    },
    calcLineYPos: function(categoryIndex) {
      const angle = (360 / this.categories.length) * categoryIndex;
      return this.chartRadius * Math.sin(radians(angle)) + this.chartRadius;
    }, //calculates label positioning for categorys
    getCategoryLabelXPos: function(category, i) {
      const categoryOffset = this.radiansPerCategory / 2,
        angle = this.radiansPerCategory * i + categoryOffset;
      return this.chartRadius * Math.cos(angle) + this.chartRadius;
    },
    getCategoryLabelYPos: function(category, i) {
      const categoryOffset = this.radiansPerCategory / 2,
        angle = this.radiansPerCategory * i + categoryOffset;
      return this.chartRadius * Math.sin(angle) + this.chartRadius;
    },
    getTechnologyXPos: function(technology, index) {
      // calculate the angle (radians)
      const categoryPosition = this.getCategoryPositionByString(technology.category),
        categoryOffset = generateRandomNumber(index) * this.radiansPerCategory,
        angle = this.radiansPerCategory * categoryPosition + categoryOffset;
      // calculate the radius
      const pixelsPerCategory = this.chartRadius / this.statuses.length,
        statusPosition = this.getStatusPositionByString(technology.status),
        sectorOffset = generateRandomNumber(index) * pixelsPerCategory,
        radius = this.chartRadius - statusPosition * pixelsPerCategory - sectorOffset;
      return radius * Math.cos(angle) + this.chartRadius;
    },
    getTechnologyYPos: function(technology, index) {
      // calculate the angle (radians)
      const categoryPosition = this.getCategoryPositionByString(technology.category),
        categoryOffset = generateRandomNumber(index) * this.radiansPerCategory,
        angle = this.radiansPerCategory * categoryPosition + categoryOffset;
      // calculate the radius
      const pixelsPerCategory = this.chartRadius / this.statuses.length,
        statusPosition = this.getStatusPositionByString(technology.status),
        sectorOffset = generateRandomNumber(index) * pixelsPerCategory,
        radius = this.chartRadius - statusPosition * pixelsPerCategory - sectorOffset;
      return radius * Math.sin(angle) + this.chartRadius;
    },
    getCategoryPositionByString: function(category) {
      return this.categories.findIndex(function(element) {
        return element === category;
      });
    },
    getStatusPositionByString: function(status) {
      return this.statuses.findIndex(function(element) {
        return element.name === status;
      });
    },
    // get status color defined inside technologies.js
    getStatusColor: function(status) {
      return this.statuses.find((item) => item.name === status).color;
    },
    // calculate label positioning for all statuses
    getStatusLabelYPos: function(status, i) {
      var interval = this.chartRadius / this.statuses.length;
      var offset = interval / 2 - this.labelHeight / 2;
      return interval * i + offset;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  max-width: 600px;
  margin-bottom: 50px;
}
svg {
  width: 100%;
  height: auto;
}
.status-circle {
  fill: #254961;
  stroke: $color-white;
  stroke-width: 2px;
  opacity: 0.5;
}
.category-radius {
  stroke: $color-white;
  stroke-width: 2px;
}
.category-label {
  fill: $color-mid-grey;
  text-anchor: middle;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
}
.status-label {
  &__rect {
    &[data-status="trial"] {
      fill: rgba(147, 210, 194, 0.5);
    }

    &[data-status="adopt"] {
      fill: rgba(148, 196, 125, 0.5);
    }

    &[data-status="assess"] {
      fill: rgba(251, 219, 132, 0.5);
    }

    &[data-status="hold"] {
      fill: rgba(239, 175, 169, 0.5);
    }
  }
  &__text {
    text-anchor: middle;
    font-size: 30px;
    fill: #444;
    font-weight: 600;
  }
}
.pointer {
  &__text {
    fill: $color-white;
    text-anchor: middle;
    font-size: 1em;
  }
}
.pointer:hover {
  cursor: pointer;

  .pointer__text {
    fill: $color-mid-grey;
  }
}
</style>
