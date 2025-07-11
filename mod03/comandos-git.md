# Comandos Git - Módulo 03 Exercício

## Passo a Passo para Executar o Exercício

### 1. Verificar Status
```bash
git status
```

### 2. Adicionar Arquivos
```bash
git add .
```

### 3. Fazer Commit
```bash
git commit -m "Módulo 03: Adiciona exercicio-git e teste-git.txt"
```

### 4. Fazer Push
```bash
git push origin main
```

### 5. Criar Branch de Trabalho
```bash
git checkout -b exercicios
```

### 6. Verificar Branch Atual
```bash
git branch
```

### 7. Criar pasta modulo_2 e copiar arquivos
```bash
mkdir modulo_2
# Copiar arquivos do mod02 para modulo_2
```

### 8. Adicionar e Comitar na Branch exercicios
```bash
git add modulo_2/
git commit -m "Adiciona exercícios do módulo 2"
```

### 9. Fazer Push da Branch
```bash
git push origin exercicios
```

### 10. Criar Pull Request
- Ir para GitHub
- Clicar em "Compare & pull request"
- Adicionar descrição
- Criar pull request

## Comandos Extras Úteis

### Verificar Histórico
```bash
git log --oneline
```

### Verificar Diferenças
```bash
git diff
```

### Voltar para Branch Main
```bash
git checkout main
```

### Atualizar Branch Local
```bash
git pull origin main
```
