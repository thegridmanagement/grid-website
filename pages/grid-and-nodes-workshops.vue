<template>
    <div class="relative">
        <Header @showSidebar="showSidebar = true" />

        <section class="workshop">
            <section class="workshop-title" >
                <h1>
                    At Grid & Nodes, we aim to equip creatives
                    with employability skills for the 
                    arts & entertainment workspace
                </h1>
            </section>
            <section class="workshop-subtitle">
                <p>
                    We have carefully curated workshops under our Filmmaking Series that we know will  be beneficial to budding creatives.
                </p>
            </section>
            <section class="section-padding align-center">
                <a href="https://us06web.zoom.us/meeting/register/tZcqfuqrrDopGteIzLYVN18XPV1U1UVKAPZJ" target="blank" title="Google Form">
                    <div class="btn-topRight-bottomLeft-rounded">
                        <span style="padding-right: 10px;"> Register for our upcoming workshops here </span>
                        <span>
                            <img src="~/assets/images/icons/arrow-right.png"  width= "40px" />
                        </span>
                    </div>
                </a>
            </section>
            <div class="ySpace"></div>

            <router-link to="/grids-and-nodes">
                <section class="workshop-image">
                    <img src="~/assets/images/all-workshops.jpg" width="40%" style="border-radius: 50px;" />
                </section>
            </router-link>
            <!-- <section class="workshop-record align-center"> -->
                <section class="workshop-record">
               <div>
                    <h1> 5 </h1>
                    <p> Workshops held </p>
               </div>
               <div>
                    <h1> 743 </h1>
                    <p> Attendees </p>
               </div>
               <div>
                    <h1> 15 </h1>
                    <p> Facilitators </p>
               </div>
               <div>
                    <h1> 500+ </h1>
                    <p> Global Achievement </p>
               </div>
            </section>
            <div class="marquee">
               <div>
                   <img src="~/assets/images/workshop-two.png" />
                   <img src="~/assets/images/workshop-three.png" />
                   <img src="~/assets/images/workshop-one.png" />
                   <img src="~/assets/images/workshop-three.png" />
                   <img src="~/assets/images/workshop-four.png" />
                   <img src="~/assets/images/workshop-two.png" />
               </div>
            </div>
            <div class="ySpace"></div>

            <section class="section-padding align-center">
                <a href="https://drive.google.com/file/d/10vcjby6XB5t0I4fC0vH7t0TXujqMtptw/view?usp=drive_link" download target="blank" title="Brochure File">
                    <div class=" btn-rounded">
                        <span style="padding-right: 10px;"> View our brochure here </span>
                    </div>
                </a>
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
  