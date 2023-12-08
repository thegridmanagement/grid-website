<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="section-padding header">
        <div class="header-logo">
            <nuxt-link to="/">
                <img src="~/assets/images/svg/grid-logo-dark.svg" id="desktop">
                <img src="~/assets/images/svg/grid-logo-dark.png" id="mobile">
            </nuxt-link>
        </div>
        <div>
            <img src="~/assets/images/svg/menu.svg" @click="showSidebar">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        showSidebar() {
            this.$emit("showSidebar")
        }
    }
}
</script>