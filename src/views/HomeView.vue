<template>
      <v-app id="home">
            <NavBar/>
            <!--v-container est un composant de vuetify qui sert à appliquer le container et
            système de grille-->
            <v-container fluid>
                <div class="head">
                      <v-row>
                        <v-col cols="5">
                              <div style="position:relative" class="mt-16">
                                <h1 class="text-grey">Salut,</h1>
                                <h1 class="text-white">Je suis Eugenio KOKOYE</h1>
                                <span class="text-grey">Graphiste & Developpeur Web</span><br/>
                                <!-- tile rend le bouton caré sans arrondis
                                    dark applique thème sombre au bouton, ajuste couleur texte et icônes pour qu'elles soient visibles sur un fond sombre
                                    outlined = bordure et fond transparent-->
                                <v-btn tile dark class="text-yellow mt-8" variant="outlined">Contactez moi</v-btn>
                              </div>
                        </v-col>
                        <v-col cols="2">
                          <!-- z-index élevé comme 9999 assure que l'élément est au-dessus de la plupart des autres éléments de la page.
                              margin-left auto et margin-right auto c'est pour centrer l'element sur l'axe abcisse et les marges de part et 
                              d'autres seront égales 
                              Flux de document : ordre naturel dans lequel les éléments HTML apparaissent sur la page, de haut en bas et de gauche à droite
                              Par défaut les éléments en bloc (comme <div>, <p>, <h1>) s'empilent verticalement les uns après les autres, tandis que les éléments
                              en ligne (comme <span>, <a>) s'affichent côte à côte à l'intérieur de leurs conteneurs en bloc
                              position relative :l'element se trouve dans le flux du doc à une position donné et on peut le déplacer par rapport à cette position
                              position absolue : element retirer du flux ,on le positionne par rapport à son container de positionnement le plus proche
                              donc il se retrouve dans le container de l'ancetre et va se positionner dedans par rapport au bord
                              On sait que un element es dans un container et margin c'est marges extérieurs au conteneur,padding marge entre l'element et le container
                              Container de positionnement:ancetre le plus proche d'un element qui a une position =!static-->
                            <div style="position:absolute;z-index:9999;bottom:0;margin-left:auto;margin-right:auto;left:0;right:0;text-align: center;">
                                <v-icon>fas fa-angle-double-down</v-icon>
                            </div>
                        </v-col>
                        <v-col cols="5">
                              <div style="position:relative;z-index:9999;" class="mt-16">
                                    <!-- contain : directive qui ajuste la taille de notre image pour que sa soit
                                    entierement visible dans son container sans la recadrer-->
                                    <v-img src="portrait_noir.jpg" contain max-height="293">

                                    </v-img>
                              </div>
                        </v-col>
                      </v-row>
                </div>
                <v-col cols="12" class="mt-16" id="about">
                    <div>
                      <v-row>
                          <v-col cols="12" sm="4">
                              <div class="egg">
                                <!-- 
                                  <v-img src="B.jpg" max-height="200" class="mt-20">
                                   </v-img>
                                -->                                  
                              </div>
                          </v-col>
                          <v-col cols="12" sm="6">
                              
                                  <h2 class="mt-16">A propos de moi</h2>
                                  <div style="width: 120px">
                                    <v-slider v-model="slider2" track-color="yellow" color="yellow">

                                    </v-slider>
                                  </div>
                                  <h4 class="mt-n4">Je suis un Graphiste</h4>
                                  <h4>Et Developpeur web </h4>
                                  <p class="text-grey">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                     Soluta repellat vero debitis sequi sed fuga impedit aliquid necessitatibus?
                                      Labore sapiente rem minima dolore maxime facere ipsam quo eveniet enim aspernatur.
                                  </p>
                                  <br />
                                  <p class="text-grey">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                     Repellat ut provident dicta necessitatibus vitae pariatur consequatur, 
                                     blanditiis error esse aliquam at repellendus illo atque quam nulla rerum minus quaerat explicabo.
                                  </p>
                                  <v-btn tile dark color="yellow" class="mt-4">
                                        Télécharger le resume
                                  </v-btn>
                          </v-col>
                      </v-row>
                    </div>
                </v-col>
                <div class="text-center mt-4">
                    <h2>Ce que je fais</h2>
                    <div style="width:120px;margin: 0 auto;">
                        <v-slider v-model="slider2" track-color="yellow" color="yellow">
                             
                        </v-slider>
                    </div>
                </div>
                <v-col cols="12" class="padd" id="portfolio">
                      <div class="first" id="project">
                            <v-row>
                                  <v-col cols="12">
                                      <div class="child">
                                              <v-btn icon="fas fa-laptop" color="#FBDF7E" class="text-white">

                                              </v-btn>
                                              <h3 class="ml-3 mt-4">Vue js</h3>
                                              <p class="text-grey ml-3 mt-4 text-caption">
                                                Lorem, ipsum dolor sit amet <br /> consectetur adipisicing
                                                <br /> consecteetur adipisicing
                                              </p>
                                      </div>
                                      <div class="child">
                                              <v-btn icon="fas fa-mobile-alt" color="#FBDF7E" class="text-white">

                                              </v-btn>
                                              <h3 class="ml-3 mt-4"> Express js</h3>
                                              <p class="text-grey ml-3 mt-4 text-caption">
                                                Lorem, ipsum dolor sit amet <br /> consectetur adipisicing
                                                <br /> consecteetur adipisicing
                                              </p>
                                      </div>
                                      
                                      <div class="child">
                                              <v-btn icon="fas fa-camera" color="#FBDF7E" class="text-white">

                                              </v-btn>
                                              <h3 class="ml-3 mt-4">Photoshop</h3>
                                              <p class="text-grey ml-3 mt-4 text-caption">
                                                Lorem, ipsum dolor sit amet <br /> consectetur adipisicing
                                                <br /> consecteetur adipisicing
                                              </p>
                                      </div>
                                     
                                  </v-col>  
                            </v-row>
                            <!--divider créer une ligne pour séparer-->
                            <v-divider>
                            </v-divider>
                      </div>
                </v-col>
                <v-col cols="12" sm="12" id="services">
                      <div class="d-flex justify-center mb-6">
                            <v-btn color="#FBDF7E" class="mr-2">
                                  Tout
                            </v-btn>
                            <v-btn class="mr-2" variant="tonal">
                                   Design Web
                            </v-btn>
                            <v-btn class="mr-2" variant="tonal">
                                De la Conception
                            </v-btn>
                            <v-btn class="mr-2" variant="tonal">
                                  Photographie
                            </v-btn>
                            <v-btn variant="tonal">
                                  Illustration
                            </v-btn>
                      </div>
                </v-col>
                <v-col cols="12" class="imgHover">
                    <v-row class="fill-height" align="center" justify="center">
                         <!---->
                          <template v-for="(item,i) in items" :key="i">
                                    <v-col cols="12" md="4">
                                          <!-- v-hover 7 pour détecter si l'user a survolé l'élément
                                               v-slot  utilise le slot scoped pour accéder à deux propriétés
                                               isHovering : booleen indiquant si survoler ou pas
                                                props applique des props à l'element enfant au survol-->
                                        <v-hover v-slot="{isHovering,props}">
                                          <!--:elevation="isHovering ? 12 : 2" change l'élévation (l'ombre) de notre carte en 
                                                fonction du survol. Si carte est survolée (isHovering est true), 
                                                l'élévation est 12, sinon elle est 2
                                                :class="{ 'on-hover': isHovering }" la classe on-hover es + à la carte si survolée
                                                v-bind="props" applique toutes les propriétés de props à carte-->
                                            <v-card :elevation="isHovering ? 12: 2" :class="{'on-hover' : isHovering}" v-bind="props">

                                              <v-img :src="item.img" height="225px" cover>
                                              </v-img>

                                            </v-card>
                                        </v-hover>
                                    </v-col>
                          </template>
                    </v-row>
                </v-col>
                <v-col cols="12" sm="12">
                    <div class="d-flex justify-center mb-6">
                        <v-btn color="#FBDF7E" class="mt-4">
                             Voir plus
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="12" id="page">
                      <div class="pre">
                          <v-row>
                              <v-col cols="12" sm="4">
                                    <v-card class="mw-auto" max-width="344" height="">
                                          <v-img src="portrait.jpg" height="140px" cover></v-img> 
                                                <v-card-title>
                                                      Nous vous offrons le meilleur
                                                </v-card-title>
                                                <v-card-subtitle>
                                                    By AAE IdeaPro | 22 mai 2024
                                                </v-card-subtitle>
                                                <v-card-text>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Maxime nesciunt error voluptate. Nostrum sunt voluptates 
                                                        dicta ducimus illo? Eveniet voluptatum nesciunt et.
                                                        Aspernatur veritatis maiores ullam nisi dolore quam corrupti!
                                                </v-card-text>
                                          
                                    </v-card>
                              </v-col>


                              <v-col cols="12" sm="4">
                                    <v-card class="mw-auto" max-width="344" height="">
                                          <v-img src="portrait.jpg" height="140px" cover></v-img> 
                                                <v-card-title>
                                                      Nous vous offrons le meilleur
                                                </v-card-title>
                                                <v-card-subtitle>
                                                    By AAE IdeaPro | 22 mai 2024
                                                </v-card-subtitle>
                                                <v-card-text>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Maxime nesciunt error voluptate. Nostrum sunt voluptates 
                                                        dicta ducimus illo? Eveniet voluptatum nesciunt et.
                                                        Aspernatur veritatis maiores ullam nisi dolore quam corrupti!
                                                </v-card-text>
                                          
                                    </v-card>
                              </v-col>

                              <v-col cols="12" sm="4">
                                    <v-card class="mw-auto" max-width="344" height="">
                                          <v-img src="portrait.jpg" height="140px" cover></v-img> 
                                                <v-card-title>
                                                      Nous vous offrons le meilleur
                                                </v-card-title>
                                                <v-card-subtitle>
                                                    By AAE IdeaPro | 22 mai 2024
                                                </v-card-subtitle>
                                                <v-card-text>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        Maxime nesciunt error voluptate. Nostrum sunt voluptates 
                                                        dicta ducimus illo? Eveniet voluptatum nesciunt et.
                                                        Aspernatur veritatis maiores ullam nisi dolore quam corrupti!
                                                </v-card-text>
                                          
                                    </v-card>
                              </v-col>

                          </v-row>

                      </div>
                </v-col>
                    <v-col cols="12" id="blog">
                          <div class="hire">
                              <v-row>
                                    <v-col cols="12" sm="8">
                                        <h1 class="mt-9">
                                          Engagez-moi pour votre projet génial
                                        </h1>
                                        <p class="text-grey">
                                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                              Provident quis nobis ad hic eveniet expedita distinctio. 
                                              Modi iusto illo repellat officia, non qui sunt totam recusandae,
                                              hic, provident beatae consequatur.
                                        </p>
                                    </v-col>
                                    <v-col cols="12" sm="4">
                                          <v-btn color="#FBDF7E" class="mt-15">
                                                Engagez-moi
                                          </v-btn>
                                    </v-col>
                              </v-row>
                          </div>
                    </v-col>
                    <v-col cols="12" sm="12" class="px-16" id="contact">
                          <v-row>

                                <!--
                                    sm="4" :  indique que sur les écrans sm (petits et moyens écrans), la colonne occupera 4 colonnes
                                    dans la grille de 12 colonnes.
                                -->
                                <v-col cols="12" sm="4">
                                      <div class="child">
                                            <h1>Coordonnées de Contact.</h1>
                                            <v-btn icon="fas fa-map-marker-alt" class="mt-10" variant="outlined"></v-btn><br />
                                                  <span class="text-caption">
                                                        Cotonou, Benin<br />
                                                  </span>
                                                  <v-btn icon="fas fa-phone-alt" class="mt-10" variant="outlined"></v-btn><br />
                                                  <span class="text-caption">9795 -6547</span><br />
                                                  <span class="text-caption">9897 -0045</span><br />


                                                  <v-btn icon="fas fa-envelope" class="mt-10" variant="outlined"></v-btn><br />
                                                  <span class="text-caption">koffi@gmail.com</span><br />
                                                  <span class="text-caption">jigo458@gmail.com</span><br />

                                      </div>
                                </v-col>

                                <v-col cols="12" sm="8">
                                      <h1 class="mt-8">
                                        Envoyer votre message
                                      </h1>
                                      <v-divider>

                                      </v-divider>
                                      <span class="text-caption">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Nihil voluptate optio voluptatibus sapiente. Vel, voluptate
                                            magnam facere quaerat ipsa molestiae reprehenderit consectetur 
                                            eos temporibus doloribus provident repudiandae dignissimos 
                                            nihil laborum!
                                      </span>
                                      <v-row class="mt-10">
                                            <v-col cols="12" sm="6">
                                                <v-text-field label="Nom" persistent-hint variant="outlined">

                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field label="Telephone" persistent-hint variant="outlined">

                                                </v-text-field>
                                            </v-col>
                                      </v-row>
                                      <v-textarea label="Message" persistent-hint variant="outlined">

                                      </v-textarea>
                                      <v-btn color="#FBDF7E" class="mt-2">Envoyer</v-btn>
                                </v-col>
                          </v-row>
                    </v-col>
            </v-container>
            <FooterView />
      </v-app>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '../components/NavBar.vue';
