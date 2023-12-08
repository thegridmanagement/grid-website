<template>
    <div class="relative">
        <Header @showSidebar="showSidebar = true" />

        <section>
            <section class="grid-content-image">
                <img src="~/assets/images/nodes.png" />
            </section>
            <section class="section-padding grid-content">
                <div class="grid-content-col1">
                    <h1 class="primary">NODES BY <span class="secondary">TGA</span></h1>
                </div>
                <div class="grid-content-col2">
                    <div class="divider"></div>
                </div>
                <div class="grid-content-col3">
                    <p>Nodes by TGA is the premier platform for talents that contains information and opportunity all in one
                        space to creatives, companies and collaborators including services that improve their brand.</p>
                    <p>Having a Node allows you to build, share and connect within the industry. Be the first to know when
                        Nodes is up!</p>
                    <p>Subscribe here.</p>
                </div>
            </section>
            <section></section>
        </section>


        <Footer />
        <Sidebar v-if="showSidebar" @close="showSidebar = false" />
    </div>
</template>
  
<script>
export default {
    name: 'Nodes',
    data() {
        return {
            showSidebar: false,
        }
    },
    methods: {

    }
}
</script>
  