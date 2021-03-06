import { createStackNavigator } from 'react-navigation-stack'
import DetalhesDoLugarTela from '../telas/DetalhesDoLugarTela'
import ListaDeLugaresTela from '../telas/ListaDeLugaresTela'
import MapaTela from '../telas/MapaTela'
import NovoLugarTela from '../telas/NovoLugarTela';
import {createAppContainer} from 'react-navigation';


const LugaresNavigator = createStackNavigator({
    Lugares: ListaDeLugaresTela,    
    DetalheDoLugar: DetalhesDoLugarTela,    
    NovoLugar: NovoLugarTela,    
    Mapa: MapaTela

});

export default createAppContainer(LugaresNavigator);