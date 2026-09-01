# Seguridad

Sitio estático sin autenticación, backend propio ni base de datos. El formulario transmite nombre, correo, marca y mensaje a Netlify Forms.

- SEC-001: CSP restringe recursos al sitio y a imágenes de Unsplash; bloquea objetos y framing.
- SEC-002: `nosniff`, política de referencia y permisos de cámara, micrófono y ubicación desactivados.
- SEC-003: honeypot de Netlify reduce spam automatizado básico.
- Secretos revisados: no se requieren claves en el cliente. Los archivos `.env*` están ignorados salvo `.env.example`.

No se afirma seguridad absoluta. Deben revisarse periódicamente dependencias, configuración del dominio y panel de Netlify.
