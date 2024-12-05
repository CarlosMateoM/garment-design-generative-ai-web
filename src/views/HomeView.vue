<template>
    <PageLayaout>
        <template v-slot:main>

            <main>

                <section class="flex flex-col justify-center my-8 space-y-6">
                    <h2
                        class="text-center uppercase text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">
                        Diseño de Prendas de Vestir
                    </h2>

                    <p class="text-center font-semibold text-xl text-white/90">
                        únicas y personalizadas, utilizando inteligencia artificial.
                    </p>


                    <RouterLink to="/register"
                        class="text-gray-800 mx-auto max-w-32 bg-white hover:bg-white/90 font-medium rounded-lg text-sm px-5 py-2.5 ">
                        Registrarse

                    </RouterLink>


                    <div class="flex flex-wrap justify-center items-center">

                        <img class="min-w-64 w-1/3 object-cover" :src="currentImage.src" :alt="currentImage.alt">

                        <div class="min-w-64 p-1 w-full m-4 md:w-1/3 rounded-xl text-white font-sans ">
                            <div class="bg-slate-900  rounded-xl p-4 text-sm">
                                <p
                                    class="text- mb-2 text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">
                                    Describe tu próximo diseño</p>
                                <VueWriter class="border bg-slate-800 border-gray-700 rounded-lg p-4" :array="prompts"
                                    :eraseSpeed="10" :typeSpeed="50" :delay="3000" :iterations="'1'" @typed="typed" />

                                <div class="flex justify-end">

                                    <button type="button"
                                        class="flex items-center text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2">
                                        Generar
                                        <SparklesIcon />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>


                <section class="md:mt-18 p-4">
                    <div class="container mx-auto">
                        <h1 class="text-4xl  text-white my-12 font-bold  text-center">
                            Saca el Máximo Provecho a tus Diseños
                        </h1>

                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            <!-- Card 1 -->
                            <div class="bg-slate-900 rounded-lg shadow-lg p-6">
                                <h2
                                    class="text-xl text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200 font-bold mb-2">
                                    Catálogos de Moda</h2>
                                <p class="text-white">Utiliza las imágenes para crear catálogos de productos tanto
                                    digitales
                                    como impresos,
                                    mostrando las prendas diseñadas de manera atractiva.</p>
                            </div>

                            <!-- Card 2 -->
                            <div class="bg-slate-900 rounded-lg shadow-lg p-6">
                                <h2
                                    class="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">
                                    E-commerce</h2>
                                <p class="text-white">Implementa las imágenes en sitios web de comercio electrónico
                                    para
                                    ofrecer a los
                                    clientes visualizaciones claras y detalladas de las prendas disponibles.</p>
                            </div>

                            <!-- Card 3 -->
                            <div class="bg-slate-900 rounded-lg shadow-lg p-6">
                                <h2
                                    class="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">
                                    Prototipos y Muestras</h2>
                                <p class="text-white">Genera prototipos visuales para revisar y ajustar diseños
                                    antes de
                                    la
                                    producción
                                    física, ahorrando tiempo y recursos en el proceso de desarrollo de productos.
                                </p>
                            </div>

                            <!-- Card 4 -->
                            <div class="bg-slate-900 rounded-lg shadow-lg p-6">
                                <h2
                                    class="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">
                                    Redes Sociales y Publicidad</h2>
                                <p class="text-white">Publica las imágenes en redes sociales y campañas
                                    publicitarias
                                    para
                                    promover nuevas
                                    colecciones y captar la atención del público objetivo.</p>
                            </div>

                            <!-- Card 5 -->
                            <div class="bg-slate-900 rounded-lg shadow-lg p-6">
                                <h2
                                    class="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">
                                    Inspiración para Diseñadores</h2>
                                <p class="text-white">Provee a los diseñadores con imágenes generadas como fuente de
                                    inspiración y
                                    referencia para futuras colecciones y proyectos creativos.</p>
                            </div>

                            <!-- Card 6 -->
                            <div class="bg-slate-900 rounded-lg shadow-lg p-6">
                                <h2
                                    class="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">
                                    Estudios de Mercado</h2>
                                <p class="text-white">Usa las imágenes para realizar encuestas y estudios de
                                    mercado,
                                    obteniendo feedback
                                    valioso sobre nuevos diseños y preferencias de los consumidores.</p>
                            </div>

                        </div>
                    </div>

                </section>

            </main>
        </template>
    </PageLayaout>
</template>

<script setup>
    import SparklesIcon from '@/components/icons/SparklesIcon.vue';
    import PageLayaout from '@/layouts/PageLayaout.vue';

    import { VueWriter } from 'vue-writer';
    import { ref } from 'vue';

    const currentIndex = ref(-1);

    const currentImage = ref({
        src: 'crop-top-mariposa.png',
        alt: 'Buso azul'
    });

    const images = [
        {
            src: 'buso-azul.png',
            alt: 'Buso azul'
        },
        {
            src: 'maniqui-inicio.png',
            alt: 'Maniquí'
        }
    ];

    const prompts = [
        'Sudadera azul marino con estampado de surfistas en olas y un volcán humeante de fondo. Hecha de algodón suave y cómodo, ideal para días frescos. Diseño moderno y juvenil con bolsillos frontales y detalles en contraste en mangas y dobladillo.',
        'Sudadera con capucha negra y el logo del grupo en el pecho, combinada con jeans rasgados y zapatillas blancas. Este look refleja una esencia juvenil y moderna.'
    ]

    const typed = () => {

        if (currentIndex.value === prompts.length - 1) {
            kz
            currentIndex.value = 0;
        } else {
            currentIndex.value++;
        }

        currentImage.value = images[currentIndex.value];
    };



</script>

<style>
.is-typed span.cursor {
    display: inline-block;
    width: 1px;
    background-color: rgb(255, 255, 255);
    animation: blink 1s infinite;
}

@keyframes blink {
    49% {
        background-color: rgb(255, 255, 255);
    }

    50% {
        background-color: transparent;
    }

    99% {
        background-color: transparent;
    }
}
</style>
