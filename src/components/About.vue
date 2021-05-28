<template>
  <div class="About">
    <h1>About this Project</h1>
    <p>
      This tool provides information on current tools and technologies that are or were used at BörseGo AG. The system
      behind the Tech-Radar is based on the system developed by
      <a href="https://opensource.zalando.com/tech-radar/" target="blank">Zalando</a>.
    </p>
    <div>
      <h1>How does it work?</h1>
      <ul>
        <li v-for="text in texts" :key="text.name">
          <b>{{ text.status }} -</b>
          {{ text.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: [
        {
          status: "Adopt",
          description:
            "Technologies we have high confidence in to serve our purpose, also in large scale. Technologies with a usage culture in our production environment, low risk and recommended to be widely used.",
        },
        {
          status: "Trial",
          description:
            "Technologies that we have seen work with success in project work to solve a real problem; first serious usage experience that confirm benefits and can uncover limitations. TRIAL technologies are slightly more risky; some engineers in our organization walked this path and will share knowledge and experiences.",
        },

        {
          status: "Assess",
          description:
            "Technologies that are promising and have clear potential value-add for us; technologies worth to invest some research and prototyping efforts in to see if it has impact. ASSESS technologies have higher risks; they are often brand new and highly unproven in our organisation. You will find some engineers that have knowledge in the technology and promote it, you may even find teams that have started a prototyping effort.",
        },
        {
          status: "Hold",
          description:
            "Technologies not recommended to be used for new projects. Technologies that we think are not (yet) worth to (further) invest in. HOLD technologies should not be used for new projects, but usually can be continued for existing projects.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.About {
  padding: 20px;
  ul li {
    margin-bottom: 20px;
  }
}
</style>
