# REST API User Management with Integration Testing

A demonstration project showcasing REST API development with comprehensive integration testing, built using modern TypeScript and Express.js. This project serves as a practical example of implementing software testing practices in a REST API context.

## 🚀 Features

- User management REST API endpoints
- Integration testing setup with Vitest
- MongoDB database integration via Prisma
- Docker support for containerization
- TypeScript for type-safe development
- Express.js for robust API development

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| Backend | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) |
| Database | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white) |
| Testing | ![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white) ![SuperTest](https://img.shields.io/badge/SuperTest-009688?style=flat-square&logo=testing-library&logoColor=white) |
| DevOps | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) |

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Software-Testing
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Generate Prisma client:
```bash
yarn generate
```

5. Push database schema:
```bash
yarn push
```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
yarn dev
```

### Production Mode
```bash
yarn build
yarn start
```

### Running Tests
```bash
# Run tests
yarn test

# Run tests with coverage
yarn test:coverage
```

### Using Docker
```bash
# Build and run with Docker Compose
docker-compose up --build
```

## 🧪 Testing Strategy

This project implements integration testing to ensure the reliability of the API endpoints. The tests cover:

- User management operations (CRUD)
- Request validation
- Error handling
- Database interactions

## 📝 API Documentation

### Endpoints

- `GET /users` - Retrieve all users
- `POST /users` - Create a new user
- `GET /users/:id` - Retrieve a specific user
- `PUT /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

Detailed API documentation can be found in the [API Documentation](./docs/API.md) file.

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 👤 Author

**Seraphin Brice Koua** ([@Briso10-dev](https://github.com/Briso10-dev))

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/your-repo/issues).

## ⭐️ Show your support

Give a ⭐️ if this project helped you!
