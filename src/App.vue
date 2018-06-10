
<template>
    <div id="app">


        <!--<img src="./assets/logo.png">-->
        <router-view/>
        <footer>
            <p style="font-size: 14px">
            Copyright@ invoice billing</p>
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
        padding:10px 0px;
        display: flex;
        justify-content: space-around;
        width: 100%;
        color:white;
        background: #101010;
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
        background-color: red;
        color: white;
    }

</style>
