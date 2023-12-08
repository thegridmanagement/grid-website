<template>
    <div class="relative">
        <Header @showSidebar="showSidebar = true" />

        <section>
            <section class="section-padding grid-content">
                <div class="grid-content-col1">
                    <h1 class="primary">FOR <span class="secondary">BRANDS</span></h1>
                    <div class="title-label">About</div>
                </div>
                <div class="grid-content-col2">
                    <div class="divider"></div>
                </div>
                <div class="grid-content-col3">
                    <p>We offer customised services to allow you to focus on the core of your business. We drive tangible
                        business results for brands through creative, innovative influencer marketing campaigns and social
                        media strategies.</p>
                    <p>Bold thinking, fearless creative, and high performance marketing will fuel your business growth and
                        help you realise your full potential.</p>
                </div>
            </section>
            <section class="grid-content-image">
                <img src="~/assets/images/about-brand.png" />
            </section>
            <section class="section-padding grid-content">
                <div class="grid-content-col1">
                </div>
                <div class="grid-content-col2">
                    <div class="divider"></div>
                </div>
                <div class="grid-content-col3">
                    <p>We see influencer marketing as a performance channel and we work with our clients to devise
                        strategies that will meet their objectives, whether it's to drive brand awareness and consideration
                        or conversions and revenue.</p>
                    <p>We develop creative end to end campaigns that drive authentic brand conversation through influencers
                        whilst integrating targeted paid media to reach the right audience and deliver industry leading
                        results for our clients.</p>
                    <p>Our professional talent options will add depth and sophistication to your experience. A variety of
                        planners, entertainers to A-list celebrities are available to choose from to enhance the value of
                        your event or program. The creative representatives at TGA will make your job easy when it comes to
                        deciding on a quality talent option.</p>
                    <p>In the realm of your production, we take charge of your casting needs, sparing you the complexities
                        of selecting the ideal cast, sourcing for talent and managing negotiations.
                        Allow us to shoulder these responsibilities and more on your behalf!</p>
                </div>
            </section>
        </section>


        <Footer />
        <Sidebar v-if="showSidebar" @close="showSidebar = false" />
    </div>
</template>
  
<script>
export default {
    name: 'AboutUs',
    data() {
        return {
            showSidebar: false,
        }
    },
    methods: {

    }
}
</script>
  