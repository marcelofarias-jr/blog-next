# The Blog

Um blog moderno e profissional construído com Next.js, Drizzle ORM e TailwindCSS.

## 🚀 Começando

### Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build e Deploy

```bash
npm run build
npm start
```

## 📋 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento com Turbopack
- `npm run build` - Build de produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa linter
- `npm run db:generate` - Gera migrações Drizzle
- `npm run db:migrate` - Executa migrações
- `npm run seed` - Popula banco com dados iniciais (opcional)

## 🏗️ Arquitetura

- **Frontend**: Next.js 16 + React 19 + TailwindCSS
- **Database**: Turso (Deployed SQLite) + Drizzle ORM
- **Auth**: JWT + bcryptjs
- **Markdown**: React Markdown + Editor

### Estrutura

```
src/
├── actions/          # Server actions (login, posts)
├── app/              # App Router + layouts
├── components/       # Componentes React reutilizáveis
├── db/               # Drizzle config + schemas
├── dto/              # Data Transfer Objects
├── lib/              # Lógica de negócio
├── models/           # Type definitions
├── repositories/     # Data access layer
└── utils/            # Utilitários
```

## 📝 Rotas

Veja [ROTAS.md](ROTAS.md) para detalhes de todas as rotas da aplicação.

## 🚀 Deploy

Veja [SERVER.md](SERVER.md) para instruções completas de deploy em ambiente Linux/Nginx.
