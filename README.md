# Página web personal

Práctica de la Escuela Superior de Cómputo (ESCOM-IPN).
Sitio estático y responsivo con secciones de perfil, formación académica,
pasatiempos, datos curiosos de criptografía y contacto.

## Estructura

```
.
├── index.html          Estructura y contenido
├── css/styles.css      Estilos y reglas responsivas
├── js/main.js          Animaciones y demo de cifrado Vigenère
└── assets/             Foto, CV, clave pública e imágenes
```

## Archivos que hay que colocar en assets/

| Archivo                  | Descripción                          |
|--------------------------|--------------------------------------|
| `foto.jpg`               | Fotografía personal (vertical, ~3:4) |
| `CV-Diego.pdf`           | Currículum actualizado               |
| `diego-public-key.asc`   | Clave pública (GPG o SSH)            |
| `hobby-1.jpg` … `-3.jpg` | Imágenes de pasatiempos (opcionales) |

## Ver en local

Abrir `index.html` en el navegador, o levantar un servidor:

```bash
python -m http.server 8000
```

## Tecnologías

HTML5, CSS3 (Grid, Flexbox, custom properties) y JavaScript sin dependencias.
Tipografías: Space Grotesk e IBM Plex (Google Fonts).
