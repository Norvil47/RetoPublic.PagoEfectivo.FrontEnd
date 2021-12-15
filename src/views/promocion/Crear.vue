<template>
  <div class="row justify-content-center">
    <div class="col-xl-6">
      <div class="row justify-content-center">
        <h4>CREAR PROMOCION</h4>
        <div class="col-xl-8">
          <form autocomplete="off" @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="">EMAIL</label>
              <input
              type="email"
                class="form-control"
                placeholder="Ingresar Email"
                v-model="useForm.email"
                required
              />
            </div>
            <div class="form-group">
              <label for="">NOMBRE</label>
              <input
                class="form-control"
                placeholder="Ingresar nombre"
                v-model="useForm.nombre"
                required
              />
            </div>
            <div class="form-group">
              <button
                type="submit"
                class="btn btn-success bvtn-block mt-4 mb-4"
              >
                Generar Promocion
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
            Promocion generada ==> {{ estadoOperacion.objeto.codigo }}
          </div>
          <div v-if="errorOperacion" class="alert alert-warning" role="alert">
            Error al generar la promocion
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
    const { estadoOperacion, errorOperacion, crearPromocion } = usePromocion();

    const useForm = ref({
      email: "",
      nombre: "",
    });
    const onSubmit = () => {
      estadoOperacion.value = null;
      errorOperacion.value = null;
      crearPromocion(useForm.value.email, useForm.value.nombre);
    };
    const onNuevo = () => {
      estadoOperacion.value = null;
      errorOperacion.value = null;
      useForm.value.email="";
       useForm.value.nombre=""
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