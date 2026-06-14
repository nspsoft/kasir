# Aplikasi Kasir

Sistem manajemen penjualan yang modern dan user-friendly untuk toko atau restoran.

## 🎯 Fitur Utama

- ✅ **Transaksi Penjualan** - Input item, diskon, & berbagai metode pembayaran
- ✅ **Manajemen Produk** - CRUD produk, kategori, tracking stok
- ✅ **Laporan Penjualan** - Daily, monthly, yearly reports & analisis
- ✅ **User Management** - Role-based access control (Admin, Kasir, Manajer)
- ✅ **Dashboard** - Real-time statistics & insights
- ✅ **Notifikasi** - Alert stok rendah & monitoring

## 🛠️ Tech Stack

### Frontend
- React.js 18+
- Vite
- Tailwind CSS / Material-UI
- Redux untuk state management
- Axios untuk HTTP requests

### Backend
- Node.js + Express.js
- PostgreSQL
- JWT Authentication
- Swagger/OpenAPI Documentation

### Tools
- Git & GitHub
- Docker & Docker Compose
- GitHub Actions (CI/CD)
- Postman (API Testing)

## 📋 Prerequisites

- Node.js v16+ ([Download](https://nodejs.org/))
- PostgreSQL 12+ ([Download](https://www.postgresql.org/))
- Git ([Download](https://git-scm.com/))
- npm atau yarn

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/nspsoft/kasir.git
cd kasir
```

### 2. Setup Backend
```bash
cd backend
npm install
cp .env.example .env
# Edit .env dengan konfigurasi database Anda
npm run migrate
npm start
```

Backend akan berjalan di `http://localhost:5000`

### 3. Setup Frontend
```bash
cd ../frontend
npm install
cp .env.example .env
npm run dev
```

Frontend akan berjalan di `http://localhost:5173`

## 📁 Struktur Proyek

```
kasir/
├── backend/          # Node.js/Express API
├── frontend/         # React.js UI
├── database/         # SQL schemas & migrations
├── docs/             # Documentation
└── RENCANA_PROYEK.md # Project plan
```

Lihat [STRUKTUR_PROYEK.md](./STRUKTUR_PROYEK.md) untuk struktur detail.

## 📖 Dokumentasi

- [Project Plan](./RENCANA_PROYEK.md) - Rencana lengkap proyek
- [Project Structure](./STRUKTUR_PROYEK.md) - Struktur folder & files
- [API Documentation](./docs/API_DOCUMENTATION.md) - API endpoints
- [Database Design](./docs/DATABASE_DESIGN.md) - Schema & ER Diagram
- [Setup Guide](./docs/SETUP_GUIDE.md) - Panduan instalasi detail
- [Deployment Guide](./docs/DEPLOYMENT_GUIDE.md) - Deploy ke production
- [Contributing](./docs/CONTRIBUTING.md) - Cara berkontribusi

## 🔄 Development Workflow

### Branch Convention
- `main` - Production ready
- `develop` - Development branch
- `feature/feature-name` - Feature development
- `bugfix/bug-name` - Bug fixes
- `hotfix/issue-name` - Production hotfixes

### Commit Convention
```
feat: add new feature
fix: fix a bug
docs: documentation changes
style: code style changes
refactor: code refactoring
test: add tests
chore: maintenance tasks
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
npm run test:coverage
```

### Frontend Tests
```bash
cd frontend
npm test
npm run test:coverage
```

## 📦 Build Production

### Backend
```bash
cd backend
npm run build
npm start:prod
```

### Frontend
```bash
cd frontend
npm run build
# Output di folder dist/
```

## 🐳 Docker Setup

```bash
docker-compose up -d
```

Akan menjalankan:
- Frontend (port 3000)
- Backend (port 5000)
- PostgreSQL (port 5432)

## 📊 API Endpoints Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/register` | User registration |
| GET | `/api/products` | Get all products |
| POST | `/api/products` | Create product |
| POST | `/api/transactions` | Create transaction |
| GET | `/api/reports/sales` | Get sales report |
| GET | `/api/users` | Get all users |

Lihat [API_DOCUMENTATION.md](./docs/API_DOCUMENTATION.md) untuk daftar lengkap.

## 🔐 Environment Variables

### Backend (.env)
```
NODE_ENV=development
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=kasir_db
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Aplikasi Kasir
```

## 🚨 Common Issues

### Port Already in Use
```bash
# Find process using port 5000
lsof -i :5000
# Kill process
kill -9 <PID>
```

### Database Connection Error
```bash
# Check PostgreSQL service
psql -U postgres
# Create database
createdb kasir_db
```

Lihat [TROUBLESHOOTING.md](./docs/TROUBLESHOOTING.md) untuk masalah lainnya.

## 🤝 Contributing

1. Fork repository
2. Buat branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'feat: add AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

Lihat [CONTRIBUTING.md](./docs/CONTRIBUTING.md) untuk detail lebih lanjut.

## 📝 License

Project ini menggunakan MIT License. Lihat [LICENSE](./LICENSE) file.

## 👥 Team

- **Backend Developer** - Development API & database
- **Frontend Developer** - Development UI & user experience
- **Project Manager** - Project coordination & timeline

## 📞 Support

Untuk pertanyaan atau issues, silakan:
- Buat [GitHub Issue](https://github.com/nspsoft/kasir/issues)
- Hubungi tim development

## 🎯 Project Status

- ✅ Phase 1: Planning & Setup (In Progress)
- ⏳ Phase 2: Backend Development (Next)
- ⏳ Phase 3: Frontend Development
- ⏳ Phase 4: Integration & Testing
- ⏳ Phase 5: Deployment & Maintenance

---

**Last Updated:** 2026-06-14  
**Version:** 0.1.0 (In Development)
