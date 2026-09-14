<template>
  <div class="q-pa-lg" style="max-width: 1400px; margin: 0 auto;">
    <!-- Imagen Principal Ampliada -->
    <q-img 
      src="/img/biblioteca.jpg" 
      style="height: 400px; border-radius: 16px;" 
      class="q-mb-xl shadow-3"
    >
      <div class="absolute-bottom custom-image-overlay q-pa-md">
        <h1 class="text-h3 text-weight-bold text-white q-my-none">Biblioteca Institucional</h1>
        <p class="text-subtitle1 text-grey-2 q-mt-xs q-mb-none">Centro de recursos de información físico y digital</p>
      </div>
    </q-img>

    <!-- Descripción General -->
    <q-card flat bordered class="q-pa-lg q-mb-xl bg-white rounded-borders shadow-1">
      <div class="text-h6 text-weight-bold text-primary q-mb-sm">Acerca del Servicio</div>
      <p class="text-body1 text-grey-8 q-mb-none" style="line-height: 1.8; text-align: justify;">
        Centro de recursos de información físico y digital que apoya los procesos de formación y bilingüismo con textos especializados, bases de datos y zonas de lectura silenciosa o grupal. Proveemos orientación bibliográfica y acceso a herramientas tecnológicas de consulta. Ofrece: consultas en sala, préstamos a domicilio, préstamo interbibliotecario (PIP), talleres de lectura, capacitaciones, acceso a TIC, asesorías en busca de información y asesorías en un uso adecuado de catálogo bibliográfico.
      </p>
    </q-card>

    <!-- Grid Principal (Horarios y Encargado) -->
    <div class="row q-col-gutter-lg">
      
      <!-- Columna de Horarios y Contacto -->
      <div class="col-12 col-md-7">
        <q-card flat bordered class="q-pa-lg card-seccion shadow-1" style="height: 100%;">
          <div class="row items-center q-mb-md">
            <q-icon name="schedule" size="28px" class="text-primary q-mr-sm" />
            <div class="text-h5 text-weight-bold text-grey-9">Horarios de Atención</div>
          </div>
          
          <q-list separator class="q-mb-lg">
            <q-item class="q-py-md">
              <q-item-section class="text-weight-bold text-grey-8">Lunes a Viernes (Mañana)</q-item-section>
              <q-item-section side class="text-subtitle1 text-weight-medium text-primary">7:00 AM - 12:00 PM</q-item-section>
            </q-item>
            <q-item class="q-py-md">
              <q-item-section class="text-weight-bold text-grey-8">Lunes a Viernes (Tarde)</q-item-section>
              <q-item-section side class="text-subtitle1 text-weight-medium text-primary">1:00 PM - 10:00 PM</q-item-section>
            </q-item>
            <q-item class="q-py-md">
              <q-item-section class="text-weight-bold text-grey-8">Sábados</q-item-section>
              <q-item-section side class="text-subtitle1 text-weight-medium text-primary">8:00 AM - 4:00 PM</q-item-section>
            </q-item>
            <q-item class="q-py-md">
              <q-item-section class="text-weight-bold text-grey-8">Domingos</q-item-section>
              <q-item-section side class="text-subtitle1 text-weight-medium text-negative">Cerrado</q-item-section>
            </q-item>
          </q-list>

          <q-separator class="q-my-md" />

          <div class="row items-center">
            <q-icon name="phone" size="24px" class="text-primary q-mr-sm" />
            <div>
              <div class="text-subtitle2 text-weight-bold text-grey-7">Teléfono de contacto</div>
              <div class="text-h6 text-weight-bold text-grey-9">312 584 8032</div>
            </div>
          </div>
        </q-card>
      </div>

      <!-- Columna del Encargado -->
      <div class="col-12 col-md-5">
        <q-card flat bordered class="q-pa-lg card-seccion flex flex-center text-center shadow-1" style="height: 100%;">
          <div class="full-width q-py-md">
            <div class="row justify-center items-center q-mb-md">
              <q-icon name="person" size="24px" class="text-primary q-mr-xs" />
              <div class="text-h5 text-weight-bold text-grey-9">Encargado del Servicio</div>
            </div>

            <q-avatar size="130px" class="q-mb-md shadow-4 bg-grey-3 border-avatar">
              <img src="/img/biblioteca2.jpg" alt="Avatar Encargado">
            </q-avatar>

            <div class="text-h6 text-weight-bold text-grey-9 q-mt-sm">Yudith Milagros Martínez Bautista</div>
            <div class="text-subtitle1 text-weight-medium text-primary q-mb-md">Bibliotecario</div>

            <q-chip icon="email" color="blue-1" text-color="primary" class="text-weight-medium">
              ymmartinez@sena.edu.co
            </q-chip>
          </div>
        </q-card>
      </div>

    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.custom-image-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%);
  width: 100%;
}

.card-seccion {
  border-radius: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card-seccion:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05) !important;
}

.border-avatar {
  border: 4px solid white;
}
</style>