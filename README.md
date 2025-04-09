# 🚀 Pagamentos Mock Server

Este é um servidor Node.js com Express que simula endpoints de um meio de pagamento. Ele é ideal para testar integrações, callbacks e fluxos de pagamento com a VTEX ou outras plataformas.

---

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (recomendado: v18+)
- [npm](https://www.npmjs.com/) (vem com o Node)
- [ngrok](https://ngrok.com/) para expor seu servidor local

---

## 📦 Instalação

### 1. Criar o projeto

Se ainda não tiver, crie a pasta do projeto e entre nela:

```bash
mkdir mock-server
cd mock-server
```

### 2. Inicializar o projeto Node
```bash
npm init -y
```

### 3. Inicializar o projeto Node
```bash
npm install express axios
```

### 4. Rodando o servidor
```bash
node server.js
```

### 5. Em outro terminal instale o ngrok
```bash
brew install ngrok  # se estiver em Mac
# ou
npm install -g ngrok
```

### 5.1 Autentique-se (se necessário)
```bash
ngrok config add-authtoken <seu-token>
```

### 6 Inicie o ngrok na porta 3000
```bash
ngrok http 3000
```

A URL a ser utilizada é essa com o .ngrok-free.app
![image](https://github.com/user-attachments/assets/dd0c4565-c02f-4aea-aae8-527ef59e9d8d)







