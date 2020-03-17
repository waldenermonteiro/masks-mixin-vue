export default {
  methods: {
    $formatCPFCNPJ (cpfCnpj = '', type = 'cpf') {
      cpfCnpj = this.$addZeroLeftMaskCpfCnpj(cpfCnpj.toString(), type)
      const typeCpfCnpj = {
        cpf: cpfCnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'),
        cnpj: cpfCnpj.replace(
          /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
          '$1.$2.$3/$4-$5'
        )
      }
      return typeCpfCnpj[type]
    },
    $formatReplaceCpfCnpj (cpfCnpj, type = 'cpf') {
      const typeCpfCnpj = {
        number: parseInt(cpfCnpj.toString().replace(/[^0-9]+/g, '')),
        string: this.$addZeroLeftMaskCpfCnpj(cpfCnpj.toString().replace(/[^0-9]+/g, ''), type)
      }
      return typeCpfCnpj[typeof cpfCnpj]
    },
    $formatCEP (cep = '') {
      const cepString = cep === '' || cep === null ? null : cep.toString()
      return cepString === null
        ? ''
        : cepString.replace(/(\d{5})(\d{3})/, '$1-$2')
    },
    $formatReplaceCep (cep) {
      const typeCep = {
        number: parseInt(cep.toString().replace(/[^0-9]+/g, '')),
        string: cep.toString().replace(/[^0-9]+/g, '')
      }
      return typeCep[typeof cep]
    },
    $formatPhoneNumber (phone = '') {
      return phone === null
        ? ''
        : phone.length === 9
          ? phone.replace(/(\d{5})(\d{4})/, '$1-$2')
          : phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
    },
    $formatStatus (val = '') {
      return val ? 'Ativo' : 'Inativo'
    },
    $formatReplacePhone (phone) {
      phone = phone.replace(/[^0-9]+/g, '')
      return phone
    },
    $formatReplaceAgencyAccountBank (number = '') {
      if (typeof number === 'number') return number
      number = number.replace('-', '')
      return parseInt(number) ? parseInt(number) : ''
    },
    $addZeroLeftMaskCpfCnpj (cpfCnpj, type) {
      return type === 'cpf'
        ? this.addZeroLeftString(cpfCnpj, 11)
        : this.addZeroLeftString(cpfCnpj, 14)
    },
    addZeroLeftString (num, size) {
      let s = num + ''
      while (s.length < size) s = '0' + s
      return s
    },
    $formatDateBr (date) {
      if (date === null) return ''
      const pattern = /(\d{4})-(\d{2})-(\d{2})/g
      const getDate = pattern.exec(date)[0]
      return getDate.replace(pattern, '$3/$2/$1')
    },
    $formatDateBrInApi (date) {
      if (date === null) return ''
      const pattern = /(\d{2})\/(\d{2})\/(\d{4})/g
      const getDate = pattern.exec(date)[0]
      return getDate.replace(pattern, '$3-$2-$1')
    },
    $formatDate (val) {
      function pad (val) {
        return val < 10 ? '0' + val : val
      }
      const d = new Date(val)
      return !val
        ? ''
        : [pad(d.getMonth() + 1), pad(d.getDate()), d.getFullYear()].join('/')
    },
    $formatDateApi (val) {
      function pad (val) {
        return val < 10 ? '0' + val : val
      }
      var d = new Date(val)
      return !val
        ? ''
        : [d.getFullYear(), pad(d.getMonth() + 1), pad(d.getDate())].join('-')
    },
    $formatAgencyBank (agency) {
      return this.addZeroLeftString(agency, 4)
    },
    $formatAccountBank (account) {
      account = account.toString()
      const patt = /^([0-9]{7})$/
      patt.test(account)
      const lastChar = account.substr(account.length - 1)
      const xStr = account.substring(0, account.length - 1)
      return this.addZeroLeftString(xStr + '-' + lastChar, 11)
    },
    $formatCurrencyBrazil (value) {
      const val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    $getMoneyApi (value) {
      return parseFloat(value + '').toFixed(2)
    },
    $setMoneyApi (value) {
      return value.parseFloat()
    },
    $convertToNumberApi (value) {
      value = value.replace(/[^0-9]/g, '')
      const lastChar = value.substr(value.length - 2)
      const xStr = value.substring(0, value.length - 2)
      return parseFloat(xStr + '.' + lastChar)
    }
  }
}
