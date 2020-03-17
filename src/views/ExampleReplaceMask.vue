<template>
  <div class="home">
    <div>
      <label>CPF: </label>
      <input type="text" v-mask="'###.###.###-##'" v-model="cpf" />
      {{ $formatReplaceCpfCnpj(cpf, "cpf") }}
    </div>
    <div>
      <label>CNPJ: </label>
      <input type="text" v-mask="'##.###.###/####-##'" v-model="cnpj" />
      {{ $formatReplaceCpfCnpj(cpf, "cnpj") }}
    </div>
    <div>
      <label>CPF (number): </label>
      <input type="text" v-mask="'###.###.###-##'" v-model="cpf" />
      {{ $formatReplaceCpfCnpj(cpfNumber, "cpf") }}
    </div>
    <div>
      <label>CNPJ(number): </label>
      <input type="text" v-mask="'##.###.###/####-##'" v-model="cnpj" />
      {{ $formatReplaceCpfCnpj(cnpjNumber, "cnpj") }}
    </div>
    <div>
      <label>CEP: </label>
      <input type="text" v-mask="'#####-###'" v-model="cep" />
      {{ $formatReplaceCep(cep) }}
    </div>
    <div>
      <label>CEP(number): </label>
      <input type="text" v-mask="'#####-###'" v-model="cepNumber" />
      {{ $formatReplaceCep(cep) }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mask } from 'vue-the-mask'
import masks from '../mixins/masks.js'
export default {
  name: 'Home',
  mixins: [masks],
  directives: { mask },
  data () {
    return {
      cpf: '00093434332',
      cnpj: '00012345759432',
      cpfNumber: 93434332,
      cnpjNumber: 2345759432,
      cep: '99087341',
      cepNumber: 99087341
    }
  }
}
</script>
