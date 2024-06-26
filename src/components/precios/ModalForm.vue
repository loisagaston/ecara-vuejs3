<!-- src/components/ModalForm.vue -->
<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Agregar Nuevo Item</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="titulo" class="form-label">Título</label>
              <input type="text" class="form-control" id="titulo" v-model="formData.titulo" required>
            </div>
            <div class="mb-3">
              <label for="descripcion" class="form-label">Descripción</label>
              <textarea class="form-control" id="descripcion" v-model="formData.descripcion" required></textarea>
            </div>
            <div class="mb-3">
              <label for="archivo" class="form-label">Subir Archivo Excel</label>
              <input type="file" class="form-control" id="archivo" @change="handleFileUpload" required>
            </div>
            <button type="submit" class="btn btn-primary">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
  name: 'ModalForm',
  data() {
    return {
      formData: {
        titulo: '',
        descripcion: '',
        archivo: null
      }
    };
  },
  methods: {
    handleFileUpload(event) {
      this.formData.archivo = event.target.files[0];
    },
    handleSubmit() {
      console.log(this.formData);
      this.hideModal();
    },
    showModal() {
      this.modal = new Modal(document.getElementById('exampleModal'));
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    }
  },
  mounted() {
    this.modal = new Modal(document.getElementById('exampleModal'));
  }
};
</script>

<style scoped>
/* Estilos personalizados si es necesario */
</style>
