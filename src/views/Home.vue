<template>
  <q-page class="q-pa-md">
    <!-- Banner Principal estilo Centro Agroturístico SENA -->
    <div class="hero-banner relative-position flex flex-center text-center q-pa-xl rounded-borders q-mb-lg shadow-2">
      <div class="hero-overlay"></div>
      <div class="relative-position z-top text-white">
        <!-- Logo real del SENA desde public/img -->
        <q-img 
          src="/img/LGOSENA.png" 
          alt="Logo SENA" 
          style="width: 90px; height: 90px;" 
          class="q-mb-md"
          contain
        />
        <h1 class="text-h3 text-weight-bold q-mb-xs">Centro Agroturístico SENA</h1>
        <p class="text-subtitle1 text-weight-medium">Regional Santander - San Gil</p>
      </div>
    </div>

    <!-- Sección de Información / Acerca de la Institución y Datos de Contacto -->
    <div class="row q-col-gutter-lg q-mb-xl">
      <div class="col-12 col-md-8">
        <div class="text-h5 text-weight-bold text-primary q-mb-sm flex items-center">
          <q-icon name="domain" class="q-mr-sm" /> Acerca de la Institución
        </div>
        <p class="text-body1 text-grey-8 text-justify" style="line-height: 1.7;">
          El <strong>Centro Agroturístico SENA San Gil</strong> es una entidad pública enfocada en brindar formación profesional integral gratuita para el desarrollo técnico, tecnológico y social del sur del departamento de Santander. Cuenta con ambientes reales de aprendizaje para sectores agropecuarios, turísticos, comerciales y de las tecnologías de la información.
        </p>
      </div>

      <div class="col-12 col-md-4">
        <q-card class="bg-grey-1 shadow-1 q-pa-md full-height">
          <div class="q-mb-md">
            <div class="text-subtitle1 text-weight-bold text-primary flex items-center">
              <q-icon name="location_on" class="q-mr-xs text-negative" /> Ubicación Principal
            </div>
            <div class="text-body2 text-grey-8 q-pl-md">Cl. 22 #9 - 82, San Gil, Santander</div>
          </div>
          <div>
            <div class="text-subtitle1 text-weight-bold text-primary flex items-center">
              <q-icon name="phone" class="q-mr-xs text-positive" /> Contacto Central
            </div>
            <div class="text-body2 text-grey-8 q-pl-md">+57 607 724 8113</div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
// Lógica de la página principal
</script>

<style scoped>
.hero-banner {
  background-image: url('/img/cafeteria2.jpeg');
  background-size: cover;
  background-position: center;
  min-height: 320px;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(20, 115, 69, 0.85) 0%, rgba(0, 51, 30, 0.9) 100%);
  border-radius: inherit;
}
</style>