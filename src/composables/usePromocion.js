
import { ref } from "vue";
import { fnListarPromociones,fnCrearPromocion,fnCanjearPromocion} from "../servicios/PromocionService";
const usePromocion = () => {
  const promociones = ref([]);
  const estadoOperacion=ref(null);
  const errorOperacion=ref(null);
 
  const listarPromociones = async ( ) => {
    await fnListarPromociones( (data)=>{promociones.value=data});
  };
  const crearPromocion = async (email,nombre ) => {
 
    await fnCrearPromocion(email,nombre, (data)=>{estadoOperacion.value=data},(error)=>{errorOperacion.value=(error);});
  };
  const canjearPromocion = async (codigo ) => {
  
    await fnCanjearPromocion(codigo, (data)=>{estadoOperacion.value=data},(error)=>{errorOperacion.value=(error);});
  };

  return {
    promociones,
    estadoOperacion,
    errorOperacion,
    listarPromociones,
    crearPromocion,
    canjearPromocion
   
  };
};

export default usePromocion;
