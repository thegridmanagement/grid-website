<template>
    <div class="relative">
        <Header @showSidebar="showSidebar = true" />

        <section>
            <section class="section-padding grid-content">
                <div class="grid-content-col1">
                    <h1 class="primary">PRESS</h1>
                </div>
                <div class="grid-content-col2">
                    <div class="divider"></div>
                </div>
                <!-- <div class="grid-content-col3">
                    <p>Stay up to date with what we are creating! Get the scoop before anyone else does!</p>
                </div> -->
                <div class="grid-content-col3">
                    <div v-for="(press, index) in pressPosts" :key="index">
                        <div class="press_card">
                            <p>
                                {{press.content}}
                                <a :href="press.url" target="blank" class="colored_a" :title="press.title"> (Read more) </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <!-- <section class="grid-content-image">
                <img src="~/assets/video/coming-soon.gif" />
            </section> -->

        </section>

        <Footer />
        <Sidebar v-if="showSidebar" @close="showSidebar = false" />
    </div>
</template>
  
<script>
export default {
    name: 'Press',
    data() {
        return {
            showSidebar: false,
            pressPosts: [
                {
                    content: `In a bid to promote inclusivity and excellence in sports, Zen Archery, in collaboration with the Lagos State Archery Association,
                            proudly presents the Zen Archery Lagos Opens Championships. Scheduled to be held at the iconic Teslim Balogun Stadium from March 9 to 10, 2024, 
                            this event promises to be a thrilling showcase of skill and determination in the art of archery.  `,
                    title: `Zen Archery Lagos Opens Championships: Fostering Inclusion, Sporting Excellence | Independent Newspaper Nigeria`,
                    url: `https://independent.ng/zen-archery-lagos-opens-championships-fostering-inclusion-sporting-excellence/`,
                },
                {
                    content: `Nigerian director, Adeoluwa Owu also known as Captain Degzy has shared more images on Instagram from the set of his upcoming movie Asiri Ade (Secret of the Crown).`,
                    title: `See more photos from Adeoluwa Owu's upcoming movie 'Asiri Ade' | Pulse Nigeria`,
                    url: `https://www.pulse.ng/entertainment/movies/see-more-photos-from-adeoluwa-owus-upcoming-movie-asiri-ade/qm3p54f`,
                },
                {
                    content: `On Monday, February 12th, the studio held a private screening of the picture for its cast and crew members as well as select industry filmmakers and press. The epic film boasts a stellar cast, including renowned actors Gabriel Afolayan, Bolanle Ninolowo, Mike Afolarin, Bolaji Ogunmola, Omowunmi Dada, Fathia Williams, and other exceptional talents.`,
                    title: `Efa Iwara tori how e go from being a bored musician to breaking into Nollywood - BBC News Pidgin`,
                    url: `https://shockng.com/asiri-ade-movie-2024/`,
                },
                {
                    content: `Nollywood star, Efa Iwara journey into di industry no be like di typical one. For dis interview with BBC Pidgin, E tok about im first hustle with rap career until im decide to go for feem audition. Although e say na boredom push am to discover acting, e take am ten years to develop im acting skill. Efa Iwara dey inside series like Ajoche, Men’s Club, Rumour Has It and for feems like A Naija Christmas, Finding Hubby and Rattle Snake among plenti odas.`,
                    title: `Efa Iwara tori how e go from being a bored musician to breaking into Nollywood - BBC News Pidgin`,
                    url: `https://www.bbc.com/pidgin/articles/c3g03vk47rgo`,
                },
                {
                    content: `In this report, Sunday Ehigiator delve into the multifaceted world of fitness and wellness, shedding light on the distinctions between fitness, wellness, shedding, and bodybuilding, while also speaking with Certified Health & Wellness Expert, Seyi Olusore, who brings to bare his 20 years of experience as a fitness coach. In today’s fast-paced world, the quest for a healthier lifestyle has taken centre stage. Now, more than ever, individuals across the globe are eager to embrace fitness routines and wellness practices that not only transform their bodies but also enhance their overall well-being.`,
                    title: `Healthier Lifestyle: Understanding Fitness, Wellness, and Shedding, with Seyi Olusore - THISDAYLIVE `,
                    url: `https://www.thisdaylive.com/index.php/2024/01/30/healthier-lifestyle-understanding-fitness-wellness-and-shedding-with-seyi-olusore`,
                },
                {
                    content: `In the vibrant tapestry of Nollywood’s cinematic landscape, a groundbreaking phenomenon has emerged, leaving an indelible mark on the industry.“A Tribe Called Judah,” directed by the dynamic duo of Adeoluwa Owu, also known as Captain Degzy, and Funke Akindele, has not just broken records and rewritten the narrative of what’s achievable in the realm of African cinema. Captain Degzy stands as a trailblazer in the world of TV and film direction, with an impressive portfolio that extends beyond borders. Collaborating with global icons such as CNN and Beyoncé, his directorial finesse has consistently earned him accolades. Yet, it is his co-direction of “A Tribe Called Judah” that has propelled him to new heights of acclaim.`,
                    title: `What Captain Degzy brought to 'A Tribe Called Judah' - Vanguard News `,
                    url: `https://www.vanguardngr.com/2024/01/what-captain-degzy-brought-to-a-tribe-called-judah-2/`,
                },
                {
                    content: `It’s time to change the game for the future of your craft! Grid Tools is a product of a talent solutions company. This is not just another product; it’s a lifeline for the creative souls who drive Nigeria’s vibrant creative and entertainment industry which captures essential solutions that aim to empower talents, professionals, and a diverse range of creative individuals with benefits that have typically been reserved for the traditional 9-5 workforce.`,
                    title: `Retirement savings plan, Health insurance & more, now available for creatives in Nigeria, courtesy Gridtools - Nairametrics  `,
                    url: `https://nairametrics.com/2023/12/05/retirement-savings-plan-health-insurance-more-now-available-for-creatives-in-nigeria-courtesy-gridtools/`,
                },
                {
                    content: `Amid the quest for a healthier lifestyle, Seyi Olusore, a certified health and wellness expert certified by the Arizona State University, USA, has listed extensive guidelines for people to achieve optimal fitness, wellness, and bodybuilding outcomes.In a statement made available to Independent Newspapers, Olusore discussed the differences between fitness, wellness, shedding, and bodybuilding, as well as which path may be best for each person`,
                    title: `Expert List Guidelines For Achieving Optimal Fitness, Bodybuilding Outcomes | Independent Newspaper Nigeria `,
                    url: `https://independent.ng/expert-list-guidelines-for-achieving-optimal-fitness-bodybuilding-outcomes/`,
                },
                {
                    content: `Management of Grid Tools, a product of talent solutions company, says it is poised to lead a profound transformation in the Nigerian creative and entertainment landscape.The company disclosed this to Vanguard in a media chat recently in Lagos. “It captures essential solutions that aim to empower talents, professionals, and a diverse range of creative individuals with benefits that have typically been reserved for the traditional 9-5 workforce.`,
                    title: `Grid Tools empowering Nigerian creatives `,
                    url: `https://www.vanguardngr.com/2023/11/grid-tools-empowering-nigerian-creatives/amp/`,
                },
                {
                    content: `Emmanuel Oyeleke, renowned Canon Ambassador and award-winning photographer, has once again orchestrated a remarkable photography workshop, ‘Revealed,’ set in the serene landscapes of Mombasa, Kenya. As Nigeria’s pride and a visionary in the world of photography, Emmanuel Oyeleke is extending an irresistible invitation to fellow Nigerian photographers for an enriching experience in this East African gem.`,
                    title: `African photo shows berth in Kenya - The Nation Newspaper `,
                    url: `https://thenationonlineng.net/african-photo-shows-berth-in-kenya/amp/`,
                },
                {
                    content: `Award winning photographer, who is managed by the Grid management, is set to empower African creatives, foster cultural integration and exchange as well as boost arts and tourism between Nigeria and Kenya with the 'Revealed' photography workshop. Oyeleke said this year's photography workshop will be held in Mombasa, Kenya, from October 5 to 11, with professional photographers from across Africa and Europe, coming to enhance skills of creatives, uplift aspiring photographers and showcasing the African artistic brilliance.`,
                    title: `'Revealed' to empower African photography creatives, — Guardian Arts `,
                    url: `https://guardian.ng/art/revealed-to-empower-african-photography-creatives-boost-arts-tourism/`,
                },
                {
                    content: `As part of its opening announcements, The Grid Management, a full-service management agency, has unveiled some of the stars they represent. These include the veteran actor Keppy Ekpeyong Bassey, Bimbo Ademoye, Efa Iwara, Nollywood sweetheart Nonso Afolabi, acclaimed photographer, Emmanuel Oyeleke, award-winning kid actress; Darasimi Nadi, among others.`,
                    title: `Celebrities join forces with The Grid Mgt `,
                    url: `https://www.vanguardngr.com/2023/09/celebrities-join-forces-with-the-grid-mgt/amp/`,
                },
                {
                    content: `What does King of Boys 2 have in common with A Naija Christmas? Or Anikulapo with the Gangs of Lagos? What does Jagun Jagun have in common with Shanty Town? What, pray, tell, does the Aki and Pawpaw movie have in common with Battle on Buka Street? And how does the movie Obaram fit into all of this? These answers will come in a moment, but first, we know they all come from the Nollywood film industry.`,
                    title: `The Grid Management: A New Era Begins for the Creative & Entertainment Industry | BellaNaija `,
                    url: `https://www.bellanaija.com/2023/09/the-grid-management/`,
                },
                {
                    content: `The work that has gone into, and continues to go into this industry, is massive, and we give special kudos to the people who bring these beloved creations to life. The creatives, actors, videographers, casting directors, photographers, gaffers, scriptwriters, producers, animators, editors, makeup artists, stylists, and a long list of others. The question now remains, who ensures the well-being of these amazing talents, making sure they get their rightful compensation and value?`,
                    title: `The Grid: Now You See Us | Pulse Nigeria `,
                    url: `https://www.pulse.ng/entertainment/movies/the-grid-now-you-see-us/r7rjep7`,
                },
                {
                    content: `Adeoluwa Owu, better known as Captain Degzy, has been quietly making waves in the Nigerian film industry since 2020. However, 2023 was the year that firmly placed him on the radar as a director worth keeping an eye on. As 2024 continues to unfold,Nollywire caught up with him to get a glimpse of what the future holds`,
                    title: `Adeoluwa Owu: Nollywood Director to Watch in 2024 - Nollywire `,
                    url: `https://www.nollywire.com/adeoluwa-owu-2024-director-to-watch/`,
                },
                {
                    content: `They say three times is a charm but I say we call it a charm now- Funke Akindele’s Christmas submissions are becoming more of a pattern. And we are here for it. A Tribe Called Judah- her recent box office smashing offering, which has now grossed 613 million naira in its first two weeks- is heavily leaned towards the messaging of her previous works. Battle on Buka Street(2022) was a poignant exploration of familial bonds emphasising the significance of love and in A Tribe Called Judah, the message stays consistent.`,
                    title: `A Tribe Called Judah: A Sincere Meditation on Love and Familial Bonds. - XploreNollywood`,
                    url: `https://xplorenollywood.com/a-tribe-called-judah-a-sincere-meditation-on-love-and-familial-bonds/`,
                },
                {
                    content: `This list features the top 5 movies in Nollywood, ranked from highest to lowest grossing. Funke Akindele holds the top 3 spots. See what movies made the list: A Tribe Called Judah, Wedding Party, etc. `,
                    title: `5 Highest Grossing Nollywood Movies So Far!!! - XploreNollywood `,
                    url: `https://xplorenollywood.com/5-highest-grossing-nollywood-movies-so-far/`,
                },
                {
                    content: `Adeoluwa Owu, popularly known as Captain Degzy, is back in the director's chair for The Godmother after the release of the record-breaking movie, A Tribe Called Judah.This time, he teams up with American-based filmmaker, Ola Yusuf, for the production of a five-part series titled The Godmother. The upcoming project, set in 2006, revolves around the intricate web of politics, unionism, cultism, rape and power dynamics within the confines of a Nigerian academic institution.`,
                    title: `'A Tribe Called Judah' director Adeoluwa Owu takes up Aluta in new film`,
                    url: `https://www.pulse.ng/entertainment/movies/a-tribe-called-judah-director-adeoluwa-owu-takes-up-aluta-in-the-godmother/c8lehtq`,
                },
                {
                    content: `Adire directed by Adeoluwa Owu “Captain Degzy” has wrapped principal photography in Ibadan, Nigeria. After a couple of weeks at different vintage locations in Ibadan, West Africa’s leading film company, FilmOne Entertainment, has wrapped shoot and is now in the post-production stage of its debut original feature film, Adire.`,
                    title: `First Film One Original “Adire” Directed By Adeoluwa Owu Wraps Filming in Ibadan - ShockNG`,
                    url: `https://shockng.com/first-film-one-original-adire-directed-by-adeoluwa-owu-wraps-filming-in-ibadan/`,
                },
            ],
        }
    },
    methods: {

    }
}
</script>
  



