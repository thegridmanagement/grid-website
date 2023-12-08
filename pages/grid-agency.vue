<template>
    <div class="relative">
        <Header @showSidebar="showSidebar = true" />

        <section>
            <section class="section-padding grid-content">
                <div class="grid-content-col1">
                    <h1 class="primary">FOR <span class="secondary">TALENTS</span></h1>
                    <div class="title-label">The Grid Agency</div>
                </div>
                <div class="grid-content-col2">
                    <div class="divider"></div>
                </div>
                <div class="grid-content-col3">
                    <p>The Grid Agency is positioned as the core of talent, content and brands. We create boundless
                        opportunities for creatives in the entertainment and film space.</p>
                    <p>Across film, television, music, and beyond, we represent many of Africa’s leading actors, directors,
                        writers, producers, fitness experts, Influencers, comedians and event hosts.</p>
                </div>
            </section>
            <section class="grid-content-image section-padding">
                <img src="~/assets/images/grid-agency.png" />
            </section>
            <section class="section-padding grid-content">
                <div class="grid-content-col1">
                </div>
                <div class="grid-content-col2">
                    <div class="divider"></div>
                </div>
                <div class="grid-content-col3">
                    <p>In service of them, we are committed to revolutionising the creative scene by being the most
                        ingenious service company in Africa.</p>
                    <p>Alongside our established clients we maintain a unique perspective on what’s hip, cool, and current
                        in the ever-changing world of entertainment. We guide careers with a special hands-on approach
                        helping our clients achieve their dreams.</p>
                </div>
            </section>
        </section>

        <Footer />
        <Sidebar v-if="showSidebar" @close="showSidebar = false" />
    </div>
</template>
  
<script>
export default {
    name: 'GridAgency',
    data() {
        return {
            showSidebar: false,
        }
    },
    methods: {

    }
}
</script>
  