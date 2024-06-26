<!-- src/views/precios/PreciosView.vue -->
<template>
  <div>
    <h1>Novedades</h1>
    <p>Contenido de la página de Precios.</p>
    <button @click="openModal" class="btn btn-primary mb-3">Agregar</button>
    <table
      ref="table"
      class="display table table-striped table-bordered"
      style="width: 100%"
    >
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Versión</th>
          <th>Moneda</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td>{{ item.tipo }}</td>
          <td>{{ item.marca }}</td>
          <td>{{ item.modelo }}</td>
          <td>{{ item.version }}</td>
          <td>{{ item.moneda }}</td>
          <td class="d-flex justify-content-around">
            <button class="btn btn-icon" @click="editItem(index)">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-icon" @click="deleteItem(index)">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <ModalForm ref="modalForm" @closeModal="closeModal" />
  </div>
</template>

<script>
import $ from "jquery";
import ModalForm from "../../components/precios/ModalForm.vue";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default {
  name: "PreciosView",
  components: {
    ModalForm,
  },
  data() {
    return {
      tableData: [
        {
          tipo: "SUV",
          marca: "Toyota",
          modelo: "RAV4",
          version: "2020",
          moneda: "USD",
          opciones: "Ver",
        },
        {
          tipo: "Sedan",
          marca: "Honda",
          modelo: "Accord",
          version: "2019",
          moneda: "USD",
          opciones: "Ver",
        },
        // Agrega más datos según sea necesario
      ],
    };
  },
  mounted() {
    this.initializeDataTable();
  },
  methods: {
    initializeDataTable() {
      $(this.$refs.table).DataTable({
        responsive: true,
        language: {
          processing: "Procesando...",
          search: "Buscar:",
          lengthMenu: "Mostrar _MENU_ registros",
          info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
          infoEmpty: "Mostrando 0 a 0 de 0 registros",
          infoFiltered: "(filtrado de _MAX_ registros en total)",
          infoPostFix: "",
          loadingRecords: "Cargando...",
          zeroRecords: "No se encontraron registros coincidentes",
          emptyTable: "No hay datos disponibles en la tabla",
          paginate: {
            first: "Primero",
            previous: "Anterior",
            next: "Siguiente",
            last: "Último",
          },
          aria: {
            sortAscending:
              ": activar para ordenar la columna en orden ascendente",
            sortDescending:
              ": activar para ordenar la columna en orden descendente",
          },
        },
      });
    },

    openModal() {
      this.$refs.modalForm.showModal();
    },
    closeModal() {
      this.$refs.modalForm.hideModal();
    },

    editItem(index) {
      alert(`Edit item at index: ${index}`);
    },
    deleteItem(index) {
      if (confirm("¿Estás seguro de que quieres eliminar este elemento?")) {
        this.tableData.splice(index, 1);
        this.$nextTick(() => {
          $(this.$refs.table)
            .DataTable()
            .clear()
            .rows.add(this.tableData)
            .draw();
        });
      }
    },
  },
};
</script>

<style scoped>
.btn-icon {
  background: none;
  border: none;
  padding: 0;
}

.btn-icon i {
  color: inherit;
  font-size: 1.2rem;
}
</style>
