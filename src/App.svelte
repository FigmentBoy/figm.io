<script lang="ts">
  import Hero from './lib/Hero.svelte';
  import Content from './lib/Content.svelte';
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <title>fig</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <meta name="description" content="figment's portfolio">
  <meta property="og:url" content="https://figm.io/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="fig">
  <meta property="og:description" content="figment's website">
  <meta property="og:image" content="https://figm.io/avatar.png">
  <meta property="og:image:width" content="80">
  <meta property="og:image:height" content="80">
  
  <meta name="twitter:card" content="summary">
  <meta property="twitter:url" content="https://figm.io/">
  <meta name="twitter:title" content="fig">
  <meta name="twitter:description" content="figment's website">
  <meta property="twitter:image:src" content="https://figm.io/avatar.png">


  <link rel="preconnect" href="https://fonts.googleapis.com/">
  <link rel="preconnect" href="https://fonts.gstatic.com/">
  <link href="https://fonts.googleapis.com/css2?family=Inter&family=Varela+Round&display=swap" rel="stylesheet" crossorigin="anonymous" referrerpolicy="no-referrer">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</svelte:head>

<main class="h-screen overflow-auto">
  <Hero />
  <Content />
</main>