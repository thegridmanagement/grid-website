<template>
    <div class="relative">
        <Header @showSidebar="showSidebar = true" />

        <section>
            <section class="section-padding grid-content">
                <div class="grid-content-col1">
                    <h1 class="primary">CONTACT US</h1>
                </div>
                <div class="grid-content-col2">
                    <div class="divider"></div>
                </div>
                <div class="grid-content-col3">
                    <div class="d-flex justify-content-between">
                        <p>Bookings: </p>
                        <p><a href="mailto:talent@thegridmanagement.com" class="primary">talent@thegridmanagement.com</a>
                        </p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>General Enquiry: </p>
                        <p><a href="mailto:hello@thegridmanagement.com" class="primary">hello@thegridmanagement.com</a></p>
                    </div>
                </div>
            </section>
            <section class="section-padding">
                <form class="contact-us-form" @submit="saveContact">
                    <div class="form-group">
                        <div>
                            <input v-model="firstname" type="text" placeholder="First name*" class="form-control" required>
                        </div>
                        <div>
                            <input v-model="lastname" type="text" placeholder="Last name*" class="form-control" required>
                        </div>
                    </div>

                    <div class="form-group">
                        <div>
                            <input
v-model="organization" type="text" placeholder="Organization" class="form-control"
                                required>
                        </div>
                        <div>
                            <input v-model="email" type="email" placeholder="Email*" class="form-control" required>
                        </div>
                    </div>

                    <div class="form-group">
                        <div>
                            <input v-model="city" type="text" placeholder="City/Town" class="form-control" required>
                        </div>
                        <div>
                            <input v-model="country" type="text" placeholder="Country" class="form-control" required>
                        </div>
                    </div>
                    <div>
                        <textarea v-model="additional" placeholder="Additional Information" rows="4"
                            required>

                        </textarea>
                    </div>
                    <div v-if="showSuccessMessage" class="success-message">
                        <p>Details Sumitted successfully!</p>
                    </div>
                    <div>
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-primary">Submit <span v-if="loading" class="spinner"></span></button>
                        </div>
                    </div>

                </form>
            </section>
        </section>

        <Footer />
        <Sidebar v-if="showSidebar" @close="showSidebar = false" />
    </div>
</template>
  
<script>
import { collection, addDoc } from 'firebase/firestore';
import db from '../firebase/init';

export default {
    name: 'ContactUs',
    data() {
        return {
            showSidebar: false,
            firstname: "",
            lastname: "",
            organization: "",
            email: "",
            city: "",
            country: "",
            additional: "",
            loading: false,
            showSuccessMessage: false
        }
    },
    methods: {
        async saveContact(e) {
            e.preventDefault();
            this.loading = true;
            try {
                const collectionReference = collection(db, 'users');
                await addDoc(collectionReference, {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    organization: this.organization,
                    email: this.email,
                    city: this.city,
                    country: this.country,
                    additional: this.additional,
                    created_at: Date.now(),
                });

                this.loading = false;
                this.firstname = "";
                this.lastname = "";
                this.organization = "";
                this.email = "";
                this.city = "";
                this.country = "";
                this.additional = "";
                this.showSuccessMessage = true;
                setTimeout(() => {
                    this.showSuccessMessage = false
                }, 3000);

            } catch (error) {
                this.loading = false
            }

        },
    }
}
</script>
  