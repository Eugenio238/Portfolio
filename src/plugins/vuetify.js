// Styles

//on importe le style css ppour toutes les icones de fontawesome
import '@fortawesome/fontawesome-free/css/all.css'
//on importe le style csspour toutes les icons de materials designs icons
import '@mdi/font/css/materialdesignicons.css'
//on importe les styles de vuetify necessaire pour les composants UI
import 'vuetify/styles'
//on importe des icones fontawesome pour vuetify
//aliases contiens les noms d'alias des icones ,fa les definitions des icones
import {aliases,fa} from 'vuetify/iconsets/fa'




//Vuetify est une bibliothèque de composants UI spécifiquement conçue pour Vue.js.
// Elle fournit un ensemble complet de composants pré-construits et stylisés selon les principes de Material Design de Google.

// on importe createVuetify de vuetify
//il s'agit d'1 fonction qui va nous permettre de créer une instance de vuetify avec une config personnalisé
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    //Config de l'utlisation des icones
    icons : {
      //Définit FontAwesome (fa) comme jeu d'icônes par défaut
      defaultSet : 'fa',
      //fourni les alias des icones qu'on va utiliser dans nos composant
      aliases,
      // Définit le jeu d'icônes FontAwesome pour être utilisé par Vuetify
      sets : {
        fa, 
      }
    }
  }

)
