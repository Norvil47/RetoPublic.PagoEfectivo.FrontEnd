<template>
  <div class="container">
    <h3>PROMOCIONES CREADAS</h3>

    <div class="row justify-content-center">
      <div class="col-xl-8">
        <table class="table table-sm table bordered table-striped">
          <thead>
            <tr>
              <th>Email</th>
              <th>Nombre</th>
              <th>Codigo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in promociones" :key="item.id"> 
                <td>{{item.email}}</td>
                <td>{{item.nombreUsuario}}</td>
                <td>{{item.codigo}}</td>
                <td>{{item.estado}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import usePromocion from "../../composables/usePromocion";
export default {
  setup() {
    const { promociones, listarPromociones } = usePromocion();
    listarPromociones();    
    return { promociones };
  },
};
</script>