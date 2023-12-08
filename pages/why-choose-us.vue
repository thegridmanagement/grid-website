<template>
    <div class="relative">
        <Header @showSidebar="showSidebar = true" />

        <section>
            <section class="section-padding grid-content">
                <div class="grid-content-col1">
                    <h1 class="primary">FOR <span class="secondary">TALENTS</span></h1>
                    <div class="title-label">Why Choose Us</div>
                </div>
                <div class="grid-content-col2">
                    <div class="divider"></div>
                </div>
                <div class="grid-content-col3">
                    <p>Representing talents across the creative economy.<br>
                        We connect creatives and brands to create a wide range of revenue and marketing opportunities,
                        including endorsements, appearances, philanthropy, memorabilia, licensing, digital, social and
                        equity partnerships.</p>
                </div>
            </section>
            <section class="grid-content-image section-padding">
                <img src="~/assets/images/why-choose-us.png" />
            </section>
            <section class="section-padding grid-content">
                <div class="grid-content-col1">
                </div>
                <div class="grid-content-col2">
                    <div class="divider"></div>
                </div>
                <div class="grid-content-col3">
                    <p>At TGA, our core values revolve around people - their passion, creativity and unwavering dedication.
                        We are deeply ingrained in our commitment to our talents, providing round-the-clock support. We
                        firmly believe that every individual’s talent is unique , rejecting the notion of one-size-fits-all
                        solution.</p>
                    <p>Our prowess and extensive experience extend to assisting our clients across all facets of their
                        professional lives and careers. Our expertise encompasses:</p>

                    <ul>
                        <li> A profound personal comprehension of the skills and aspirations of the talent we represent.
                        </li>
                        <li>A distinctive and tailored strategic planning approach that is continuously monitored for our
                            talent's benefit.</li>
                        <li>Comprehensive knowledge and hands-on experience in all dimensions of entertainment
                            contracts.</li>
                        <li>Exceptional negotiation skills that surpass expectations. An unparalleled network of
                            industry contacts.</li>
                        <li>In-depth familiarity with and valuable relationships within key media organizations and the
                            media
                            industry.</li>
                        <li> Specialized proficiencies across various domains of the entertainment and communications
                            sector,
                            spanning publishing, film, radio, television, e-media, production, public appearances,
                            syndication,
                            and commercial endeavors.</li>
                    </ul>

                    <p class="primary bold mt-4">Services</p>
                    <p class="services-list"><span><img src="~/assets/images/svg/grid-mini.svg"></span> Talent Management
                    </p>
                    <p class="services-list"><span><img src="~/assets/images/svg/grid-mini.svg"></span>Brand Management
                    </p>
                    <p class="services-list"><span><img src="~/assets/images/svg/grid-mini.svg"></span>Content Curation
                    </p>
                    <p class="services-list"><span><img src="~/assets/images/svg/grid-mini.svg"></span>Media & Public
                        Relations
                    </p>
                </div>
            </section>
        </section>


        <Footer />
        <Sidebar v-if="showSidebar" @close="showSidebar = false" />
    </div>
</template>
  
<script>
export default {
    name: 'WhoChooseUs',
    data() {
        return {
            showSidebar: false,
        }
    },
    methods: {

    }
}
</script>
  