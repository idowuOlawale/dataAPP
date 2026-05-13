# NaijaCryptoData

Crypto-powered Nigerian data vending website using HTML, CSS, JavaScript and Firebase.

## Features
- User registration/login
- Dashboard
- Deposit page with QR code
- MTN & Airtel data purchase
- Transaction history
- Admin panel for prices and order updates
- Dark fintech glassmorphism UI
- Vercel ready

## Firebase Setup
1. Create a Firebase project
2. Enable:
   - Authentication (Email/Password)
   - Firestore Database
3. Copy `.env.example` to `.env`
4. Fill in Firebase credentials

## Deploy To Vercel
1. Push project to GitHub
2. Import repo into Vercel
3. Add environment variables from `.env.example`
4. Deploy

## Admin
Set a user email inside Firestore collection:
`settings/admin`

Example:
```json
{
  "email": "admin@example.com"
}
```
