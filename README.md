# 🧾 Facturación Electrónica SaaS

Este proyecto es una API backend para una plataforma SaaS de facturación electrónica, construida con **Node.js**, **Express** y **MongoDB Atlas**. El objetivo es brindar una solución multiempresa para la emisión, validación, firma y envío de documentos electrónicos según los lineamientos de la DIAN.

---

## 🚀 Características principales

- Multiempresa (multitenant-ready)
- Conexión a la DIAN (modo sandbox y producción)
- Firma digital con certificados .p12
- Notificaciones por correo electrónico
- MongoDB Atlas como base de datos en la nube
- Despliegue en Render

---

## 🛠️ Tecnologías

- Node.js + Express
- MongoDB Atlas
- JWT para autenticación
- Docker (opcional)
- Render.com (producción)
- Nodemailer
- Certificados digitales (firma .p12)
- API DIAN

---

## 📦 Instalación local

```bash
git clone https://github.com/andrezoficial/facturacion-electronica-saas.git
cd facturacion-electronica-saas
npm install
