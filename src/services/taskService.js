// IMPORTANT import du composant axios (pas besoin de spécifier le chemin, axios a été installé avec npm ; la bibliothèque sera chargée directement depuis le dossier node_modules)
import axios from 'axios';

const taskService = {

    baseURI: 'http://localhost/Spe/Todoback/public/wp-json/wp/v2',


    async loadTaskCategories(){
        const response = await axios.get(taskService.baseURI + '/category?_embed=true');
        return response.data;
    },
   

};
// il faut exporter notre recipeService pour le rendre utilisable en VUE
export default taskService;