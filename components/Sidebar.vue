<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <transition name="fade" appear>
        <div class="sidebar">
            <div class="sidebar-col1"></div>
            <div class="sidebar-col2 section-padding ">
                <div class="sidebar-col2-header">
                    <div class="sidebar-col2-header-logo">
                        <router-link to="/"><img src="~/assets/images/svg/grid-logo.svg"></router-link>
                    </div>
                    <div>
                        <img src="~/assets/images/svg/close.svg" @click="close">
                    </div>
                </div>
                <div class="sidebar-col2-body">
                    <h2 :class="[activeMenu === 1 ? 'active' : '']" @click="activeMenu = 1">For Talents</h2>
                    <div v-if="activeMenu === 1">
                        <p><router-link to="/grid-agency">The Grid Agency</router-link></p>
                        <p><router-link to="/why-choose-us">Why Choose Us</router-link></p>
                        <p><router-link to="/our-clients">Our Clients</router-link></p>
                        <p><router-link to="/join-us">Join Us</router-link></p>
                    </div>
                    <h2 :class="[activeMenu === 2 ? 'active' : '']" @click="activeMenu = 2">For Brands</h2>
                    <div v-if="activeMenu === 2">
                        <p><router-link to="/brands">About</router-link></p>
                        <p><router-link to="/services-and-capabilities">Services & Capabilities</router-link></p>
                    </div>
                    <!-- <h2><router-link to="/nodes">Nodes by TGA</router-link></h2> -->
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
</template>

<script>
export default {
    data() {
        return {
            activeMenu: 0
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>