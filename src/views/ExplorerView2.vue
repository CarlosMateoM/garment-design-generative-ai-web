<template>
    <div class="bg-home-radial-gradient" >

    
    <header class="bg-slate-900/80  shadow-xl sticky top-0 z-10">

        <nav class="flex justify-between ">
            <div class="flex justify-center items-center p-4">
                <img class="w-12 h-12 mr-2" src="/logo.png" alt="Logo">
                <div>
                    <h1 class="text-white text-xl font-semibold md:text-2xl ">Design Fashion AI</h1>
                </div>
            </div>
            <ul class="flex-1  justify-around items-center text-white font-medium text-md hidden md:flex">
                <li class="flex items-center px-5 py-2.5 me-2 mb-2 border-b-2">
                    <svg class="inline-block mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                    </svg>
                    <a href="#">
                        Inicio
                    </a>
                </li>
                <li class="flex items-center px-5 py-2.5 me-2 mb-2">
                    <a href="#">
                        <svg class="inline-block mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
                        </svg>
                        Explorar
                    </a>
                </li>
                <li class="flex items-center px-5 py-2.5 me-2 mb-2">
                    <svg class="inline-block mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 9h.01" />
                        <path d="M11 12h1v4h1" />
                        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                    </svg>
                    <a href="#">Acerca de</a>
                </li>
            </ul>

            <div class="md:flex justify-center items-center p-4 hidden">

                <button type="button"
                    class="text-gray-800 bg-white hover:bg-white/90 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Iniciar
                    sesión</button>
            </div>

            <div class="flex items-center md:hidden">
                <svg class="m-4 text-white" xmlns="http://www.w3.org/2000/svg" width="34" height="34"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
            </div>
        </nav>

    </header>
    <main class="bg-home-radial-gradient">

        <section class="pt-12">


            <div class="flex flex-col justify-center mb-8" >
                <h2
                    class="text-center uppercase text-5xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">
                    Diseño de Prendas de Vestir
                </h2>

                <p class="text-center font-semibold text-xl text-white/90 my-4  ">
                    únicas y personalizadas, utilizando la inteligencia artificial.
                </p>

                <div class="mx-auto" >
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200">
                        <span class="relative px-8 py-2.5 transition-all ease-in duration-75 text-white bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Registrate
                        </span>
                    </button>
                </div>
            </div>

            <div class="flex flex-wrap justify-center items-center">

                <img class="min-w-64 w-1/3 object-cover" :src="currentImage.src" :alt="currentImage.alt">

                <div class="min-w-64 p-1 w-full m-4 md:w-1/3 rounded-xl text-white font-sans ">
                    <div class="bg-slate-900  rounded-xl p-4 text-sm">
                        <p class="text- mb-2 text-transparent bg-clip-text bg-gradient-to-r to-teal-200 from-lime-200">
                            Describe tu próximo diseño</p>
                        <VueWriter class="border bg-slate-800 border-gray-700 rounded-lg p-4" :array="prompts"
                            :eraseSpeed="30" :typeSpeed="70" :delay="3000" :iterations="'1'" @typed="typed" />

                        <div class="flex justify-end">

                            <button type="button"
                                class="flex items-center text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2">
                                Generar
                                <svg class="ml-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
            <div class="p-4">
                <div class="p-4">
                    <h2 class="text-xl font-semibold text-white">
                        <div class="rounded-full bg-slate-900 text-white w-6 h-6 inline-block text-center">1</div>

                        Nivel de Detalle Asombroso
                    </h2>

                    <p class="text-sm text-white">
                        Los diseños generados capturan incluso los detalles más intrincados y complejos,
                        creando prendas visualmente cautivadoras y realistas.
                    </p>
                </div>
                <div class="p-4">
                    <h2 class="text-xl font-semibold text-white">

                        <div class="rounded-full bg-slate-900 text-white w-6 h-6 inline-block text-center">2</div>
                        Versatilidad Ilimitada
                    </h2>
                    <p class="text-sm text-white">
                        Nuestros diseños abarcan una amplia gama de estilos, desde lo clásico y elegante hasta lo
                        experimental y vanguardista. No hay límites para la creatividad.

                    </p>
                </div>
                <div class="p-4">
                    <h2 class="text-xl font-semibold text-white">
                        <div class="rounded-full bg-slate-900 text-white w-6 h-6 inline-block text-center">3</div>

                        Exclusividad Garantizada

                    </h2>
                    <p class="text-sm text-white">

                        Cada diseño es completamente original e irrepetible, asegurándote que nadie más tendrá una
                        prenda idéntica. Serás la única persona luciendo ese diseño excepcional.

                    </p>
                </div>
                <div class="p-4">
                    <h2 class="text-xl font-semibold text-white">
                        <div class="rounded-full bg-slate-900 text-white w-6 h-6 inline-block text-center">4</div>

                        Personalización Completa

                    </h2>
                    <p class="text-sm text-white">

                        Tienes el control total sobre los colores, patrones, texturas y elementos de diseño. Cada
                        prenda
                        se ajusta perfectamente a tus preferencias y estilo personal.


                    </p>
                </div>

            </div>



        </section>
        <!--
        <h2 class="text-3xl text-center font-bold text-white my-14">
            Descubra el Potencial de los Diseño Generados
        </h2>
        <section class="flex justify-around" >


    
    <div class="flex items-center flex-col w-62 p-4 border rounded">
        <h3 class="text-2xl text-center font-bold text-white" >
            Crea tu tienda de ropa en Instagram 
        </h3>
        <img class="rounded w-60 h-80 my-8 object-cover" src="/woman-drawing-clothes-sketch.jpg" alt="">
        <p>
                    Imágenes rápidas y atractivas para tus productos.
                </p>
            </div>
            <div class="flex items-center flex-col w-62 p-4 border rounded">
                <h3 class="text-2xl text-center font-bold text-white" >
                    Crea tu tienda de ropa en Instagram 
                </h3>
                <img class="rounded w-60 h-80 my-8 object-cover" src="/caso-uso-instagram.png" alt="">
                <p>
                    Imágenes rápidas y atractivas para tus productos.
                </p>
            </div>

            
        </section>

        <section class="relative">
            
                
                <img class="absolute w-96"
                src="https://mateodevelopment.online/storage/images/optimized/img-2024-05-27-11-00-02-545968DowK4.jpg"
                alt="">
                <img class="absolute w-96"
                src="https://mateodevelopment.online/storage/images/optimized/2024-05-01%2010:36:18.jpg" alt="">
                <img class="absolute right-1/3 w-96"
                src="https://mateodevelopment.online/storage/images/optimized/img-2024-05-13-13-18-02-055071VuOps.jpg"
                alt="">
                <img class="absolute right-0 w-96"
                src="https://mateodevelopment.online/storage/images/optimized/img-2024-05-26-09-41-16-639164t1Bqa.jpg"
                alt="">
            
        </section>
    -->

    </main>
</div>
    <footer></footer>
</template>

<script setup>
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
