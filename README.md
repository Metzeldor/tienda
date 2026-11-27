# Tienda web (dropshipping Colombia · pago contra entrega)

Documento maestro: [PROYECTO.md](PROYECTO.md). Léelo antes de modificar código.

**Estado:** Fase 0 (landing estática + `/api/health`). Pedidos, tracking, IA y Dropi vienen en fases posteriores.

## Estructura
- `public/` — sitio estático (directorio de publicación en Cloudflare Pages).
- `functions/` — rutas server-side (Pages Functions), siempre en la raíz.
- `docs/` — decisiones y runbook de despliegue.

## Desarrollo local
```
npx wrangler pages dev public
```

## Despliegue
Ver [docs/RUNBOOK.md](docs/RUNBOOK.md).
