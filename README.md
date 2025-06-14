# Blog Project
A Single Page Application using React Router, Tailwind and JSON Web Token
## Installation
### 1. Clone the repository
Get a copy of the repo
### 2. Install dependencies
In the root directory
```
npm install
```
### 3.Set up environment variables: 
Create .env file in the root directory and add the following 
```
VITE_REST_API="<Your backend Rest API>"
```
### 4. Generate Prisma client
In the root folder run
```
npx prisma generate

```
and 
```
npx prisma db push  

```

### 5. Start the server
In development
```
npm run dev
```
In production
```
npm run start
```
### 6. Access the application
Open your browser and navigate to http://localhost:5173
## Features
### Basic Features
* Log in 
* Sign up
* Log out
* View all blog
* View specific blog
* Add blog
* Edit blog
* Delete Blog
