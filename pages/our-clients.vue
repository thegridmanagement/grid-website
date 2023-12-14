<template>
    <div class="relative">
        <Header @showSidebar="showSidebar = true" />

        <section class="section-padding ">
            <section class="grid-content">
                <div class="grid-content-col1">
                    <h1 class="primary">FOR <span class="secondary">TALENTS</span></h1>
                    <div class="title-label">Our Clients</div>
                </div>
                <div class="grid-content-col2">
                    <div class="divider"></div>
                </div>
                <div class="grid-content-col3">
                    <p>We proudly champion a selection of exceptional creatives spanning diverse art forms. Our approach
                        features non-exclusive packages, allowing us to broaden our reach and connect with a broader
                        demographic.</p>
                    <p>This flexibility empowers us to extend our services to those who are seeking innovative solutions and
                        support in various creative endeavours.</p>
                    <p>
                        To work with any of our talents, send us an email at <a href="mailto:talent@thegridmanagement.com" class="primary">talent@thegridmanagement.com</a></p>
                </div>
            </section>
            <div id="desktop">
                <section class="clients">
                    <div class="clients-card" @mouseenter="showText1 = true" @mouseleave="showText1 = false">
                        <img src="~/assets/images/clients/Uche.png" />
                        <div v-if="showText1" class="clients-card-text">
                            <p>Uche Obunse</p>
                            <p>Actor</p>
                        </div>
                    </div>
                    <div class="clients-card" @mouseenter="showText2 = true" @mouseleave="showText2 = false">
                        <img src="~/assets/images/clients/Seyi.png" />
                        <div v-if="showText2" class="clients-card-text">
                            <p>Seyi Olusore</p>
                            <p>Sports and Fitness Expert</p>
                        </div>
                    </div>
                    <div class="clients-card" @mouseenter="showText3 = true" @mouseleave="showText3 = false">
                        <img src="~/assets/images/clients/Jessica.png" />
                        <div v-if="showText3" class="clients-card-text">
                            <p>Jessica Obasi</p>
                            <p>Actor, Influencer, Content Creator</p>
                        </div>
                    </div>
                    <div class="clients-card" @mouseenter="showText4 = true" @mouseleave="showText4 = false">
                        <img src="~/assets/images/clients/Adeoluwa.png" />
                        <div v-if="showText4" class="clients-card-text">
                            <p>Adeoluwa Owu</p>
                            <p>Director, Cinematographer</p>
                        </div>
                    </div>
                    <div class="clients-card" @mouseenter="showText5 = true" @mouseleave="showText5 = false">
                        <img src="~/assets/images/clients/Emmanuel.png" />
                        <div v-if="showText5" class="clients-card-text">
                            <p>Emmanuel Oyeleke</p>
                            <p>Celebrity Photographer, Visual Artist, Canon Ambassador</p>
                        </div>
                    </div>
                    <div class="clients-card" @mouseenter="showText6 = true" @mouseleave="showText6 = false">
                        <img src="~/assets/images/clients/NonsoAfolabi.png" />
                        <div v-if="showText6" class="clients-card-text">
                            <p>Nonso Afolabi</p>
                            <p>Actor, Producer & Entrepreneur</p>
                        </div>
                    </div>
                    <div class="clients-card" @mouseenter="showText7 = true" @mouseleave="showText7 = false">
                        <img src="~/assets/images/clients/Efe.png" />
                        <div v-if="showText7" class="clients-card-text">
                            <p>Efa Iwara</p>
                            <p>Actor, Influencer</p>
                        </div>
                    </div>
                    <div class="clients-card" @mouseenter="showText9 = true" @mouseleave="showText9 = false">
                        <img src="~/assets/images/clients/Bimbo.png" />
                        <div v-if="showText9" class="clients-card-text">
                            <p>Bimbo Ademoye</p>
                            <p>Actor, Influencer, Host, Content Creator</p>
                        </div>
                    </div>
                    <div class="clients-card" @mouseenter="showText10 = true" @mouseleave="showText10 = false">
                        <img src="~/assets/images/clients/Isaac.png" />
                        <div v-if="showText10" class="clients-card-text">
                            <p>Isaac Emokpae</p>
                            <p>Visual Artist</p>
                        </div>
                    </div>

                     <!-- New Profiles -->
                     <div class="clients-card" @mouseenter="showText11 = true" @mouseleave="showText11 = false">
                        <img src="~/assets/images/clients/TBoss.png" />
                        <div v-if="showText11" class="clients-card-text">
                            <p>TBoss Idowu</p>
                            <p>Actor, Influencer, Host</p>
                        </div>
                    </div>
                    <div class="clients-card" @mouseenter="showText12 = true" @mouseleave="showText12 = false">
                        <img src="~/assets/images/clients/Anozie-Young.png" />
                        <div v-if="showText12" class="clients-card-text">
                            <p>Gloria Anozie-Young</p>
                            <p>Actor</p>
                        </div>
                    </div>
                    <div class="clients-card" @mouseenter="showText103 = true" @mouseleave="showText103 = false">
                        <img src="~/assets/images/clients/Ekpenyong.png" />
                        <div v-if="showText13" class="clients-card-text">
                            <p>Keppy Ekpenyong</p>
                            <p>Actor</p>
                        </div>
                    </div>
                    <!-- New Profiles -->

                </section>
            </div>
            <div id="mobile">
                <section class="clients">
                    <div class="clients-card">
                        <img src="~/assets/images/clients/Uche.png" />
                        <div class="clients-card-text">
                            <p>Uche Obunse</p>
                            <p>Actor</p>
                        </div>
                    </div>
                    <div class="clients-card">
                        <img src="~/assets/images/clients/Seyi.png" />
                        <div class="clients-card-text">
                            <p>Seyi Olusore</p>
                            <p>Sports and Fitness Expert</p>
                        </div>
                    </div>
                    <div class="clients-card">
                        <img src="~/assets/images/clients/Jessica.png" />
                        <div class="clients-card-text">
                            <p>Jessica Obasi</p>
                            <p>Actor, Influencer, Content Creator</p>
                        </div>
                    </div>
                    <div class="clients-card">
                        <img src="~/assets/images/clients/Adeoluwa.png" />
                        <div class="clients-card-text">
                            <p>Adeoluwa Owu</p>
                            <p>Director, Cinematographer</p>
                        </div>
                    </div>
                    <div class="clients-card">
                        <img src="~/assets/images/clients/Emmanuel.png" />
                        <div class="clients-card-text">
                            <p>Emmanuel Oyeleke</p>
                            <p>Celebrity Photographer, Visual Artist, Canon Ambassador</p>
                        </div>
                    </div>
                    <div class="clients-card">
                        <img src="~/assets/images/clients/NonsoAfolabi.png" />
                        <div class="clients-card-text">
                            <p>Nonso Afolabi</p>
                            <p>Actor, Producer & Entrepreneur</p>
                        </div>
                    </div>
                    <div class="clients-card">
                        <img src="~/assets/images/clients/Efe.png" />
                        <div class="clients-card-text">
                            <p>Efa Iwara</p>
                            <p>Actor, Influencer</p>
                        </div>
                    </div>
                    <div class="clients-card">
                        <img src="~/assets/images/clients/Bimbo.png" />
                        <div class="clients-card-text">
                            <p>Bimbo Ademoye</p>
                            <p>Actor, Influencer, Host, Content Creator</p>
                        </div>
                    </div>
                    <div class="clients-card">
                        <img src="~/assets/images/clients/Isaac.png" />
                        <div class="clients-card-text">
                            <p>Isaac Emokpae</p>
                            <p>Visual Artist</p>
                        </div>
                    </div>

                    <!-- New Profiles -->
                    <div class="clients-card">
                        <img src="~/assets/images/clients/TBoss.png" />
                        <div class="clients-card-text">
                            <p>TBoss Idowu</p>
                            <p>Actor, Influencer, Host</p>
                        </div>
                    </div>
                    <div class="clients-card">
                        <img src="~/assets/images/clients/Anozie-Young.png" />
                        <div class="clients-card-text">
                            <p>Gloria Anozie-Young</p>
                            <p>Actor</p>
                        </div>
                    </div>
                    <div class="clients-card">
                        <img src="~/assets/images/clients/Ekpenyong.png" />
                        <div class="clients-card-text">
                            <p>Keppy Ekpenyong</p>
                            <p>Actor</p>
                        </div>
                    </div>
                    <!-- New Profiles -->

                </section>
            </div>
        </section>

        <Footer />
        <Sidebar v-if="showSidebar" @close="showSidebar = false" />
    </div>
</template>
  
<script>
export default {
    name: 'OurClients',
    data() {
        return {
            showSidebar: false,
            showText1: false,
            showText2: false,
            showText3: false,
            showText4: false,
            showText5: false,
            showText6: false,
            showText7: false,
            showText8: false,
            showText9: false,
            showText10: false,
            showText11: false,
            showText12: false,
            showText13: false,
        }
    },
    methods: {

    }
}
</script>
  