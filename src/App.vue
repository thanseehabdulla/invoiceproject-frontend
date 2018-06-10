<template>
    <div id="app">
        <div class="topnav">
            <a class="active" href="/">Home</a>
            <a href="">News</a>

            <router-link to="/">/</router-link>
            <router-link to="/content">content</router-link>
            <a href="/content">Contact</a>
            <a href="#about">About</a>
        </div>
        <img src="./assets/logo.png">
        <router-view/>
        <footer>
            <p>Vue js example</p>
            <p>Copyright@ <a href="mailto:someone@example.com">
                thanseehabdulla@gmail.com</a>.</p>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    footer {
        position: fixed;
        bottom: 0px;
        display: flex;
        justify-content: space-around;
        width: 100%;
        background: black;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 0px;
    }

    body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
    }

    .topnav {
        overflow: hidden;
        background-color: #333;
    }

    .topnav a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    .topnav a:hover {
        background-color: #ddd;
        color: black;
    }

    .topnav a.active {
        background-color: #4CAF50;
        color: white;
    }
</style>
