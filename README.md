# GitHub Actions Studies

Laboratório prático de **CI/CD com GitHub Actions**, usando uma aplicação React + TypeScript + Vite como base para testar automações de build, lint, deploy, releases e qualidade.

## Stack

- GitHub Actions
- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint

## Objetivo

O repositório existe para transformar conceitos de CI/CD em workflows versionados e executáveis.

Exemplos de responsabilidades estudadas:

- integração contínua;
- lint e validação de qualidade;
- build automatizado;
- deploy;
- publicação no GitHub Pages;
- releases;
- segurança;
- automação baseada em eventos.

## Estrutura

```text
.github/
└── workflows/
```

Cada arquivo YAML em `.github/workflows` representa um workflow independente.

## Estrutura de um workflow

```yaml
name: CI

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run lint
      - run: npm run build
```

## Executando a aplicação localmente

```bash
npm install
npm run dev
```

Validações:

```bash
npm run lint
npm run build
```

## Conceitos abordados

- triggers;
- jobs;
- steps;
- runners;
- artifacts;
- secrets;
- cache;
- ambientes;
- deploy;
- versionamento de pipelines.

## Propósito

Mais do que reunir exemplos YAML, o projeto serve como evidência prática de automação de pipelines e integração de GitHub Actions a um projeto frontend real.
