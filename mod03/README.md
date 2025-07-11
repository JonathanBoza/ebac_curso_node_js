# EBAC - Curso Node.js - Módulo 03

**🔗 Repositório GitHub:** https://github.com/JonathanBoza/ebac_curso_node_js/tree/main/mod03

## Exercício: Mastering Git

### Objetivo
Introdução ao Git e controle de versão

### Conteúdo do Módulo
- O mundo open source e tudo que ele tem a oferecer
- Quais plataformas você pode trabalhar com o git em equipe
- Como inicializar, adicionar, 'commitar', 'pushar' e 'pullar' mudanças no git
- Como criar novas branches de trabalho e realizar pull requests

### Passos do Exercício

## 📝 Exercício: Mastering Git

### Requisitos:
1. ✅ Criar uma conta no GitHub
2. ✅ Criar um repositório chamado `nodejs-ebac`, com um README.md nele
3. ✅ Clonar o repositório na sua máquina local
4. ✅ Criar uma pasta chamada `exercicio-git` e um arquivo, dentro dessa pasta, chamado `teste-git.txt`
5. ✅ Fazer a adição, o commit e o push
6. ✅ Criar uma nova branch de trabalho chamada `exercicios`
7. ✅ Adicionar os arquivos de exercício do módulo passado em uma pasta chamada `modulo_2` e criar um pull request para a branch principal

### 🚀 Passo a Passo Executado:

## 1. Conta no GitHub
- ✅ Conta criada: **JonathanBoza**
- ✅ Repositório: https://github.com/JonathanBoza/ebac_curso_node_js

## 2. Repositório nodejs-ebac
- ✅ Repositório criado com README.md
- ✅ Estrutura inicial configurada

## 3. Clone Local
```bash
git clone https://github.com/JonathanBoza/ebac_curso_node_js.git
cd ebac_curso_node_js
```

## 4. Estrutura de Pastas
```
ebac_curso_node_js/
├── mod01/
├── mod02/
├── mod03/
└── exercicio-git/
    └── teste-git.txt
```

## 5. Comandos Git Utilizados
```bash
# Adicionar arquivos
git add .

# Fazer commit
git commit -m "Adiciona exercicio-git e teste-git.txt"

# Fazer push
git push origin main
```

## 6. Branch de Trabalho
```bash
# Criar e mudar para branch exercicios
git checkout -b exercicios

# Listar branches
git branch
```

## 7. Pull Request
```bash
# Adicionar arquivos do módulo 2
git add modulo_2/
git commit -m "Adiciona exercícios do módulo 2"
git push origin exercicios

# Criar pull request via GitHub
```

## 📋 Arquivos do Projeto
- `README.md` - Documentação do exercício
- `exercicio-git/teste-git.txt` - Arquivo teste
- `modulo_2/` - Exercícios do módulo anterior

## 🎯 Comandos Git Essenciais Utilizados

### Configuração Inicial
```bash
git config --global user.name "Jonathan Boza"
git config --global user.email "seu-email@exemplo.com"
```

### Comandos Básicos
```bash
git init                    # Inicializar repositório
git clone <url>            # Clonar repositório
git status                 # Verificar status
git add <arquivo>          # Adicionar arquivo
git add .                  # Adicionar todos os arquivos
git commit -m "mensagem"   # Fazer commit
git push origin <branch>   # Enviar para repositório remoto
git pull origin <branch>   # Baixar do repositório remoto
```

### Branches
```bash
git branch                 # Listar branches
git checkout -b <nome>     # Criar e mudar para branch
git checkout <nome>        # Mudar para branch
git merge <branch>         # Fazer merge
```

### Conclusão
✅ Conta GitHub criada e configurada
✅ Repositório nodejs-ebac criado
✅ Estrutura de pastas organizada
✅ Comandos Git dominados
✅ Workflow de branches implementado
✅ Pull request criado

---

## 📂 Informações do Repositório
- **GitHub:** https://github.com/JonathanBoza/ebac_curso_node_js/tree/main/mod03
- **Pasta:** mod03
- **Autor:** JonathanBoza
- **Curso:** EBAC - Node.js
- **Módulo:** 03 - Introdução ao Git