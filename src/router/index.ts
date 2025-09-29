import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/components/CpsIndex.vue'
import Socio from '@/components/servicio/CpsSocio.vue'
import Creditos from '@/components/servicio/CpsCreditos.vue'
import Sucursales from '@/components/servicio/CpsSucursales.vue'
import CuentasDeposito from '@/components/servicio/CpsCuentasDeposito.vue'
import ServicioApoyoFunerario from '@/components/beneficios/CpsServicioApoyoFunerario.vue'
import Asesoria from '@/components/beneficios/CpsAsesoria.vue'
import Protección from '@/components/beneficios/CpsProtección.vue'
import Medico from '@/components/beneficios/CpsMedico.vue'
import Servicios from '@/components/beneficios/CpsServicios.vue'
import Educoof from '@/components/servicio/CpsEducoof.vue'
import Alianzas from '@/components/btns/CpsAlianzas.vue'
import Revistas from '@/components/btns/CpsRevistas.vue'
import Aviso from '@/components/info/CpsAviso.vue'
import DespachosCobranza from '@/components/info/CpsDespachosCobranza.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Index,
    },
    {
      path: '/servicio/socio',
      name: 'socio',
      component: Socio,
    },
    {
      path: '/servicio/creditos',
      name: 'creditos',
      component: Creditos,
    },
    {
      path: '/servicio/sucursales',
      name: 'sucursale',
      component: Sucursales,
    },
    {
      path: '/servicio/cuentas-deposito',
      name: 'cuentas-deposito',
      component: CuentasDeposito,
    },
    {
      path: '/beneficios/servicio-apoyo-funerario',
      name: 'servicio-apoyo-funerario',
      component: ServicioApoyoFunerario,
    },
    {
      path: '/beneficios/asesoria',
      name: 'asesoria',
      component: Asesoria,
    },
    {
      path: '/beneficios/proteccion',
      name: 'protección',
      component: Protección,
    },
    {
      path: '/beneficios/medico',
      name: 'medico',
      component: Medico,
    },
    {
      path: '/beneficios/servicios',
      name: 'servicios',
      component: Servicios,
    },
    {
      path: '/servicio/educoof',
      name: 'educoof',
      component: Educoof,
    },
    {
      path: '/btns/alianzas',
      name: 'alianzas',
      component: Alianzas,
    },
    {
      path: '/btns/revistas',
      name: 'revistas',
      component: Revistas,
    },
    {
      path: '/info/aviso',
      name: 'aviso',
      component: Aviso,
    },
    {
      path: '/info/despachos-cobranza',
      name: 'despachos-cobranza',
      component: DespachosCobranza,
    },
  ],
})

export default router
