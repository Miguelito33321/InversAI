# InversAI Project Structure

```
inversai/
├── frontend/                  # React Native mobile app
│   ├── src/
│   │   ├── assets/            # Images, fonts, etc.
│   │   ├── components/        # Reusable UI components
│   │   ├── screens/           # App screens
│   │   ├── navigation/        # Navigation configuration
│   │   ├── services/          # API services
│   │   ├── store/             # State management
│   │   ├── utils/             # Helper functions
│   │   └── App.js             # Main app component
│   ├── package.json           # Dependencies
│   └── README.md              # Frontend documentation
│
├── backend/                   # Node.js server
│   ├── src/
│   │   ├── config/            # Configuration files
│   │   ├── controllers/       # Request handlers
│   │   ├── middleware/        # Express middleware
│   │   ├── models/            # Database models
│   │   ├── routes/            # API routes
│   │   ├── services/          # Business logic
│   │   ├── utils/             # Helper functions
│   │   └── app.js             # Express app setup
│   ├── package.json           # Dependencies
│   └── README.md              # Backend documentation
│
├── ai-core/                   # AI model integration
│   ├── src/
│   │   ├── models/            # AI model adapters
│   │   ├── training/          # Model fine-tuning
│   │   ├── inference/         # Prediction logic
│   │   └── utils/             # Helper functions
│   ├── package.json           # Dependencies
│   └── README.md              # AI core documentation
│
├── docs/                      # Project documentation
│   ├── api/                   # API documentation
│   ├── architecture/          # System design docs
│   └── user-guides/           # End-user documentation
│
├── .gitignore                 # Git ignore file
├── docker-compose.yml         # Docker configuration
└── README.md                  # Main project README
```

## Key Components

### Frontend
- **components/** - Reusable UI elements (buttons, cards, charts)
- **screens/** - Main application screens (dashboard, chat, portfolio)
- **services/** - API integration and data fetching
- **store/** - State management with Redux or Context API

### Backend
- **controllers/** - Handle API requests and responses
- **models/** - Database schemas and models
- **routes/** - API endpoint definitions
- **services/** - Business logic and external API integration

### AI Core
- **models/** - Integration with open-source LLMs
- **inference/** - Real-time prediction and recommendation logic
- **training/** - Model fine-tuning for financial domain

## Development Workflow

1. Set up local development environment
2. Implement backend API endpoints
3. Develop AI core functionality
4. Create frontend components and screens
5. Integrate all systems
6. Test and refine