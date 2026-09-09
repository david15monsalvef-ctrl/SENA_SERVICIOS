<template>
  <div class="q-pa-md" style="max-width: 900px; margin: 0 auto;">
    <q-img src="@/assets/img/enfermeria.png" style="height: 250px; border-radius: 8px;" class="q-mb-md" />
    
    <h1 class="text-h4 text-weight-bold text-primary q-my-sm">Servicio de Enfermería</h1>
    <p class="text-body1 text-grey-8 q-mb-md" style="line-height: 1.6;">
      Espacio dotado para la atención de primeros auxilios, control de signos vitales, prevención en salud y orientación en caso de emergencias médicas o accidentes dentro de la institución. Aquí se ofrece todos los servicios de promoción y prevención de enfermedades, atención básica en primeros auxilios.
    </p>

    <div class="row q-col-gutter-md q-mb-lg">
      <!-- Horarios y Teléfono -->
      <div class="col-12 col-md-6">
        <q-card flat bordered class="q-pa-md" style="height: 100%;">
          <div class="text-h6 text-weight-medium q-mb-sm">Horarios de Atención</div>
          <q-list dense class="q-mb-md">
            <q-item>
              <q-item-section class="text-weight-bold">Lunes a Viernes (Mañana):</q-item-section>
              <q-item-section side>6:30 AM - 10:30 AM</q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="text-weight-bold">Lunes a Viernes (Tarde):</q-item-section>
              <q-item-section side>4:00 PM - 8:00 PM</q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="text-weight-bold">Sábados:</q-item-section>
              <q-item-section side>Cerrado</q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="text-weight-bold">Domingos:</q-item-section>
              <q-item-section side>Cerrado</q-item-section>
            </q-item>
          </q-list>

          <q-separator class="q-my-md" />

          <div class="text-subtitle2 text-weight-medium">Teléfono de contacto</div>
          <div class="text-body1 text-grey-8 q-mt-xs">3214153995</div>
        </q-card>
      </div>

      <!-- Ficha del Encargado -->
      <div class="col-12 col-md-6">
        <q-card flat bordered class="q-pa-md flex flex-center text-center" style="height: 100%;">
          <div class="full-width">
            <div class="text-h6 text-weight-medium q-mb-md">Encargado del Servicio</div>
            <q-avatar size="100px" class="q-mb-md shadow-2 bg-grey-3">
              <img src="@/assets/img/enfermeria2.png" alt="Avatar Encargado">
            </q-avatar>
            <div class="text-subtitle1 text-weight-bold text-grey-9">María Fernanda Gómez Reyes</div>
            <div class="text-body2 text-grey-7 q-mb-xs">enfermera</div>
            <div class="text-caption text-primary">Mafecita1118@gmail.com</div>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
