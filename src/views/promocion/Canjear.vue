<template>
  <div class="row justify-content-center">
    <div class="col-xl-6">
      <div class="row justify-content-center">
        <h4>CANJEAR PROMOCION</h4>
        <div class="col-xl-8">
          <form autocomplete="off" @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="">CODIGO DE PROMOCIÓN</label>
              <input
                class="form-control"
                placeholder="Ingresar Codigo"
                v-model="useForm.codigo"
                required
              />
            </div>
           
            <div class="form-group">
              <button
                type="submit"
                class="btn btn-success bvtn-block mt-4 mb-4"
              >
                Canjear Promocion
              </button>
              <button
                type="button"
                class="btn btn-primary bvtn-block mt-4 mb-4"
                @click="onNuevo"
              >
                Nuevo
              </button>
            </div>
          </form>
        </div>
        <div class="col-xl-8">
          <div
            v-if="estadoOperacion && estadoOperacion.mensaje == 'ok'"
            class="alert alert-success"
            role="alert"
          >
            Promocion Canjeada 
          </div>
          <div v-if="errorOperacion" class="alert alert-warning" role="alert">
            Error al canjear la promocion
            <ul v-if="errorOperacion.errores">
              <li v-for="error in errorOperacion.errores" :key="error">
                {{ error }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import usePromocion from "../../composables/usePromocion";

export default {
  setup() {
    const { estadoOperacion, errorOperacion, canjearPromocion } = usePromocion();

    const useForm = ref({
      codigo: "",      
    });
    const onSubmit = () => {
      estadoOperacion.value = null;
      errorOperacion.value = null;
      canjearPromocion(useForm.value.codigo);
    };
    const onNuevo = () => {
      estadoOperacion.value = null;
      errorOperacion.value = null;
      useForm.value.codigo="";
    };

    return {
      useForm,
      estadoOperacion,
      errorOperacion,
      onSubmit,
      onNuevo,
    };
  },
};
</script>