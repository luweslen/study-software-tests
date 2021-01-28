# **TESTES DE SOFTWARE**

## **>\_TESTES AUTOMATIZADOS**

> **Testes automatizados** são programas ou _scripts_ simples que exercitam funcionalidades do sistema em teste e fazem verificações automáticas nos efeitos colateriais obtidos.

## **>\_ MODELO V**

> O **Modelo V** representa um **processo de desenvolvimento** que pode ser considerado uma extensão do **modelo em cascata**. Em vez de descer de forma linear, as etapas do processo são dobradas para cima após a fase de codificação, para formar a forma típica de V. O Modelo V demonstra os relacionamentos entre cada fase do ciclo de vida de desenvolvimento e **sua fase de teste associada**.

![](https://arquivo.devmedia.com.br/artigos/Higor_Medeiros/modelo-cascata/figura2.png)

## **>\_ TESTE UNITÁRIO**

> **Testes unitários**, ou também chamados de **testes de unidade**, são responsáveis por testar os **menores trechos de código** do sistema em que possui um comportamento definido.

**EXEMPLO:**

`main.js`

```js
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

`main.test.js`

```js
const sum = require("./main");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1 + 3 is not equal 3", () => {
  expect(sum(1, 3)).not.toBe(3);
});
```

`Retorno Terminal`

```bash
yarn test
```

```bash
yarn run v1.22.4
warning
 PASS  ./main.test.js
  √ adds 1 + 2 to equal 3 (2 ms)
  √ adds 1 + 3 is not equal 3

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.809 s
Ran all test suites.
Done in 3.26s.
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
