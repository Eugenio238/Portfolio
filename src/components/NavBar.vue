<template>
    <!--v-app-bar composant vuetify qui représente une barre d'appli
    .app attribu qui dit que la barre doit etre fixé en haut de l'écran
    .dark applique terme sombre aux elements enfant de notre bar app, 
    sa ajuste la couleur du texte et des icônes pour les rendre visibles sur un fond sombre
    .flat enlève l'ombre par défaut de notre barre d'application
    -->
       <v-app-bar app color="black" dark flat class="px-12">
        <!--v-btn composant boutton-->
                <v-btn>
                    <!--left place l'icone à gauche du bouton dans le texte-->
                    <v-icon color="yellow" left class="mr-2">
                            fas fa-signature
                    </v-icon>EUGENIO
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn text @click="scroll('home')" class="text-yellow">Accueil</v-btn>
                <v-btn text @click="scroll('about')">A propos</v-btn>
                <v-btn text @click="scroll('portfolio')">Portfolio</v-btn>
                <v-btn text @click="scroll('services')">Services</v-btn>
                <v-btn text @click="scroll('page')">Page</v-btn>
                <v-btn text @click="scroll('contact')">Contact</v-btn>
 

       </v-app-bar> 
       
</template>
<script>

export default {
    methods:{
        //méthode pour faire defiler la page vers un element spécifique
        //refName nom de l'élément vers lequel vous voulez faire défiler la page. Par exemple, scroll('home') fait défiler la page vers l'élément dont l'id est "home".
        scroll(refName){
            //on retrouve l'element dont l'id est refName 
            const element = document.getElementById(refName);
            // la méthode fait défiler la page pour amener l'élément spécifié en vue. 
            //prend un objet d'options pour définir le comportement du défilement.
            //le defilement se fera de maniere fluide avec behavior:smooth
            element.scrollIntoView({behavior:'smooth'});
        }
    }
}
</script>
<style>

</style>