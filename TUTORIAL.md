# 🛡️ CyberFolio — Tutoriel complet : Créer un blog cybersécurité sur GitHub Pages

## Guide de A à Z, même pour un débutant total

---

## 📋 Table des matières

1. [Prérequis](#1-prérequis)
2. [Création du repository GitHub](#2-création-du-repository-github)
3. [Installation locale](#3-installation-locale)
4. [Structure du projet](#4-structure-du-projet)
5. [Mise en ligne sur GitHub Pages](#5-mise-en-ligne-sur-github-pages)
6. [Ajout de contenu](#6-ajout-de-contenu)
7. [SEO de base](#7-seo-de-base)
8. [Domaine personnalisé](#8-domaine-personnalisé-optionnel)
9. [HTTPS](#9-https)
10. [Astuces et maintenance](#10-astuces-et-maintenance)

---

## 1. Prérequis

**Ce qu'il te faut :**
- Un compte GitHub (gratuit) → https://github.com
- Git installé sur ton PC
- Un éditeur de code (VS Code recommandé)
- Un terminal (Terminal/iTerm sur Mac, Git Bash sur Windows, ou le terminal Linux)

**Pourquoi HTML pur et pas Jekyll/Hugo ?**  
Ce tutoriel utilise du **HTML + CSS + JS pur** (pas de build tools, pas de Jekyll, pas de Ruby). C'est le chemin le plus simple pour un débutant : tu push tes fichiers, GitHub Pages les sert directement. Pas de dépendances, pas de bugs de build, ça marche immédiatement.

> 💡 Si plus tard tu veux migrer vers Hugo ou Astro, la structure est prête. Mais pour démarrer, restons simples.

---

## 2. Création du repository GitHub

### Étape 2.1 — Créer le repo

1. Va sur https://github.com/new
2. **Nom du repository** : `tonusername.github.io`  
   ⚠️ Remplace `tonusername` par ton vrai username GitHub (ex: `h4ck3r.github.io`)
3. **Public** (obligatoire pour GitHub Pages gratuit)
4. Coche "Add a README file"
5. Clique sur **Create repository**

### Étape 2.2 — Cloner en local

```bash
# Ouvre ton terminal et clone le repo
git clone https://github.com/tonusername/tonusername.github.io.git

# Entre dans le dossier
cd tonusername.github.io
```

---

## 3. Installation locale

### Étape 3.1 — Installer Git

**macOS :**
```bash
# Avec Homebrew
brew install git

# Ou : Xcode Command Line Tools
xcode-select --install
```

**Windows :**
- Télécharge Git : https://git-scm.com/download/win
- Installe avec les options par défaut
- Utilise "Git Bash" comme terminal

**Linux (Debian/Ubuntu) :**
```bash
sudo apt update && sudo apt install git -y
```

### Étape 3.2 — Configurer Git

```bash
git config --global user.name "Ton Nom"
git config --global user.email "ton@email.com"
```

### Étape 3.3 — Installer VS Code (recommandé)

- Télécharge : https://code.visualstudio.com
- Extensions utiles :
  - **Live Server** (prévisualisation en temps réel)
  - **Prettier** (formatage automatique)
  - **Auto Rename Tag** (renomme les balises HTML)

### Étape 3.4 — Tester en local

```bash
# Dans le dossier du projet, lance un serveur local :

# Option 1 : avec Python (déjà installé sur Mac/Linux)
python3 -m http.server 8000

# Option 2 : avec l'extension Live Server de VS Code
# → clic droit sur index.html → "Open with Live Server"

# Option 3 : avec npx (si Node.js est installé)
npx serve .
```

Ouvre ton navigateur → `http://localhost:8000`

---

## 4. Structure du projet

Voici l'arborescence complète du site :

```
tonusername.github.io/
├── index.html              ← Page d'accueil
├── blog.html               ← Liste de tous les articles
├── about.html              ← Page "À propos"
├── projects.html           ← Page Projets
├── contact.html            ← Page Contact
├── 404.html                ← Page d'erreur 404
├── article-pentest.html    ← Article exemple : Pentest
├── article-osint.html      ← Article exemple : OSINT
├── article-reverse.html    ← Article exemple : Reverse Engineering
├── article-ctf.html        ← Article exemple : CTF Writeup
├── css/
│   └── style.css           ← Styles (dark/light, glassmorphism, animations)
├── js/
│   └── main.js             ← JavaScript (thème, menu, filtres, animations)
├── images/                 ← Dossier pour tes images
│   └── og-cover.png        ← Image Open Graph (pour les partages réseaux sociaux)
├── CNAME                   ← (optionnel) Pour domaine personnalisé
├── robots.txt              ← SEO : instructions pour les moteurs de recherche
├── sitemap.xml             ← SEO : plan du site
└── README.md               ← Description du projet
```

### Ce que fait chaque fichier :

| Fichier | Rôle |
|---------|------|
| `index.html` | Page d'accueil avec hero, stats, articles vedettes |
| `blog.html` | Liste filtrée et recherchable de tous les articles |
| `article-*.html` | Articles individuels avec sommaire et barre de lecture |
| `about.html` | Bio, compétences, parcours |
| `projects.html` | Portfolio de projets/outils |
| `contact.html` | Formulaire de contact + liens sociaux |
| `css/style.css` | Design complet (800+ lignes, dark/light, responsive) |
| `js/main.js` | Interactivité (thème, filtres, animations scroll) |

---

## 5. Mise en ligne sur GitHub Pages

### Étape 5.1 — Copier les fichiers du projet

Copie tous les fichiers fournis (index.html, blog.html, css/, js/, etc.) dans ton dossier `tonusername.github.io/`.

### Étape 5.2 — Push vers GitHub

```bash
# Ajoute tous les fichiers
git add .

# Crée un commit
git commit -m "🚀 Lancement du blog cybersécurité"

# Push vers GitHub
git push origin main
```

### Étape 5.3 — Activer GitHub Pages

1. Va sur ton repo GitHub → **Settings** → **Pages**
2. Source : **Deploy from a branch**
3. Branch : **main** / dossier **/ (root)**
4. Clique **Save**

### Étape 5.4 — Vérifier

Attends 1-2 minutes, puis ouvre : `https://tonusername.github.io`

🎉 **Ton blog est en ligne !**

---

## 6. Ajout de contenu

### Comment ajouter un nouvel article

1. **Duplique** un article existant (ex: `article-pentest.html`)
2. **Renomme** le fichier (ex: `article-mon-writeup.html`)
3. **Modifie** le contenu : titre, texte, blocs de code, tags
4. **Ajoute une carte** dans `blog.html` et `index.html` qui pointe vers ce fichier
5. **Push** vers GitHub :

```bash
git add .
git commit -m "📝 Nouvel article : Mon writeup HTB"
git push origin main
```

### Types de contenu suggérés

- **Pentest** : Méthodologies, outils, vulnérabilités (OWASP Top 10)
- **OSINT** : Techniques de reconnaissance, outils, études de cas
- **Reverse Engineering** : Analyses de malware, crackmes, unpacking
- **CTF Writeups** : Solutions pas à pas de challenges (HTB, THM, Root-Me)
- **Blue Team** : Détection (SIEM, Sigma), forensics, incident response
- **Red Team** : Évasion, persistence, C2 frameworks
- **Veille technique** : CVE récentes, nouvelles techniques, outils à découvrir

### Template d'article rapide

```html
<!-- Copie article-pentest.html et modifie ces éléments : -->

<!-- 1. Le tag de catégorie -->
<span class="card-tag tag-ctf">CTF</span>

<!-- 2. Le titre -->
<h1>Ton titre d'article ici</h1>

<!-- 3. Les métadonnées -->
<span>📅 19 Février 2026</span>
<span>⏱️ 8 min de lecture</span>

<!-- 4. Le sommaire (TOC) -->
<!-- 5. Les sections avec <h2>, <h3>, <p>, <pre><code> -->
<!-- 6. Les blocs de code avec la syntaxe correcte -->
```

---

## 7. SEO de base

### 7.1 — Balises meta (déjà incluses)

Chaque page contient déjà les balises essentielles :
- `<title>` unique par page
- `<meta name="description">` (150-160 caractères)
- Open Graph tags (pour Facebook, LinkedIn)
- Twitter Card tags

### 7.2 — Fichier robots.txt

Crée ce fichier à la racine :

```
User-agent: *
Allow: /
Sitemap: https://tonusername.github.io/sitemap.xml
```

### 7.3 — Fichier sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tonusername.github.io/</loc>
    <lastmod>2026-02-19</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tonusername.github.io/blog.html</loc>
    <lastmod>2026-02-19</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://tonusername.github.io/article-pentest.html</loc>
    <lastmod>2026-02-15</lastmod>
    <priority>0.8</priority>
  </url>
  <!-- Ajoute une entrée pour chaque article -->
</urlset>
```

### 7.4 — Bonnes pratiques SEO

- **URLs propres** : `article-pentest.html` plutôt que `article123.html`
- **Titres H1 uniques** par page
- **Images** : ajoute des attributs `alt` descriptifs
- **Liens internes** : lie tes articles entre eux
- **Performance** : le site est déjà léger (pas de frameworks lourds)
- **Soumets ton sitemap** à Google Search Console → https://search.google.com/search-console

---

## 8. Domaine personnalisé (optionnel)

### Étape 8.1 — Acheter un domaine

Registrars recommandés :
- **Cloudflare Domains** (prix coûtant, recommandé)
- **Namecheap**
- **OVH** (populaire en France)
- **Gandi**

Exemple : `cyberfolio.dev` ou `tonnom.fr`

### Étape 8.2 — Configurer les DNS

Chez ton registrar, ajoute ces enregistrements DNS :

```
Type    Nom     Valeur
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     tonusername.github.io.
```

### Étape 8.3 — Fichier CNAME

Crée un fichier `CNAME` à la racine de ton repo :

```
cyberfolio.dev
```

### Étape 8.4 — Activer dans GitHub

1. Settings → Pages → Custom domain
2. Entre ton domaine : `cyberfolio.dev`
3. Coche **Enforce HTTPS**
4. Attends la propagation DNS (jusqu'à 24h)

---

## 9. HTTPS

### Avec GitHub Pages (automatique)

- Les sites `*.github.io` ont HTTPS par défaut
- Pour un domaine custom : coche "Enforce HTTPS" dans Settings → Pages
- GitHub utilise Let's Encrypt pour les certificats

### Vérification

```bash
# Vérifie que HTTPS fonctionne
curl -I https://tonusername.github.io

# Tu dois voir :
# HTTP/2 200
# server: GitHub.com
```

---

## 10. Astuces et maintenance

### Workflow quotidien

```bash
# 1. Crée/modifie tes fichiers
# 2. Teste en local (Live Server ou python3 -m http.server)
# 3. Commit et push

git add .
git commit -m "📝 Description de la modification"
git push origin main

# Le site se met à jour en 1-2 minutes
```

### Personnalisation rapide

**Changer les couleurs :**  
→ Modifie les variables CSS dans `css/style.css` (section `:root`)

**Changer le nom du blog :**  
→ Remplace "CyberFolio" dans tous les fichiers HTML (Ctrl+Shift+H dans VS Code)

**Ajouter Google Analytics :**  
→ Ajoute le script GA4 juste avant `</head>` dans chaque page

**Ajouter un système de commentaires :**  
→ Intègre [Giscus](https://giscus.app/) (gratuit, basé sur GitHub Discussions)

**Rendre le formulaire fonctionnel :**  
→ Inscris-toi sur [Formspree](https://formspree.io/) et change l'action du form :
```html
<form class="contact-form" action="https://formspree.io/f/TONID" method="POST">
```

### Migrer vers Hugo / Astro (plus tard)

Quand tu auras 20+ articles et voudras automatiser la gestion de contenu :
- **Hugo** : Le plus rapide. Écris en Markdown, Hugo génère le HTML.
- **Astro** : Moderne, flexible, supporte MDX et React components.
- Les deux se déploient sur GitHub Pages avec GitHub Actions.

---

## 🎉 Résumé des commandes

```bash
# === SETUP INITIAL ===
git clone https://github.com/tonusername/tonusername.github.io.git
cd tonusername.github.io

# Copie les fichiers du projet ici...

git add .
git commit -m "🚀 Lancement du blog"
git push origin main

# === AJOUT D'UN ARTICLE ===
# 1. Copie article-pentest.html → article-nouveau.html
# 2. Modifie le contenu
# 3. Ajoute une carte dans blog.html
git add .
git commit -m "📝 Nouvel article : titre"
git push origin main

# === TEST LOCAL ===
python3 -m http.server 8000
# ou
npx serve .
```

---

**Bravo !** Tu as maintenant un blog cybersécurité professionnel, avec un design Apple-like, responsive, dark/light mode, et déployé gratuitement sur GitHub Pages.

Le plus important maintenant : **écris du contenu régulièrement**. Un blog vit par ses articles. Bonne écriture et bons CTF ! 🚩
