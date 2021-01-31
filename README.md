# **TESTES DE SOFTWARE**

![](https://media.tenor.com/images/b830b2677469fe4fe5750bc79636a4fb/tenor.gif)

> Testes é algo relativamenete comum dentro do ambiente de desenvolvimento. O progaramador em diversas vezes usa uma função de saída de dados - console.log(), print(), System.out.println(), entre outros - para poder verificar se o código escrito está realemente fazendo o que foi programado. Saber como estruturar esses testes de forma organizada e automatizada é o pulo do gato. Mas para isso existem diversas técnicas já utilizadas por devs que simplificam a implementação. Busco trazer algumas definições/exemplos neste repositório.

## **>\_TESTES AUTOMATIZADOS**

> **Testes automatizados** são programas ou _scripts_ simples que exercitam funcionalidades do sistema em teste e fazem verificações automáticas nos efeitos colateriais obtidos.

## **>\_ MODELO V**

> Existem diversos modelos que implementam os testes junto com o desenvolvimento do sofwtare e um deles é o Modelo V. O **Modelo V** representa um **processo de desenvolvimento** que pode ser considerado uma extensão do **modelo em cascata**. Em vez de descer de forma linear, as etapas do processo são dobradas para cima após a fase de codificação, para formar a forma típica de V. O Modelo V demonstra os relacionamentos entre cada fase do ciclo de vida de desenvolvimento e **sua fase de teste associada**.

![](https://arquivo.devmedia.com.br/artigos/Higor_Medeiros/modelo-cascata/figura2.png)

## **>\_ TESTE UNITÁRIO**

> **Testes unitários**, ou também chamados de **testes de unidade**, são responsáveis por testar os **menores trechos de código** do sistema em que possui um comportamento definido.

### **EXEMPLO:**

Neste exemplo foi feito um _script_ para verificar se um número **é pirmo**, caso ele for primo retorna _verdadeiro_ e caso não for retorna _falso_. Em seguida, foi feito um script de teste que busca executar a função. Primeiro testa com números que são primos esparando como retorno _true_. Depois testa com números que não são primos esperando como retorno _false_

`main.js`

```js
function isPrime(number) {
  for (let count = 2; count < number; count++) {
    if (number % count === 0) {
      return false;
    }
  }
  return number > 1;
}

module.exports = isPrime;
```

`main.test.js`

```js
const isPrime = require("./main");

describe("IsPrime test function", () => {
  test("prime numbers return true", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(53)).toBe(true);
    expect(isPrime(67)).toBe(true);
    expect(isPrime(89)).toBe(true);
    expect(isPrime(97)).toBe(true);
  });

  test("non-prime numbers return false", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(27)).toBe(false);
    expect(isPrime(52)).toBe(false);
    expect(isPrime(62)).toBe(false);
    expect(isPrime(72)).toBe(false);
  });
});
```

`Retorno Terminal`

```bash
yarn test
```

```bash
yarn run v1.22.4
$ jest
 PASS  ./main.test.js
  IsPrime test function
    √ prime numbers (3 ms)
    √ non-prime numbers (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        7.645 s
Ran all test suites.
Done in 13.86s.
```

## **>\_ TESTE DE INTEGRAÇÃO**

> **Testes de integração** buscam **erros de relacionamentos** entre quaisquer módulos de um software, incluindo **desde de integrações pequenas até a integração de bibliotecas** das quais um sistema depende, servidores e gerenciadores de bancos de dados.

## **>\_ TESTE DE ACEITAÇÃO**

> Também conhecido como **teste funcional** ou de **história de usuário**, são testes de **correção** e **validação**. Eles são idealmente especificados por clientes ou usuários finais do sistema para verificar se um módulo funciona como foi especificado. Por isso o termo “aceitação”, pois ele verifica se o cliente aceita as funcionalidades que foram implementadas.

## **>\_ TESTE DE FUMAÇA (SMOKE TEST)**

> Testes de fumaça são verificações simples para busca de grandes erros, que geralmente afetam muitas funcionalidades e são fáceis de se detectar. Esse termo também é utilizado em outras áreas do conhecimento, por exemplo, existem testes de fumaça para verificar a vedação de encanamentos e de instrumentos de sopro. É pressionado uma fumaça atóxica dentro dos objetos para verificar se existem rachaduras.

## **>\_ MOCKS OBJECTS**

> **Mock objects** são objetos que **simulam o comportamento** de objetos reais **de forma controlada**. São normalmente criados para testar o comportamento de outro objeto.

## **>\_ FIXTURES**

> **Fixtures** são uma **solução de automação** na preparação do ambiente de teste. Ele garante que todos os testes serão rodados com um conjunto de dados iniciais padrão, garantindo assim a integridade dos testes. Para isto, a cada início de testes, todos os dados são reiniciados e preparados.

## 👨‍💻 Feito por

<table>
  <tr>
    <td align="center"><img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/36344130?s=460&u=8f38afb60832d4576570ab1672894ac935e65db6&v=4" width="100px;" alt=""/><br /><sub><b><a href="https://linkedin.com/in/lucianoweslen11" title="Luciano">Luciano W. da Silva</a></b></sub><br/>Desenvolvedor Web</td>
  </tr>
</table>

<br/>

![](https://img.shields.io/badge/Nunca%20esque%C3%A7a%20de-aproveitar%20todos%20os%20momentos-informational?style=for-the-badge&logo=quote&logoColor=white&color=f4a261)

🧡
