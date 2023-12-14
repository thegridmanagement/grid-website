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
                    <p> Introducing Nodes by TGA – the ultimate solution platform for talents, seamlessly integrating information and opportunities for creatives, companies, and collaborators. </p>
                    <p> Nodes offer services that enhance both brand and well-being, providing a space to build, share, and connect within the industry. </p>
                    <p> Stay tuned for the launch of Nodes and be among the first to experience its unique features!</p>
                
                    <br />
                    <h2> Exciting news: </h2>
                    <p> Our inaugural product, GridTools, is now live! Developed by The Grid Management, GridTools revolutionises the industry by extending benefits typically reserved for white-collar workers to talents and professionals. </p>
                    <p>  Our commitment is to provide indispensable resources, giving them a competitive edge in personal branding and strategic advancement.  </p>
                    
                    <p> Explore the extensive suite of benefits offered by GridTools, covering essential services such as health care, legal, finances, branding, career advancement, and more. </p>
                    <p>  Visit our official site at <a href="https://www.thegridtools.com" class="secondary" target="_blank" title="https://www.thegridtools.com"> www.thegridtools.com </a> or click <a href="https://www.thegridtools.com/plans/" class="secondary" target="_blank" title="https://www.thegridtools.com/"> here</a> to access the available plans and join the vibrant Grid community!  </p>
                    

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
  