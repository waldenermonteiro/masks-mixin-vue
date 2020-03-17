<template>
  <div class="home">
    <div>
      <label>CPF: </label>
      {{ cpf }} -
      {{ $formatCPFCNPJ(cpf, "cpf") }}
    </div>
    <div>
      <label>CNPJ: </label>
      {{ cpf }} -
      {{ $formatCPFCNPJ(cnpj, "cnpj") }}
    </div>
    <div>
      <label>CPF(number): </label>
      {{ cpfNumber }} -
      {{ $formatCPFCNPJ(cpfNumber) }}
    </div>
    <div>
      <label>CNPJ(number): </label>
      {{ cnpjNumber }} -
      {{ $formatCPFCNPJ(cnpjNumber, "cnpj") }}
    </div>
    <div>
      <label>CEP: </label>
      {{ cep }} -
      {{ $formatCEP(cep) }}
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
      cep: '78994928'
    }
  }
}
</script>
