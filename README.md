# GH-Actions

O GitHub Actions é uma plataforma de integração contínua e entrega contínua (CI/CD) que permite automatizar a compilação, testes, builds e pipeline de implantação

## Estrutura do repositório

```bash
.github/
└── workflows/
    ├── ci.yml
    ├── release.yml
    ├── deploy.yml
    └── pages.yml
```

Todo arquivo `.yml` dentro de `workflows` é um workflow independente.

## Estrutura de um Workflow

```yaml
name:

on:

jobs:

steps:
```

Exemplo:

```yaml
name: CI

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22

      - run: npm ci
      - run: npm run lint
      - run: npm test
```

## Convenções de arquivos `YAML`

### 1. `ci.yaml`

Executa a integração contínua.

Geralmente faz:

- checkout
- instalar dependências
- lint
- testes
- build

```text
Push
  ↓
Checkout
  ↓
npm ci
  ↓
ESLint
  ↓
Testes
  ↓
Build
```

### 2. `pages.yml`

Usado para publicar um site no GitHub Pages.

Fluxo:

```text
Push
  ↓
Build
  ↓
Upload Artifact
  ↓
Deploy Pages
```

Muito usado para:

- React
- Vite
- Next (export)
- Documentação

### 3. `release.yml`

Cria releases automaticamente.

Pode:

- gerar changelog
- criar tag
- anexar arquivos
- publicar release

### 4. `deploy.yml`

Realiza deploy em produção.

Pode enviar para:

- VPS
- Docker
- Kubernetes
- Azure
- AWS
- Google Cloud
- Cloudflare
- Vercel
- Netlify

### 5. `lint.yml`

Executa apenas verificações de qualidade.

```text
Checkout
  ↓
ESLint
  ↓
Prettier
  ↓
Type Checking
```

### 6. `test.yml`

Executa apenas testes.

Exemplo:

```text
Node
  ↓
npm test
  ↓
Coverage
```

### 7. `security.yml`

Executa verificações de segurança.

Pode utilizar ferramentas como:

- Dependabot
- CodeQL
- Trivy
- Snyk

### 8. `docker.yml`

Constrói imagens Docker.

Fluxo:

```text
Checkout
  ↓
docker build
  ↓
docker push
```

### 9. `publish.yml`

Publica bibliotecas.

Exemplo:

- npm
- NuGet
- Maven
- PyPI
- crates.io

### 10. `deploy.yml`

Responsável por publicar a aplicação em um ambiente de destino (produção, homologação ou desenvolvimento).

O deploy pode ser realizado para:

- VPS (SSH/SCP)
- Docker
- Kubernetes
- Azure
- AWS
- Google Cloud
- Cloudflare
- Vercel
- Netlify
- Servidores on-premises

Fluxo genérico:

```text
Checkout
  ↓
Build
  ↓
Autenticação
  ↓
Deploy
  ↓
Verificação
```

## Arquivos auxiliares

Além dos workflows, a pasta .github pode conter outros recursos.

```bash
.github/
│
├── workflows/
│
├── ISSUE_TEMPLATE/
│   ├── bug.yml
│   └── feature.yml
│
├── PULL_REQUEST_TEMPLATE.md
│
├── CODEOWNERS
│
├── dependabot.yml
│
└── labels.yml
```

### ISSUE_TEMPLATE

Cria formulários para abertura de Issues.

Exemplo:

```text
Reportar Bug

Solicitar Funcionalidade

Pergunta
```

### ``PULL_REQUEST_TEMPLATE.md``

Modelo preenchido automaticamente ao abrir um Pull Request.

Exemplo:

```text
## O que foi alterado?

## Como testar?

## Checklist

- [ ] Testado
- [ ] Documentado
```

### CODEOWNERS

Define responsáveis por partes específicas do projeto.

Exemplo:

```text
/src/ @ed
/docs/ @ed
```

Quando alguém altera esses arquivos, o GitHub solicita revisão dos responsáveis.

### dependabot.yml

Mantém dependências atualizadas automaticamente.

Exemplo:

```text
npm
  ↓
Nova versão
  ↓
Pull Request automático
```

## Organização recomendada

Para um projeto com uma estrutura simples e eficiente seria:

```bash
.github/
│
├── workflows/
│   ├── ci.yml          # Testes + Build
│   ├── deploy.yml      # Publicação da aplicação
│   ├── pages.yml       # Deploy no GitHub
│   ├── release.yml     # Criação de releases
│   └── security.yml    # Análise de segurança
│
├── ISSUE_TEMPLATE/
│   ├── bug.yml
│   └── feature.yml
│
├── PULL_REQUEST_TEMPLATE.md
├── CODEOWNERS
└── dependabot.yml
```

Essa organização separa responsabilidades, facilita a manutenção e torna o pipeline mais modular. Cada workflow cuida de uma etapa específica (integração contínua, deploy, releases ou segurança), permitindo evoluir o processo de automação conforme o projeto cresce.
