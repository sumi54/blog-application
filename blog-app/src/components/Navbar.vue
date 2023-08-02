<template>
  <nav>
    <router-link :to="{name:'Home'}">Makale Listesi</router-link>
    <router-link :to="{name:'Ekle'}">Makale Oluştur</router-link>
  </nav>
</template>
<style>
nav {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 60px;
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
  text-transform: uppercase;
  width: 200%;
}
nav ul {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
nav li {
  list-style-type: none;
  margin-left: 20px;
}
nav a {
  color: #333;
}
nav .router-link-active {
  color:#eb4d4b ;
}
@media screen and (max-width: 600px){
  nav{
    width:100%
  }
}
</style>

