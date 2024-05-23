<template>
    <div class="relative">
        <Header @showSidebar="showSidebar = true" />

        <section>
            <section class="section-padding align-center">
                <a href="https://us06web.zoom.us/webinar/register/WN_p7dUileWT-GWmS1YH3P0JA" target="blank" title="Google Form">
                    <div class=" btn-rounded glow" >
                        <span style="padding-right: 10px;"> Register for our upcoming workshops here </span>
                        <span>
                            <img src="~/assets/images/icons/arrow-right.png"  width= "40px" />
                        </span>
                    </div>
                </a>
            </section>
            <div  class="ySpace"></div>
            <div  class="ySpace"></div>

            <section class="section-padding grid-content">
                <div class="grid-content-col3">
                    <h1 class="primary">About <span class="secondary">Us</span></h1>
                    <p>
                        Grid & Nodes Africa stands as a non-profit organization, initiated by The Grid Management, with a dedicated commitment to actively championing the creative industry. We strive to provide a broad spectrum of support, including diversity initiatives, educational opportunities, leadership programs, and more, tailored to benefit ALL creatives, especially women. Our primary goal is to aid creative individuals in their respective disciplines, nurturing growth and development within the creative community.
                    </p>
                </div>
                <div class="grid-content-col2"></div>
                <div class="grid-content-col3">
                    <section class="grid-content-image">
                        <!-- <img src="~/assets/images/gAndN-one.png" height="420px" /> -->
                        <img src="~/assets/images/gAndN-one.png"  />
                    </section>
                </div>
            </section>
            <section class="section-padding grid-content">
                <div class="grid-content-col12">
                    <p>
                        Our portfolio comprises a varied array of programs, meticulously crafted in collaboration with key persons and organisations. These initiatives are designed to inspire and encourage creatives at every level and across diverse disciplines. This strategic partnership approach aligns seamlessly with our mission to extend support to our creative industry, and celebrate the vibrancy of the global creative community. Grid & Nodes Africa is a platform where industry professionals can give back by lending their voices and pass knowledge to budding creatives.
                    </p>
                </div>
            </section>
            <div class="ySpace"></div>
            <section class="section-padding grid-content">
                <div class="grid-content-col3">
                    <section class="grid-content-image">
                        <img src="~/assets/images/gAndN-two.png" />
                        <!-- <img src="~/assets/images/gAndN-two.png" height="420px" /> -->
                    </section>
                </div>
                <div class="grid-content-col2"></div>
                <div class="grid-content-col3">
                    <h1 class="primary">Our Mission <span class="secondary">Statement</span></h1>
                    <p>
                        At G&N, our mission is to cultivate a nurturing environment where young talents in the creative industry can flourish. Through free workshops and mentorship programs, we aim to unlock the full potential of each individual, fostering a community that values collaboration, innovation, and positive impact.    
                    </p>
                </div>
            </section>

            <div class="horizontal-divider"></div>

            <div  class="ySpace"></div>

            <section class="section-padding grid-content">
                <div class="grid-content-col12">
                    <h1 class="center">
                        Our Key Initiatives
                    </h1>
                    <div  class="ySpace"></div>
                </div>
            </section>
            <section class="section-padding grid-content">
                <div class="grid-content-col3 key_initiatives">
                    <div>
                        <div class="align-center">
                            <img src="~/assets/images/icons/male-teacher.png" />
                        </div>
                        <div class="content">
                            <div> Free Creative </div>
                            <div>  Workshops </div>
                        </div>
                    </div>
                </div>
                <div class="grid-content-col2"></div>
                  <div class="grid-content-col3 key_initiatives">
                    <div>
                        <div class="align-center">
                            <img src="~/assets/images/icons/employee-training.png" />
                        </div>
                        <div class="content">
                            <div> Mentorship </div>
                            <div>  Programs </div>
                        </div>
                    </div>
                </div>
                <div class="grid-content-col2"></div>
                <div class="grid-content-col2"></div>
                  <div class="grid-content-col3 key_initiatives">
                    <div>
                        <div class="align-center">
                            <img src="~/assets/images/icons/game-icons_team-idea.png" />
                        </div>
                        <div class="content">
                            <div> Collaborative </div>
                            <div>  Projects </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="desktop" class="ySpace" ></div>
            <div id="desktop" class="ySpace" ></div>
            <section class="section-padding grid-content">
                <div class="grid-content-col2"></div>
                <div class="grid-content-col3 key_initiatives">
                    <div>
                        <div class="align-center">
                            <img src="~/assets/images/icons/agreement.png" />
                        </div>
                        <div class="content">
                            <div> Partnership Programs with </div>
                            <div> Forward-Thinking Organisations </div>
                        </div>
                    </div>
                </div>
                <div class="grid-content-col2"></div>
                <div class="grid-content-col3 key_initiatives">
                    <div>
                        <div class="align-center">
                            <img src="~/assets/images/icons/business-continuity.png" />
                        </div>
                        <div class="content">
                            <div> Global Exchange </div>
                            <div> Programs </div>
                        </div>
                    </div>
                </div>
                <div class="grid-content-col2"></div>
            </section>
            <div  class="ySpace"></div>
            <div  class="ySpace"></div>
            <section class="section-padding align-center">
                <router-link to="/grid-and-nodes-workshops">
                    <div class=" btn-rounded">
                        <span style="padding-right: 10px;"> View more details about the workshops here </span>
                        <span>
                            <img src="~/assets/images/icons/arrow-right.png"  width= "40px" />
                        </span>
                    </div>
                </router-link>
            </section>
           
        </section>


        <Footer />
        <Sidebar v-if="showSidebar" @close="showSidebar = false" />
    </div>
</template>
  
<script>
export default {
    name: 'GridsAndNodes',
    data() {
        return {
            showSidebar: false,
        }
    },
    methods: {

    }
}
</script>
  