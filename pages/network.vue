<template>
    <div class="relative">
        <Header @showSidebar="showSidebar = true" />

        <section>
            <section class="section-padding grid-content">
                <div class="grid-content-col1">
                    <h1 class="primary">BRANDS</h1>
                </div>
                <div class="grid-content-col2">
                    <div class="divider"></div>
                </div>
                <div class="grid-content-col3">
                    <p>We surround ourselves with thought leaders and innovative companies who we have worked with and help
                        us create unique opportunities for our clients.</p>

                </div>
            </section>
            <section class="section-padding network-cards">
                <div class="green" @click="openModal(1)">
                    <img src="~/assets/images/brands/papaya.svg" />
                    <p>View more <span><img src="~/assets/images/svg/arrow-right-white.svg" /></span></p>
                </div>
                <div @click="openModal(2)">
                    <img src="~/assets/images/brands/herconomy.svg" />
                    <p>View more <span><img src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
                </div>
                <div class="green" @click="openModal(3)">
                    <img src="~/assets/images/brands/fsdh.svg" />
                    <p>View more <span><img src="~/assets/images/svg/arrow-right-white.svg" /></span></p>
                </div>
                <div @click="openModal(4)">
                    <img src="~/assets/images/brands/diamonds.svg" />
                    <p>View more <span><img src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
                </div>
                <div  @click="openModal(5)">
                    <img src="~/assets/images/brands/nem.svg" width="70px" height="86px" />
                    <p>View more <span><img src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
                </div>
                <!-- <div class="green" @click="openModal(6)">
                    <img src="~/assets/images/brands/filmone.svg" />
                    <p>View more <span><img src="~/assets/images/svg/arrow-right-white.svg" /></span></p>
                </div> -->
                <!-- <div @click="openModal(7)">
                    <img src="~/assets/images/brands/quantum.svg" />
                    <p>View more <span><img src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
                </div> -->
                <div class="green" @click="openModal(8)">
                    <img src="~/assets/images/brands/british-council.svg" />
                    <p>View more <span><img src="~/assets/images/svg/arrow-right-white.svg" /></span></p>
                </div>
                <div @click="openModal(10)">
                    <img src="~/assets/images/brands/canon.svg" />
                    <p>View more <span><img src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
                </div>
                <div class="green" @click="openModal(9)">
                    <img src="~/assets/images/brands/tydem.svg" />
                    <p>View more <span><img src="~/assets/images/svg/arrow-right-white.svg" /></span></p>
                </div>
                <!-- <div class="green" @click="openModal(11)">
                    <img src="~/assets/images/brands/gac.svg" />
                    <p>View more <span><img src="~/assets/images/svg/arrow-right-white.svg" /></span></p>
                </div> -->
                <div class="green" @click="openModal(12)">
                    <img src="~/assets/images/brands/degzy.svg" />
                    <p>View more <span><img src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
                </div>
                <div @click="openModal(13)">
                    <img src="~/assets/images/brands/redbox.svg" />
                    <p>View more <span><img src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
                </div>
                <div @click="openModal(14)">
                    <img src="~/assets/images/brands/unicaf.png" />
                    <p>View more <span><img src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
                </div>
            </section>
        </section>


        <Footer />
        <Sidebar v-if="showSidebar" @close="showSidebar = false" />
        <Modal v-if="showModal" :page-number="modalPage" @close="showModal = false" />
    </div>
</template>
  
<script>
import Modal from '~/components/Modal.vue'
export default {
    name: 'Network',
    components: { Modal },
    data() {
        return {
            showSidebar: false,
            showModal: false,
            modalPage: 0,
        }
    },
    methods: {
        openModal(modalPage) {
            this.showModal = true;
            this.modalPage = modalPage
        }
    }
}
</script>
  