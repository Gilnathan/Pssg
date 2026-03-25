# Componente Footer - PSSG

Componente de rodapé reutilizável e responsivo para o evento Porto Seguro Super Geek com estética Geek/Gamer.

## 📦 Instalação

O componente já está em `src/components/Footer/` e está pronto para uso.

## 🎯 Como Usar

### Opção 1: Importar direto no layout principal

No seu arquivo `src/app/layout.js`:

```jsx
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

### Opção 2: Importar em página específica

```jsx
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <div>Conteúdo da página</div>
      <Footer />
    </>
  );
}
```

## 🎨 Características de Design

- ✅ **Responsivo**: Adapta-se perfeitamente para mobile, tablet e desktop
- ✅ **Tema Geek/Gamer**: Fundo escuro (gradiente slate → black) com acentos neon
- ✅ **Cores Vibrantes**: Cyan, Purple, Pink, Green com efeitos hover
- ✅ **Ícones**: Utiliza `lucide-react` (Phone, Mail, Instagram, Copyright)
- ✅ **Efeitos Visuales**: 
  - Gradientes de texto
  - Efeitos de brilho (glow) nos ícones
  - Transições suaves no hover
  - Divisores decorativos
- ✅ **Semântico**: Usa tag HTML `<footer>` apropriadamente

## 📋 Informações Incluídas

- **Contato WhatsApp**: +55 11 96446-0786 (link ativo)
- **E-mail**: Ps.summergeek@gmail.com (link mailto)
- **CNPJ**: 54.875.674/0001-69
- **Instagram**: @ps_summergeek (link ativo)
- **Copyright**: © 2026 PSSG - Porto Seguro Super Geek

## 🔧 Personalizações Possíveis

### Mudar cores principais

Edite `Footer.jsx` e modifique as classes Tailwind:
- `from-cyan-400` → sua cor primária
- `from-pink-400` → sua cor secundária
- `from-purple-400` → sua cor terciária

### Adicionar mais redes sociais

Encontre a seção "Redes Sociais" e duplique a estrutura do botão Instagram:

```jsx
<a
  href="https://seu-link-aqui"
  className="flex items-center space-x-3 group hover:translate-x-1 transition-transform duration-300"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Sua Rede"
>
  {/* Ícone aqui */}
  <YourIcon className="w-5 h-5 text-seuaCor group-hover:text-corHover" />
  <span className="text-gray-300 group-hover:text-corHover text-sm">@seu-perfil</span>
</a>
```

## 📱 Responsividade

- **Mobile** (< 640px): Layout em coluna única, espaçamento reduzido
- **Tablet** (640px - 1024px): 2-3 colunas, espaçamento moderado
- **Desktop** (> 1024px): 3 colunas completas com máxima organização

## ⚙️ Dependências Necessárias

Certifique-se de ter as seguintes dependências instaladas no `package.json`:

```json
{
  "dependencies": {
    "react": "^18+",
    "next": "^14+",
    "lucide-react": "^latest",
    "tailwindcss": "^3+"
  }
}
```

### Instalação (se necessário):

```bash
npm install lucide-react
# ou
yarn add lucide-react
```

## 🎯 Variações e Extensões

### Versão Compacta

Remova a seção "Sobre o Evento" para um footer mais minimalista.

### Versão com Dark Mode Toggle

Integre com a lógica de dark mode do seu projeto (o footer já está otimizado para dark).

### Versão com Newsletter

Adicione um formulário de inscrição newsletter na coluna de "Redes Sociais".

## 📝 Notas Técnicas

- Componente utiliza `'use client'` (Client Component no Next.js 13+)
- Todos os links externos abrem em nova aba (`target="_blank"`)
- Segurança: links externos incluem `rel="noopener noreferrer"`
- Acessibilidade: todos os links têm `aria-label`
- Ano do copyright é dinâmico (atualiza automaticamente)

## 🎪 Exemplo de Integração Completa

Para usar o footer em todo o seu site, edite `src/app/layout.js`:

```jsx
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'PSSG - Porto Seguro Super Geek',
  description: 'Celebrando a cultura geek e gamer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

**Dica**: Use `flex flex-col min-h-screen` no body para garantir que o footer fique no final da página mesmo com pouco conteúdo.

---

**Criado para**: PSSG - Porto Seguro Super Geek  
**Versão**: 1.0  
**Data**: 2026
