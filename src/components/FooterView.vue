<template>
    

    <v-footer>
        <!--elevation à 0 donc la card n'aura aucune ombre , à 24 on aura une ombre de 24
        rounded à 0 donc pas de bord arrondi
        width à 100 percent, la carte va sétendre sur toute la largeur du containeur parent-->
        <v-card elevation="0" rounded="0" width="100%" class="bg-grey text-center">

            <v-card-text>
                <!--variant à plain veut dire style de bouton sans bordure ou fond-->
                    <v-btn class="mw-4" icon="fas fa-comment" variant="plain" color="white"></v-btn>
                    <v-btn class="mx-4" icon="fas fa-university" variant="plaint" color="white"></v-btn>
                    <v-btn class="mx-4" icon="fas fa-wifi" variant="plaint" color="white"></v-btn>
                    <v-btn class="mx-4" icon="fas fa-podcast" variant="plaint" color="white"></v-btn>

            </v-card-text>
            <v-card-text class="text-white">
                <!--new Date().getFullYear() crée un nouvel objet Date JavaScript et appelle la méthode getFullYear() pour obtenir l'année en cours.-->
                        @ {{ new Date().getFullYear() }} - 
                        <strong>
                            BBF IdeaPro Tous droits réservés
                        </strong>
            </v-card-text>

        </v-card>
    </v-footer>


</template>
<script>

export default {

}

</script>

<style>
.v-footer{
    padding: 8px 0 !important;
}
</style>