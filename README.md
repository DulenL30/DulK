# Dulk - Smart Expense Tracker

## 🌟 Overview

Dulk is a powerful yet intuitive expense tracking web app built for the modern user. Whether you're on desktop or mobile, manage your income and expenses seamlessly with real-time balance updates and comprehensive transaction history.

**🔗 Live Demo:** [https://dul-k-git-main-dulens-projects-818752ee.vercel.app](https://dul-k-git-main-dulens-projects-818752ee.vercel.app)

## ✨ Features

- ** Income & Expense Tracking** - Add, categorize, and manage all your financial transactions
- ** Real-time Balance Updates** - Watch your balance update instantly as you add transactions
- ** Mobile Responsive** - Perfect experience across all devices and screen sizes
- ** Transaction History** - Complete list of all your financial activities
- ** Edit & Delete** - Modify or remove transactions with full balance recalculation
- ** Secure Authentication** - Login with your Gmail account via Clerk
- ** Profile Management** - Customize and manage your account settings
- ** Modern UI** - Clean, intuitive interface built with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend:** Next.js + Tailwind CSS
- **Database:** Neon (Cloud-native PostgreSQL)
- **Authentication:** Clerk
- **Deployment:** Vercel
- **Responsive Design:** Mobile-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Clerk account for authentication setup
- Neon database account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dulk.git
   cd dulk
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   DATABASE_URL=your_neon_database_url
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to see the app in action!

## 📱 How to Use

1. ** Sign Up/Login** - Use your Gmail account to authenticate
2. ** Add Transactions** - Record your income and expenses
3. ** View Balance** - See your current financial status at a glance
4. ** Check History** - Browse through all your past transactions
5. ** Edit/Delete** - Modify transactions as needed
6. ** Manage Profile** - Update your account information

## 🏗️ Project Structure

```
DULK/
├── .clerk/
├── .next/
├── app/
│   ├── actions/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AddTransaction.tsx
│   ├── Balance.tsx
│   ├── Card.tsx
│   ├── FirstPage.tsx
│   ├── IncomeExpense.tsx
│   ├── Navbar.tsx
│   ├── Robot.tsx
│   ├── TransactionItem.tsx
│   └── TransactionList.tsx
├── lib/
│   ├── checkUser.ts
│   ├── db.ts
│   └── utils.ts
├── node_modules/
├── out/
├── prisma/
├── public/
├── types/
├── .env
├── .gitignore
├── eslint.config.mjs
├── middleware.ts
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```


## 🙏 Acknowledgments

- **Neon** for providing excellent cloud-native PostgreSQL database
- **Clerk** for seamless authentication solutions
- **Vercel** for reliable deployment platform
- **Next.js** and **Tailwind CSS** communities for amazing tools

## 📧 Contact

For questions, suggestions, or feedback, feel free to reach out!

---

**⭐ If you found this project helpful, please give it a star!**

*Built with ❤️ by [Your Name]*
