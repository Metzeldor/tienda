# Runbook de despliegue (Fase 0)

## Cloudflare Pages (conectando GitHub)
1. Sube este repositorio a GitHub (privado).
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Selecciona el repositorio. Configuración de build:
   - Framework preset: None
   - Build command: (vacío)
   - Build output directory: `public`
4. Deploy. Verifica:
   - La landing carga por HTTPS en `*.pages.dev`.
   - `https://TU-PROYECTO.pages.dev/api/health` responde `{"ok":true}`.
   - Se ve bien en un celular.

## Prueba local (opcional)
```
npx wrangler pages dev public
```
