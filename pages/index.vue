<template>
  <div class="relative landing">
    <div class="background-video">
      <video preload="auto" playsinline="true" loop autoplay muted>
        <source src="https://res.cloudinary.com/kingleo/video/upload/v1693513794/grid-bg_d7jcoa.mp4" type="video/mp4">
      </video>
    </div>
    <div id="desktop">
      <div class="landing-fullscreen-header section-padding">
        <img src="~/assets/images/svg/grid-logo.svg">
      </div>
      <transition name="fade">
        <div v-if="fullScreen" class="landing-fullscreen section-padding">
          <div class="landing-fullscreen-text">
            <h1 class="">
              <span>Africa's</span>
              <span>nexus</span>
              <span>for</span>
              <span>creative</span>
              <span class="secondary">talents</span>
              <span>and</span>
              <span class="secondary">opportunities</span>
            </h1>
          </div>
        </div>
      </transition>
      <transition name="fade" mode="out-in">
        <div v-if="!fullScreen" class="landing-flex section-padding">
          <div class="landing-col1">
          </div>
          <div class="landing-col2">
            <div class="landing-col2-body">
              <h2 :class="[activeMenu === 1 ? 'active' : '']" @click="setActiveMenu(1)">
                For Talents</h2>
              <h2 :class="[activeMenu === 2 ? 'active' : '']" @click="setActiveMenu(2)">
                For Brands</h2>
              <h2><router-link to="/nodes">Nodes by TGA</router-link></h2>
              <h2><a href="https://www.gnafrica.com" target="_blank">Grid & Nodes Africa</a></h2>
              <transition name="slide-fade">
                <div class="mt-5">
                  <p><router-link to="/about">About</router-link></p>
                  <p><router-link to="/network">Network</router-link></p>
                  <p><router-link to="/press">Press</router-link></p>
                  <p><router-link to="/contact-us">Contact</router-link></p>
                </div>
              </transition>
            </div>
          </div>
          <div class="landing-col3">
            <transition name="fade">
              <div v-if="activeMenu === 1">
                <p><router-link to="/grid-agency">The Grid Agency</router-link></p>
                <p><router-link to="/why-choose-us">Why Choose Us</router-link></p>
                <p><router-link to="/our-clients">Our Clients</router-link></p>
                <p><router-link to="/join-us">Join Us</router-link></p>
              </div>
              <div v-if="activeMenu === 2">
                <p><router-link to="/brands">About</router-link></p>
                <p><router-link to="/services-and-capabilities">Services & Capabilities</router-link></p>
              </div>
            </transition>
          </div>
        </div>
      </transition>
    </div>
    <div id="mobile">
      <div class="section-padding landing-fullscreen-header">
        <img src="~/assets/images/svg/grid-logo.png">
      </div>
      <transition name="fade">
        <div v-if="fullScreen" class="landing-fullscreen">
          <div class="landing-fullscreen-text section-padding">
            <h1 class="">
              <span>Africa's</span>
              <span>nexus</span>
              <span>for</span>
              <span>creative</span>
              <span class="secondary">talents</span>
              <span>and</span>
              <span class="secondary">opportunities</span>
            </h1>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="!fullScreen" class="landing-flex section-padding">
          <div class="landing-col2">
            <div class="landing-col2-body">
              <h2 :class="[activeMenu === 1 ? 'active' : '']" @click="setActiveMenu(1)">For Talents</h2>
              <div v-if="activeMenu === 1">
                <p><router-link to="/grid-agency">The Grid Agency</router-link></p>
                <p><router-link to="/why-choose-us">Why Choose Us</router-link></p>
                <p><router-link to="/our-clients">Our Clients</router-link></p>
                <p><router-link to="/join-us">Join Us</router-link></p>
              </div>
              <h2 :class="[activeMenu === 2 ? 'active' : '']" @click="setActiveMenu(2)">For Brands</h2>
              <div v-if="activeMenu === 2">
                <p><router-link to="/brands">About</router-link></p>
                <p><router-link to="/services-and-capabilities">Services & Capabilities</router-link></p>
              </div>
              <h2><router-link to="/nodes">Nodes by TGA</router-link></h2>

              <h2><a href="https://www.gnafrica.com" target="_blank">Grid & Nodes Africa</a></h2>

              <div class="mt-5">
                <p><router-link to="/about">About</router-link></p>
                <p><router-link to="/network">Network</router-link></p>
                <p><router-link to="/press">Press</router-link></p>
                <p><router-link to="/contact-us">Contact</router-link></p>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      activeMenu: 0,
      fullScreen: true,
      showVideoBg: true,
    }
  },
  mounted() {
    if (this.$route.query.full === 'no') {
      // this.fullScreen = false
    } else {
      setTimeout(() => {
        this.fullScreen = false;
        this.showVideoBg = false;
      }, 3500)
    }
  },
  methods: {
    setActiveMenu(menu) {
      this.showVideoBg = true
      this.activeMenu = menu
    }
  }
}
</script>

