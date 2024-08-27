<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="grid-modal">
        <div v-if="pageNumber === 1" class="grid-modal-card green">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/papaya.svg" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>Papaya empowers African creatives with the tools they need to tell our uniquely African stories on a
                    global scale. We are involved in the entire production/co-production and distribution processes.</p>
                <p>Papaya intends to produce and showcase high-quality and authentically African stories to the world by
                    backing the best and brightest creatives on the continent. Papaya plans to produce/co-produce at
                    least
                    10 high-quality/premium films annually, commencing with Nollywood.</p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-white.svg" /></span></p>
            </div>
        </div>

        <div v-if="pageNumber === 2" class="grid-modal-card">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/herconomy.svg" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>Nigeria’s first Fintech company for women dedicated to empowering female entrepreneurs and
                    professionals
                    through Financial Services, Capacity Building, Community, and Opportunities.</p>
                <p>We empower women to gain control of their money and secure their financial future through savings.
                </p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
            </div>
        </div>

        <div v-if="pageNumber === 3" class="grid-modal-card green">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/fsdh.svg" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>FSDH Asset Management provides stellar investment solutions tailored to suit the financial position
                    and
                    goals of their clients, and an array of special purpose schemes ranging from Treasury Bills funds to
                    Eurobonds.</p>
                <p>We are registered with the Securities and Exchange Commission as a Portfolio Manager and a Corporate
                    Investment Adviser, and are versatile in financial transactions and investment strategies that meet
                    the
                    needs of investors in an emerging economy like Nigeria.</p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-white.svg" /></span></p>
            </div>
        </div>

        <div v-if="pageNumber === 4" class="grid-modal-card">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/diamonds.svg" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>Diamonds & Pearlsmulti award winning Travel Company based in Lagos, Nigeria. We provide travel
                    services
                    to various destinations such as flights, hotel bookings, airport transfers, cruises, tailor made
                    packages, honeymoons, short getaways, family vacations, health insurance etc.</p>
                <p>Our customers are leisure and business travelers seeking to visit various destinations .We offer a
                    personalized service so that you feel at home while making your booking with us. </p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
            </div>
        </div>

        <div v-if="pageNumber === 5" class="grid-modal-card">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/nem.svg" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>NEM Health aims to build a customer satisfying Insurance institution that is passionate about adding
                    value to the interests of all stakeholders and to be the preferred choice of the insuring public.
                </p>
                <p>We believe that every person deserves access to the best possible health care in order to achieve
                    maximum
                    performance and productivity. We have carefully curated a team of national and international
                    healthcare
                    professionals to provide you with the top-notch care that you rightly deserve.</p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
            </div>
        </div>

        <div v-if="pageNumber === 6" class="grid-modal-card green">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/filmone.svg" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>FilmOne Entertainment is an independent entertainment company focused on the distribution and
                    production
                    of Filmed Content, from Nigeria, West Africa, to the World.</p>
                <p>We distribute and produce a wide range of mainstream and commercial pictures, including international
                    and
                    indigenous films, and maintain strategic alliances and relationships with international studios and
                    distributors.</p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-white.svg" /></span></p>
            </div>
        </div>

        <div v-if="pageNumber === 7" class="grid-modal-card">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/quantum.svg" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>We are Nigeria’s Foremost and leading Travel Management Company committed to the provision of world
                    class
                    travel services.</p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
            </div>
        </div>

        <div v-if="pageNumber === 8" class="grid-modal-card green">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/british-council.svg" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>The British Council supports peace and prosperity by building connections, understanding and trust
                    between people in the UK and countries worldwide working directly with individuals to help them gain
                    the
                    skills, confidence and connections to transform their lives and shape a better world in partnership
                    with
                    the UK.</p>
                <p>Our values underpin everything we say and do, how we work with people, behave towards them and
                    communicate. Our belief in what we do translates into a deep and long-term commitment to the people
                    we
                    work with and the places where we work</p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-white.svg" /></span></p>
            </div>
        </div>

        <div v-if="pageNumber === 9" class="grid-modal-card green">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/tydem.svg" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>Tydem Media, Member of Tydem Group, is a key player in the Outdoor Media, Advertising and PR
                    landscape of
                    Lagos.</p>
                <p>Tydem Media has received multiple commendations by the Lagos State Government on Outstanding
                    Performance
                    and Quality of Service Delivery.</p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-white.svg" /></span></p>
            </div>
        </div>

        <div v-if="pageNumber === 10" class="grid-modal-card">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/canon.svg" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>Canon's corporate philosophy is kyosei. It conveys our dedication to seeing all people, regardless of
                    culture, customs, language or race, harmoniously living and working together in happiness into the
                    future.</p>
                <p>Unfortunately, current factors related to economies, resources and the environment make realizing
                    kyosei
                    difficult.
                    Canon strives to eliminate these factors through corporate activities rooted in kyosei.</p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
            </div>
        </div>

        <div v-if="pageNumber === 11" class="grid-modal-card green">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/gac.svg" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>Guangzhou Automobile Group Co., Ltd. (“GAC”) was incorporated in June 1997.</p>
                <p>In 2022, GAC' s production and sales both exceeded 2.4 million, with a positive year-on-year growth.
                    Based on export planning, GAC Group successfully pushed ahead its international business, and GAC
                    MOTOR
                    was born with the right time.</p>
                <p>As of today, GAC MOTOR has successfully infiltrated the markets of Middle East, Southeast Asia,
                    Eastern
                    Europe, Africa and America, total of 30 countries and regions worldwide.</p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-white.svg" /></span></p>
            </div>
        </div>

        <div v-if="pageNumber === 12" class="grid-modal-card green">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/degzy.svg" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>Degzy Films is a Lagos based team of filmmakers who live, eat, and sleep media production. Our
                    passion is
                    storytelling.</p>
                <p>Every customer has a story that needs to be told. Whether it’s about their film, brand, business, an
                    event, training, or a press release. Our team knows how to capture the story in a way that is
                    compelling, relevant and engaging.</p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
            </div>
        </div>

        <div v-if="pageNumber === 13" class="grid-modal-card">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/redbox.svg" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>RedBox is a full-service event management and creative direction agency that's all about creating
                    moments
                    that take your breath away. Led by the visionary Amaka Akukwe, a creative mastermind who brings the
                    most
                    outrageous ideas to life, RedBox is passionate about delivering unforgettable experiences that will
                    have
                    your guests talking for years to come.</p>
                <p>RedBox has had the privilege of working with industry leaders, transforming their events into
                    unforgettable experiences. They're the go-to company for Nollywood premieres and have planned the
                    most
                    creative and experiential premieres in Nigeria.</p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
            </div>
        </div>
        <div v-if="pageNumber === 14" class="grid-modal-card">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/unicaf.png" height="60px" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>
                    Unicaf helps students to earn quality higher education degrees through the Unicaf Scholarship
                    Programme.
                    With a mission to nurture academic distinction and critical thinking, sparking innovation among
                    students through a transformative education that is globally pertinent and culturally rich,
                    UNICAF is committed to empowering learners with essential 21st-century competencies, utilising
                    state-of-the-art technology, exemplary teaching standards, and meaningful research to drive societal
                    advancement and professional achievement.</p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
            </div>
        </div>
        <div v-if="pageNumber === 15" class="grid-modal-card">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/lg.png" height="60px" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>LG is committed to enhancing the quality of life for Nigerians, LG offers cutting-edge technology and exceptional design across a wide range of products from innovative home appliances and electronics to mobile communications products. 
                </p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
            </div>
        </div>
        <div v-if="pageNumber === 16" class="grid-modal-card">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/gomycode.png" height="40px" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>GoMyCode is a leading edtech platform that delivers training in digital and tech skills. By offering
                    courses in web development, data science, and digital marketing, GoMyCode equips Nigerians with the
                    practical knowledge needed to thrive in the job market.
                </p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
            </div>
        </div>
        <div v-if="pageNumber === 17" class="grid-modal-card">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/gotv.png" height="60px" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>
                    GOtv is a digital terrestrial television service offering affordable and quality entertainment to
                    households across Nigeria. With a wide range of channels covering movies, sports, news, and local
                    content, GOtv provides a diverse selection of programming that caters to the varied interests of
                    Nigerian viewers.
                </p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
            </div>
        </div>
        <div v-if="pageNumber === 18" class="grid-modal-card">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/filmone.png" height="60px" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>FilmOne is a leading film production and distribution company, recognised for bringing high quality
                    local and international movies to cinemas across Nigeria. With a focus on delivering compelling
                    stories and cinematic experiences, FilmOne Entertainment plays a key role in advancing the Nigerian
                    film industry.
                </p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
            </div>
        </div>
        <div v-if="pageNumber === 19" class="grid-modal-card">
            <div class="grid-modal-card-col1">
                <div class="modal-image">
                    <img src="~/assets/images/brands/id-africa.png" height="100px" />
                </div>
            </div>
            <div class="grid-modal-card-col2">
                <div class="divider"></div>
            </div>
            <div class="grid-modal-card-col3">
                <p>
                    ID Africa is a dynamic marketing agnecy based in Nigeria, specializing in digital communications and
                    brand strategy. By leveraging innovative approaches and deep industry insights, ID Africa helps
                    businesses navigate the digital landscape and connect with their audience effectively. </p>

                <p class="view-more" @click="close">View less <span><img
                            src="~/assets/images/svg/arrow-right-green.svg" /></span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/require-prop-types
    props: ['pageNumber'],
    methods: {
        close() {
            this.$emit("close")
        }
    }
}
</script>

<style></style>