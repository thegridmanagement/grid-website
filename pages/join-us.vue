<template>
    <div class="relative">
        <Header @showSidebar="showSidebar = true" />

        <section>
            <section class="section-padding grid-content">
                <div class="grid-content-col1">
                    <h1 class="primary">FOR <span class="secondary">TALENTS</span></h1>
                    <div class="title-label">Join Us</div>
                </div>
                <div class="grid-content-col2">
                    <div class="divider"></div>
                </div>
                <div class="grid-content-col3">
                    <p>The Grid Agency welcomes your submissions!</p>
                    <p>If you are an unrepresented talent, please send your headshot and resume to us by email with the
                        subject line: <span class="primary bold">“Submission: (Your Name)”</span></p>
                    <p>Be sure to include all contact information <span class="primary bold">(Name, Number and Email)</span>
                        as
                        this will help us track your submission accurately. Failure to do so may result in your submission
                        being missed or deleted.</p>
                    <p>We thank you in advance for your submissions and look forward to working with you in the future.</p>
                    <p>The Grid Agency will only contact those we are interested in.
                        <span class="bold"><a href="mailto:newtalent@thegridmanagement.com"
                                class="primary">newtalent@thegridmanagement.com</a></span>
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
    name: 'JoinUs',
    data() {
        return {
            showSidebar: false,
        }
    },
    methods: {

    }
}
</script>
  