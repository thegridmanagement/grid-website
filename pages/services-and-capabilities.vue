<template>
    <div class="relative">
        <Header @showSidebar="showSidebar = true" />

        <section>
            <section class="section-padding grid-content">
                <div class="grid-content-col1">
                    <h1 class="primary">FOR <span class="secondary">BRANDS</span></h1>
                    <div class="title-label">Services & Capabilities</div>
                </div>
                <div class="grid-content-col2">
                    <div class="divider"></div>
                </div>
                <div class="grid-content-col3">
                    <p>We understand the creative landscape and have created specific products to help build and sustain our
                        talents and brands.</p>
                </div>
            </section>
            <section class="grid-content-image">
                <img src="~/assets/images/services-and-capabilities.png" />
            </section>
            <section class="section-padding">
                <div class="grid-content-full-row first-row">
                    <div>
                        <img src="~/assets/images/icons/brand-development.png" />
                        <h4 class="primary">Brand Development</h4>
                        <p>We assist in developing a strong brand identity. This includes creating brand guidelines, craft
                            compelling taglines and refining their unique value proposition.</p>
                    </div>
                    <div>
                        <img src="~/assets/images/icons/content-creation.png" />
                        <h4 class="primary">Content Creation</h4>
                        <p>Create compelling visuals to effectively communicate values, products, services and industry
                            expertise through captivating any informative content.</p>
                    </div>
                    <div>
                        <img src="~/assets/images/icons/content-sales.png" />
                        <h4 class="primary">Content Sales</h4>
                        <p>We source and sell intellectual property to be created into series and films across the digital
                            ecosystem by working simultaneously with our Griots and existing platforms.</p>
                    </div>
                </div>
                <hr id="desktop" class="hr">
                <div class="grid-content-full-row second-row">
                    <div>
                        <img src="~/assets/images/icons/influencer-marketing.png" />
                        <h4 class="primary">Influencer Marketing</h4>
                        <p>Influencer marketing leverages the credibility of our content creators to promote your brand
                            products and services. This is an important marketing tactic, as most people pay more attention
                            to recommendations from people they trust than to ads.</p>
                        <p>When an influencer recommends you, this allows you to indirectly gain the
                            trust of that influencer’s followers resulting in more leads and sales.
                            Grow your brand with the help of our influencers and marketing experts.</p>
                    </div>
                    <div>
                        <img src="~/assets/images/icons/content-creation.png" />
                        <h4 class="primary">Media Engagement & Press Rounds</h4>
                        <p>Assist in building relationships with relevant media outlets to generate positive media coverage.
                            Help craft press releases, features and facilitate
                            interviews to increase brand visibility and establish our talents as taught leaders in the
                            industry. </p>
                    </div>
                    <div>
                        <img src="~/assets/images/icons/content-sales.png" />
                        <h4 class="primary">OTHER SERVICES INCLUDE</h4>
                        <p>Brand Partnerships</p>
                        <p>Event Management</p>
                        <p>Digital Marketing</p>
                        <p>Health Insurance</p>
                        <p>Advisory</p>
                    </div>
                </div>

                <div id="desktop" class="contact-card">
                    <div class="contact-card-inner">
                        <h3 class="primary">CONTACT US</h3>
                        <div class="d-flex align-items-center">
                            <div><a href="mailto:brands@thegridmanagement.com">brands@thegridmanagement.com</a></div>
                            <div class="span-divider"></div>
                            <div><a href="https://thegridmanagement.com">thegridmanagement.com</a></div>
                        </div>
                    </div>
                </div>
                <div id="mobile" class="contact-card">
                    <div class="contact-card-inner">
                        <h3 class="primary">CONTACT US</h3>
                        <div class="">
                            <div><a href="mailto:brands@thegridmanagement.com">brands@thegridmanagement.com</a></div>
                            <div><a href="https://thegridmanagement.com">thegridmanagement.com</a></div>
                        </div>
                    </div>
                </div>
            </section>
        </section>


        <Footer />
        <Sidebar v-if="showSidebar" @close="showSidebar = false" />
    </div>
</template>
  
<script>
export default {
    name: 'ServicesAndCapabilities',
    data() {
        return {
            showSidebar: false,
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.hr {
    border-top: 2px solid #F5F8F8 !important;
}
</style>
  