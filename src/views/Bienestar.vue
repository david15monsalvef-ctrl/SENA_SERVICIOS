<template>
  <div class="q-pa-md" style="max-width: 900px; margin: 0 auto;">
    <q-img src="@/assets/img/bienestar2.jpeg" style="height: 250px; border-radius: 8px;" class="q-mb-md" />
    
    <h1 class="text-h4 text-weight-bold text-primary q-my-sm">Bienestar al Aprendiz</h1>
    <p class="text-body1 text-grey-8 q-mb-md" style="line-height: 1.6;">
     Bienestar al aprendiz es una estrategia institucional para contribuir en la permanencia de los aprendices en su proceso formativo. Los servicios que presta están alineados con los objetivos estrátegicos y operativos establecidos en la Política Nacional Integral de Bienestar al aprendiz, tales como el reconomiento de la Cultura como creadora de identidad, generadora de inclusión y catalizadora de diversidad; Generación en los aprendices prácticas asociadas a la prevención de la enfermedad y promoción de la salud a través de la gestión con entidades competentes (salud física y mental); fortalecimiento de habilidades blandas y para la vida; deporte, actividad física y  aprovechamiento del tiempo libre como elementos fundamentales en mejoramiento de la formación profesional integral; promoción de expresiones de arte de los aprendices en su formación profesional integral. Además de lo anterior, desde Bienestar al aprendiz se manejan temas como apoyos socioecnómicos (apoyos de sostenimiento regular, FIC, medios tecnológicos, alimentación y transporte), monitorias y fortalecimiento y ejercicio de liderazgo.
    </p>

    <div class="row q-col-gutter-md q-mb-lg">
      <!-- Horarios y Teléfono -->
      <div class="col-12 col-md-6">
        <q-card flat bordered class="q-pa-md" style="height: 100%;">
          <div class="text-h6 text-weight-medium q-mb-sm">Horarios de Atención</div>
          <q-list dense class="q-mb-md">
            <q-item>
              <q-item-section class="text-weight-bold">Lunes a Viernes (Mañana):</q-item-section>
              <q-item-section side>6:30 AM - 10:00 AM</q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="text-weight-bold">Lunes a Viernes (Tarde):</q-item-section>
              <q-item-section side>4:00 PM - 8:00 PM</q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="text-weight-bold">Sábados:</q-item-section>
              <q-item-section side>8:00 AM - 4:00 PM</q-item-section>
            </q-item>
            <q-item>
              <q-item-section class="text-weight-bold">Domingos:</q-item-section>
              <q-item-section side>Cerrado</q-item-section>
            </q-item>
          </q-list>

          <q-separator class="q-my-md" />

          <div class="text-subtitle2 text-weight-medium">Teléfono de contacto</div>
          <div class="text-body1 text-grey-8 q-mt-xs">+57 3176377670</div>
        </q-card>
      </div>

      <!-- Ficha del Encargado -->
      <div class="col-12 col-md-6">
        <q-card flat bordered class="q-pa-md flex flex-center text-center" style="height: 100%;">
          <div class="full-width">
            <div class="text-h6 text-weight-medium q-mb-md">Encargado del Servicio</div>
            <q-avatar size="100px" class="q-mb-md shadow-2 bg-grey-3">
              <img src="@/assets/img/bienestar.jpeg" alt="Avatar Encargado">
            </q-avatar>
            <div class="text-subtitle1 text-weight-bold text-grey-9">Maria Delea Arenas Mejía </div>
            <div class="text-body2 text-grey-7 q-mb-xs">; líder de bienestar al aprendiz </div>
            <div class="text-caption text-primary">mdarenas@sena.edu.com</div>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
