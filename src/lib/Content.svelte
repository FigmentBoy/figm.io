<script lang="ts">
	import LinkButton from './components/LinkButton.svelte';
	import VideoScroller from './components/VideoScroller.svelte';
	import Container from './components/Container.svelte';
	import ContentSection from './components/ContentSection.svelte';

    import fig from '../assets/fig.webp?enhanced';
</script>

<div class="w-full md:w-2/3 absolute mt-48 md:mt-0 md:left-1/3">
    <ContentSection class="bg-red" num={0}>
        <Container class="flex flex-col justify-center items-center">
            <div class="w-full h-full flex flex-col justify-center items-center gap-4">
                <div class="max-w-full max-h-full aspect-video rounded-lg overflow-hidden relative">
                    <enhanced:img src={fig} alt="A photo of me!" />
                </div>

                <div class="flex flex-col justify-center items-center gap-4 flex-grow">
                    <div class="max-w-2xl">
                        <h1 class="text-3xl text-center text-red">About Me</h1>
                        <p class="text-md text-center">I'm an 18 year old amateur developer specializing in C++! I am currently a student at <span class="text-red">Purdue University</span>, where I am pursuing a double-major in <span class="text-red">Computer Science and Music</span>. When I'm not coding, I'm either playing my Trombone in a local orchestra or playing Baritone in Drum Corps!</p>
                    </div>

                    <div class="flex gap-4 justify-center items-center text-sm">
                        <LinkButton href="https://twitter.com/FigmentBoy_" class="bg-red">
                            <i class="fa-brands fa-twitter text-gray mr-2"/>Twitter
                        </LinkButton>
                        <LinkButton href="https://github.com/FigmentBoy" class="bg-red">
                            <i class="fa-brands fa-github text-gray mr-2"/>GitHub
                        </LinkButton>
                        <LinkButton href="https://blog.figm.io/" class="bg-red">
                            <i class="fa-solid fa-blog text-gray mr-2"/>Blog
                        </LinkButton>
                    </div>
                </div>
            </div>
        </Container>
    </ContentSection>
    <ContentSection class="bg-green" num={1}>
        <Container class="flex flex-col justify-center items-center gap-8">
            <div class="w-full h-full flex flex-col justify-center items-center gap-4">
                <div class="max-w-full max-h-full aspect-video rounded-lg overflow-hidden relative">
                    <VideoScroller path="GDWeb" frames={120} class="w-full h-full" />
                    <p class="absolute bottom-0 left-0 w-full text-center p-2 bg-gray bg-opacity-50">
                        Level: Sedulous by Samifying
                    </p>
                </div>

                <div class="flex flex-col justify-center items-center gap-4 flex-grow">
                    <div class="max-w-2xl">
                        <h1 class="text-3xl text-center text-green">GDWeb</h1>
                        <p class="text-md text-center">Geometry Dash level viewer made with Emscripten, WebGL, and OpenGL</p>
                    </div>

                    <div class="flex gap-4 justify-center items-center text-sm">
                        <LinkButton href="https://github.com/FigmentBoy/GDWeb" class="bg-green">
                            <i class="fa-brands fa-github text-gray mr-2"/>GitHub
                        </LinkButton>
        
                        <LinkButton href="https://gd.figm.io/" class="bg-green">
                            <i class="fa-solid fa-play text-gray mr-2"/>Open&nbsp;in&nbsp;browser
                        </LinkButton>
                    </div>
                </div>
            </div>
        </Container>
    </ContentSection>
    <ContentSection class="bg-blue" num={2}>
        <Container class="flex flex-col justify-center items-center gap-8">
            <div class="w-full h-full flex flex-col justify-center items-center gap-4">
                <div class="max-w-full max-h-full aspect-video rounded-lg overflow-hidden relative">
                    <VideoScroller path="zBot" frames={172} class="w-full h-full" />
                    <p class="absolute bottom-0 left-0 w-full text-center p-2 bg-gray bg-opacity-50">
                        Level: Acu by Neigefeu
                    </p>
                </div>

                <div class="flex flex-col justify-center items-center gap-4 flex-grow">
                    <div class="max-w-2xl">
                        <h1 class="text-3xl text-center text-blue">zBot</h1>
                        <p class="text-md text-center">Geometry Dash replay mod</p>
                    </div>

                    <div class="flex gap-4 justify-center items-center text-sm">
                        <LinkButton href="https://github.com/FigmentBoy/zBot" class="bg-blue">
                            <i class="fa-brands fa-github text-gray mr-2"/>GitHub
                        </LinkButton>
        
                        <LinkButton href="https://zbot.figmentcoding.me/" class="bg-blue">
                            <i class="fa-solid fa-dollar-sign text-gray mr-2"/>Purchase&nbsp;Product&nbsp;Key
                        </LinkButton>
                    </div>
                </div>
            </div>
        </Container>
    </ContentSection>
    <ContentSection class="bg-pink" num={3}>
        <Container class="flex flex-col justify-center items-center gap-8">
            <div class="w-full h-full flex flex-col justify-center items-center gap-4">
                <div class="max-w-2xl">
                    <h1 class="text-3xl text-center text-pink">Contact Me:</h1>
                    <p class="text-md text-center">I promise I don't bite!</p>
                </div>

                <div class="flex gap-4 justify-center items-center text-sm">
                    <LinkButton href="https://discord.gg/pPSAU6Ugka" class="bg-pink">
                        <i class="fa-brands fa-discord text-gray mr-2"/>Discord
                    </LinkButton>
    
                    <LinkButton href="mailto:figmentcoding@gmail.com" class="bg-pink">
                        <i class="fa-solid fa-envelope text-gray mr-2"/>Email
                    </LinkButton>
                </div>
            </div>
        </Container>
    </ContentSection>
</div>