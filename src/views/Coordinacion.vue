<template>
  <div class="q-pa-md" style="max-width: 900px; margin: 0 auto;">
    <q-img src="/img/coordinacion.png" style="height: 250px; border-radius: 8px;" class="q-mb-md" />
    
    <h1 class="text-h4 text-weight-bold text-primary q-my-sm">Coordinación Académica</h1>
    <p class="text-body1 text-grey-8 q-mb-md" style="line-height: 1.6;">
      Instancia encargada de gestionar los procesos formativos, seguimiento al rendimiento académico, novedades de matrícula, horarios y trámites reglamentarios del programa. Apoyamos el tema de novedades de los aprendices, retiros, deserción, traslados, aplazamientos que corresponden a la formación titulada del SENA. También se apoya con el tema de la programación de los instructores para la formación, logística de los ambientes y que los ambientes estén en óptimas condiciones.
    </p>

    <div class="row q-col-gutter-md q-mb-lg">
      <!-- Horarios y Teléfono -->
      <div class="col-12 col-md-6">
        <q-card flat bordered class="q-pa-md" style="height: 100%;">
          <div class="text-h6 text-weight-medium q-mb-sm">Horarios de Atención</div>
          <q-list dense class="q-mb-md">
            <q-item>
              <q-item-section class="text-weight-bold">Lunes a Viernes (Mañana):</q-item-section>
              <q-item-section side>7:30 AM - 12:00 PM</q-item-section>
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
          <div class="text-body1 text-grey-8 q-mt-xs">No registra</div>
        </q-card>
      </div>

      <!-- Ficha del Encargado -->
      <div class="col-12 col-md-6">
        <q-card flat bordered class="q-pa-md flex flex-center text-center" style="height: 100%;">
          <div class="full-width">
            <div class="text-h6 text-weight-medium q-mb-md">Encargado del Servicio</div>
            <q-avatar size="100px" class="q-mb-md shadow-2 bg-grey-3">
              <img src="/img/coordinacion2.jpeg" alt="Avatar Encargado">
            </q-avatar>
            <div class="text-subtitle1 text-weight-bold text-grey-9">Luis Carlos Reina</div>
            <div class="text-body2 text-grey-7 q-mb-xs">coordinador académico</div>
            <div class="text-caption text-primary">lreinas@sena.edu.co</div>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
