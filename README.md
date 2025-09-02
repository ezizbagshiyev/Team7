# Personal Finance Website

A web-based personal finance management tool that helps users track income, expenses, and bank accounts. The website provides a simple, intuitive dashboard with AI-powered features to make managing finances easier.

## Features

* **User Authentication**:

  * Sign up and log in securely.
  * Email verification with a verification code.

* **Personalized Dashboard**:

  * Set monthly spending limits.
  * Connect multiple bank accounts.
  * View recent transactions.
  * Visualize monthly expenses with a pie chart.

* **Transaction Management**:

  * Add income or expense transactions with:

    * Amount
    * Category (dynamic based on income/expense)
    * Date
    * Description
    * Recurring transaction option
  * Scan receipts to automatically populate transaction fields using Gemini AI API.

* **Future Enhancements**:

  * AI-powered email insights for financial recommendations.

## Technology Stack

* **Frontend**: React / Next.js (or specify your framework)
* **Backend**: Node.js / Express (or specify your backend)
* **Database**: MongoDB (or your database)
* **AI Integration**: Gemini AI API for automatic transaction input

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/personal-finance-website.git
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Environment Variables

To run this project locally, you need to create a `.env` file in the root directory with the following environment variables:

```env
# Clerk authentication keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=sign-up

# Database connection
DATABASE_URL=your_database_connection_string
DIRECT_URL=your_direct_database_url

# AI & external APIs
ARCJET_KEY=your_arcjet_key
GEMINI_API_KEY=your_gemini_api_key
RESEND_API_KEY=your_resend_api_key
```

> Replace the `your_*` placeholders with your actual keys and URLs.
4. Run the application locally:

   ```bash
   npm run dev
   ```
5. Open the website in your browser at `http://localhost:3000`.

## Demo

* Published website: \[https://team7-dguv.vercel.app/]
* Local fallback available in case the live site fails.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to suggest features or improvements.

## License

This project is licensed under the MIT License.

