<template>
    <div class="relative">
        <Header @showSidebar="showSidebar = true" />

        <section>
            <section class="section-padding grid-content">
                <div class="grid-content-col1">
                    <h1 class="primary">PRESS</h1>
                </div>
                <div class="grid-content-col2">
                    <div class="divider"></div>
                </div>
                <div class="grid-content-col3">
                    <p>Stay up to date with what we are creating! Get the scoop before anyone else does!</p>
                </div>
            </section>
            <section class="grid-content-image">
                <img src="~/assets/video/coming-soon.gif" />
            </section>

        </section>

        <Footer />
        <Sidebar v-if="showSidebar" @close="showSidebar = false" />
    </div>
</template>
  
<script>
export default {
    name: 'Press',
    data() {
        return {
            showSidebar: false,
        }
    },
    methods: {

    }
}
</script>
  