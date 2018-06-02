import setValidate from './stateValidate'
import isEmpty from './validations/isEmpt'
import isValidName from './validations/isValidName'
import isValidCpf from './validations/isValidCpf'
import isValidEmail from './validations/isValidEmail'
import isValidPassword from './validations/isValidPassword'

export default (values) => {
  if (!isEmpty(values)) {
    if (!isValidName(values.name)) {
      return setValidate('warning', 'Forneça pelo menos um sobrenome', false)
    } else if (!isValidCpf(values.cpf)) {
      return setValidate('warning', 'Forneça um CPF válido', false)
    } else if (!isValidEmail(values.email)) {
      return setValidate('warning', 'Forneça um E-mail válido', false)
    } else if (values.password !== values.confirmPassword) {
      return setValidate('warning', 'As senhas não conferem', false)
    } else if (!isValidPassword(values.password)) {
      return setValidate('warning', 'A senha não atende ao critério de segurança', false)
    } else {
      return setValidate('positive', 'Dados validados', true)
    }
  } else {
    return setValidate('info', 'Forneça todos os dados necessários para cadastrar um membro a sua equipe', false)
  }
}