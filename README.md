# 🍰 Tentaciones Briz — Sitio Web

Sitio web de repostería artesanal para **Tentaciones Briz**, Cadereyta Jiménez, Nuevo León.

## 📁 Estructura del proyecto

```
tentaciones-briz/
├── index.html                  ← Página principal
├── assets/
│   ├── css/
│   │   └── style.css           ← Todos los estilos
│   ├── js/
│   │   └── main.js             ← JavaScript (sidebar, filtros, animaciones)
│   └── images/
│       ├── tentacoinesbrizlogo.png
│       ├── pastelillomango.jpeg
│       ├── pastelillomangopedido.jpeg
│       ├── despiecepastelmango.jpeg
│       ├── despiecepastel.jpeg
│       ├── pastelillo.jpeg
│       ├── despiecepastelchocolate.jpeg
│       ├── flan.jpeg
│       ├── flanchocolate.jpeg
│       ├── despiecefaln.jpeg
│       ├── donitas.jpeg
│       ├── donitas1.jpeg
│       ├── donitas2.jpeg
│       ├── cupcake.jpeg
│       ├── cupackes.png
│       ├── cupcakepersonalizado.jpeg
│       ├── empanadaspedido.jpeg
│       ├── empanadasenvio.jpeg
│       └── empanadaspedido2.jpeg
├── .gitignore
└── README.md
```

## 🚀 Cómo subir a GitHub Pages (paso a paso)

### 1. Crear cuenta en GitHub
Ve a [github.com](https://github.com) y crea una cuenta gratuita si no tienes una.

### 2. Crear un repositorio nuevo
- Haz clic en **"New repository"**
- Nombre sugerido: `tentaciones-briz` (o `tentacionesbriz.github.io` para URL más limpia)
- Déjalo en **Public**
- NO marques "Initialize with README"
- Clic en **"Create repository"**

### 3. Subir los archivos
**Opción A — Desde el navegador (más fácil):**
1. En tu repositorio vacío, haz clic en **"uploading an existing file"**
2. Arrastra TODA la carpeta `tentaciones-briz/` (o sube archivo por archivo)
3. Escribe un mensaje como "Primer commit — sitio Tentaciones Briz"
4. Clic en **"Commit changes"**

**Opción B — Con Git (terminal):**
```bash
cd tentaciones-briz
git init
git add .
git commit -m "Primer commit — Tentaciones Briz"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/tentaciones-briz.git
git push -u origin main
```

### 4. Activar GitHub Pages
1. Ve a tu repositorio → **Settings** (Configuración)
2. En el menú izquierdo, busca **"Pages"**
3. En "Source", selecciona **"Deploy from a branch"**
4. En "Branch", elige **`main`** y carpeta **`/ (root)`**
5. Clic en **"Save"**
6. Espera 1–2 minutos y tu sitio estará en:
   `https://TU_USUARIO.github.io/tentaciones-briz/`

### 5. URL personalizada (opcional)
Si compraste un dominio (ej. `tentacionesbriz.com`):
1. En Settings → Pages → "Custom domain"
2. Escribe tu dominio y guarda
3. En tu proveedor de dominio, apunta los DNS a GitHub

---

## ✏️ Cómo actualizar el sitio

Para cambiar precios, agregar productos o modificar texto:
1. Edita `index.html` directamente en GitHub (botón ✏️ del archivo)
2. O súbelo de nuevo desde tu computadora
3. Los cambios se publican automáticamente en 1–2 minutos

---

## 📞 Contacto del negocio

- **WhatsApp:** +52 1 81 8065 1356
- **Facebook:** [facebook.com/tentacionesbriz](https://www.facebook.com/tentacionesbriz/)
- **Ubicación:** Cadereyta Jiménez, Nuevo León, México
