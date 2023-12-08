<!-- eslint-disable no-console -->
<template>
    <div class="relative">
        <Header @showSidebar="showSidebar = true" />

        <section>
            <section class="section-padding">
                <div class="">
                    <h1 class="primary">ADMIN DATA</h1>
                </div>
                <div v-if="loading" class="loading-component">
                    Please wait...
                </div>
                <div v-else class="table-responsive mt-5" >
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <td>Firstname</td>
                                <td>Lastname</td>
                                <td>Email</td>
                                <td>Organization</td>
                                <td>Country</td>
                                <td>City</td>
                                <td>Additional Information</td>
                                <td>Date created</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, id) in users" :key="id">
                                <td>{{ user.firstname }}</td>
                                <td>{{ user.lastname }}</td>
                                <td>{{ user.email }}</td>
                                <td>{{ user.organization }}</td>
                                <td>{{ user.country }}</td>
                                <td>{{ user.city }}</td>
                                <td>{{ user.additional }}</td>
                                <td>{{ formatTime(user.created_at) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </section>


        <Footer />
        <Sidebar v-if="showSidebar" @close="showSidebar = false" />
    </div>
</template>
  
<script>
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase/init';

export default {
    name: 'AdminPage',
    data() {
        return {
            showSidebar: false,
            loading: false,
            users: []
        }
    },
    created() {
        this.getUsers();
    },
    methods: {
        async getUsers() {
            this.loading = true;
            try {
                const collectionReference = collection(db, '/users');
                const document = await getDocs(collectionReference);
                const users = []
                document.forEach((doc) => {
                    users.push(doc.data())
                })
                this.users = users.sort((a,b) => {
                    return b.created_at - a.created_at;
                })
                this.loading = false;
            } catch (error) {
                this.loading = false
            }
        },
        formatTime(dateTime) {
            const dateFormat = new Date(dateTime);
            return `${dateFormat.getDate()}/${dateFormat.getMonth()+1}/${dateFormat.getFullYear()} ${dateFormat.getHours()}:${dateFormat.getMinutes()}:${dateFormat.getSeconds()}`;
        }
    }
}
</script>
  