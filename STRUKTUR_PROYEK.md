# Project Structure - Aplikasi Kasir

```
kasir/
├── backend/                    # Node.js/Express Backend
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   ├── auth.js
│   │   │   └── environment.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── productController.js
│   │   │   ├── transactionController.js
│   │   │   ├── reportController.js
│   │   │   └── userController.js
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Product.js
│   │   │   ├── Category.js
│   │   │   ├── Transaction.js
│   │   │   ├── TransactionItem.js
│   │   │   └── Payment.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── productRoutes.js
│   │   │   ├── transactionRoutes.js
│   │   │   ├── reportRoutes.js
│   │   │   └── userRoutes.js
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   │   ├── errorHandler.js
│   │   │   └── validation.js
│   │   ├── utils/
│   │   │   ├── logger.js
│   │   │   ├── validators.js
│   │   │   └── helpers.js
│   │   └── app.js
│   ├── tests/
│   │   ├── unit/
│   │   └── integration/
│   ├── migrations/
│   ├── seeds/
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── server.js
│   └── README.md
│
├── frontend/                   # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Common/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   └── Footer.jsx
│   │   │   ├── Auth/
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   └── RegisterForm.jsx
│   │   │   ├── Dashboard/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── StatCard.jsx
│   │   │   │   └── ChartComponent.jsx
│   │   │   ├── Cashier/
│   │   │   │   ├── CashierPage.jsx
│   │   │   │   ├── ProductList.jsx
│   │   │   │   ├── Cart.jsx
│   │   │   │   ├── Payment.jsx
│   │   │   │   └── Receipt.jsx
│   │   │   ├── Products/
│   │   │   │   ├── ProductPage.jsx
│   │   │   │   ├── ProductForm.jsx
│   │   │   │   └── ProductTable.jsx
│   │   │   ├── Reports/
│   │   │   │   ├── ReportPage.jsx
│   │   │   │   ├── SalesReport.jsx
│   │   │   │   ├── CategoryReport.jsx
│   │   │   │   └── ExportReport.jsx
│   │   │   └── Users/
│   │   │       ├── UserManagement.jsx
│   │   │       ├── UserForm.jsx
│   │   │       └── UserTable.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── NotFoundPage.jsx
│   │   │   └── ErrorPage.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── productService.js
│   │   │   ├── transactionService.js
│   │   │   └── reportService.js
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useFetch.js
│   │   │   └── useForm.js
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── AppContext.jsx
│   │   ├── styles/
│   │   │   ├── global.css
│   │   │   ├── variables.css
│   │   │   └── responsive.css
│   │   ├── utils/
│   │   │   ├── formatters.js
│   │   │   ├── validators.js
│   │   │   └── constants.js
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   └── App.css
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── database/                   # Database & SQL
│   ├── schema.sql
│   ├── migrations/
│   │   ├── 001_create_tables.sql
│   │   ├── 002_add_indexes.sql
│   │   └── 003_seed_data.sql
│   ├── queries/
│   │   ├── products.sql
│   │   ├── transactions.sql
│   │   ├── reports.sql
│   │   └── users.sql
│   └── ER_Diagram.md
│
├── docs/                       # Documentation
│   ├── API_DOCUMENTATION.md
│   ├── DATABASE_DESIGN.md
│   ├── DEPLOYMENT_GUIDE.md
│   ├── SETUP_GUIDE.md
│   ├── CONTRIBUTING.md
│   └── TROUBLESHOOTING.md
│
├── .github/
│   └── workflows/
│       ├── backend-tests.yml
│       ├── frontend-tests.yml
│       └── deploy.yml
│
├── docker-compose.yml
├── .gitignore
├── RENCANA_PROYEK.md
├── STRUKTUR_PROYEK.md
└── README.md
```

---

## Penjelasan Struktur

### Backend (`/backend`)
- **config/**: Konfigurasi database, auth, environment
- **controllers/**: Business logic untuk setiap fitur
- **models/**: Database models/schemas
- **routes/**: API endpoints
- **middleware/**: Authentication, validation, error handling
- **utils/**: Helper functions
- **tests/**: Unit & integration tests
- **migrations/**: Database migration scripts

### Frontend (`/frontend`)
- **components/**: Reusable UI components
- **pages/**: Page components
- **services/**: API call functions
- **hooks/**: Custom React hooks
- **context/**: React Context untuk state management
- **styles/**: CSS files
- **utils/**: Helper functions & constants

### Database (`/database`)
- **schema.sql**: Complete database schema
- **migrations/**: Versioned database changes
- **queries/**: Common SQL queries
- **ER_Diagram.md**: Entity relationship diagram

### Documentation (`/docs`)
- API Documentation
- Database Design
- Deployment Guide
- Setup Instructions
- Contributing Guidelines

---

## Setup Awal

### Prerequisites
- Node.js v16+ 
- npm atau yarn
- PostgreSQL 12+
- Git

### Instalasi Backend
```bash
cd backend
npm install
cp .env.example .env
npm run migrate
npm start
```

### Instalasi Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

---

**Status:** Ready untuk development phase