import FooterView from '../components/FooterView.vue';

export default defineComponent({
  name: 'HomeView',
  setup(){
    return {
      slider2:50,
      items:[
        {
          img:"portrait_noir.jpg"
        },
        {
          img:"C.jpg"
        },
        {
          img:"D.jpg"
        },
        {
          img:"E.jpg"
        },
        {
          img:"F.jpg"
        },
        {
          img:"portrait_noir.jpg"
        },
      ]
    }
  },

  components: {
    NavBar,
    FooterView
  },
});
</script>
<style scoped>
.v-container{
  padding:16px 0;
}
.head {
  /**on positionne l'element par rapport à sa position normale */
  position : relative;
  /**on centre le text horizontalement */
  text-align:center;
  padding:12px;
  margin-bottom:6px;
  height:400px;
  width:100%;
  color:white;
}
/**le pseudo element before c'est pour ajouter un effet visuel à notre head
 */
.head:before{
  /**content est requis pour les pseudo-éléments ::before et ::after.
   il crée un pseudo-élément vide. */
  content:"";
  /**positionne le pseudo element en absolue par rapport à son conteneur parent(notre head)
  l'élément parent doit avoir une position relative pour que sa marche */
  position:absolute;
  /**met le pseudo element en haut à gauche de l'element parent */
  top:0;
  left:0;
  height:100%;
  width:50%;
  background:black;
  /**transform incline verticalement de 6 degrés au pseudo-élément.*/
  transform: skew(0deg,6deg)

}
.head:after{
  /**content  requise pour les pseudo-éléments ::before et ::after.
   crée un pseudo-élément vide. */
   content:"";
  /**positionne le pseudo element en absolue par rapport à son conteneur parent
  l'élément parent doit avoir une position relative pour que sa marche */
  position:absolute;
  /**met le pseudo element en haut à gauche de l'element parent */
  top:0;
  right:0;
  height:100%;
  width:50%;
  background:black;
  /**transform incline verticalement de 6 degrés au pseudo-élément.*/
  transform: skew(0deg,-6deg)
}
.egg{

  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  background-color: #FBDF7E;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;;

}
.first{
  width: 100%;
  height:280px;
  text-align: center;
  padding: 2rem 2rem;

}
.child{
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align:middle;
  text-align:center;
  margin-right: 8px;
}
.imgHover{
  padding: 0 200px;
}
.pre{
  width: 100%;
  height: 380px;
  text-align: center;
  padding: 0 200px;
  background-color: #f5f5f5
}

.hire{
  width: 100%;
  height: 200px;
  padding:0 200px;
  background-color: #e9e9e9;
  margin-top: -24px;
}

</style>
