<template>
    <div class="relative">
        <Header @showSidebar="showSidebar = true" />

        <section>
            <section class="grid-content-image section-padding">
                <img src="~/assets/images/about.png" />
            </section>
            <section class="section-padding grid-content">
                <div class="grid-content-col1">
                    <h1 class="primary">ABOUT</h1>
                </div>
                <div class="grid-content-col2">
                    <div class="divider"></div>
                </div>
                <div class="grid-content-col3">
                    <p>The Grid Management is a creative talent solutions company providing representation,
                        opportunities and solutions to the best talents and brands in Africa.</p>
                    <p>Through our two flagships, Nodes and The Grid Agency, we avail global opportunities to creatives
                        primarily in the entertainment and film space.</p>
                    <p>We offer a wide range of services including branding, public relations, content marketing and event
                        management.</p>
                    <p>Our team consists of experienced professionals with a proven track record of success in the industry.
                        We are dedicated to delivering high quality services that meet the needs and goals of our clients.
                    </p>

                    <div class="grid-content-row">
                        <div>
                            <img src="~/assets/images/icons/core-value.png" />
                            <h4 class="primary">Our Core Values</h4>
                            <p>Transparency</p>
                            <p>Consistency</p>
                            <p>Reliability</p>
                            <p>Quality</p>
                            <p>Integrity</p>
                        </div>
                        <div>
                            <img src="~/assets/images/icons/vision.png" />
                            <h4 class="primary">Our Vision</h4>
                            <p id="desktop">To be Africa’s top nexus for creative talents and opportunities.</p>
                            <p id="mobile">To be Africa’s top nexus for creative talents<br> and opportunities.</p>
                        </div>
                        <div>
                            <img src="~/assets/images/icons/mission.png" />
                            <h4 class="primary">Our Mission</h4>
                            <p>Helping talents achieve success one opportunity at a time.</p>
                        </div>
                    </div>
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
    name: 'About',
    data() {
        return {
            showSidebar: false,
        }
    },
    methods: {

    }
}
</script>
  