<a href="https://eagoldexchange.live">
  <img alt="East African Gold Exchange" src="https://eagoldexchange.live/_static/og.jpg" width="100%">
  <h1 align="center">East African Gold Exchange</h1>
</a>

<p align="center">
  A comprehensive digital platform for gold trading in East Africa
</p>

<p align="center">
  <a href="https://eagoldexchange.live">
    <img src="https://img.shields.io/badge/website-eagoldexchange.live-FFD700?style=flat&logo=safari&logoColor=fff" alt="East African Gold Exchange Website" />
  </a>
</p>

## Market Opportunity

The East African gold market represents a significant opportunity:

- **Growing Production**: East Africa is experiencing increasing gold production, with Tanzania, Kenya, Ethiopia, and Uganda as key producers.
- **Limited Digital Infrastructure**: The gold trading market in East Africa remains predominantly analog, with limited technological solutions.
- **Transparency Challenges**: Traditional trading lacks transparency in pricing, quality assessment, and verification.
- **Rising Investment Interest**: Growing regional and international interest in East African gold assets.
- **Mobile Penetration**: High mobile phone adoption rates provide a strong foundation for digital platform adoption.

EAGOLD positions itself at the intersection of these trends, providing a much-needed technological solution to modernize gold trading in the region.

## Future Roadmap

The platform development roadmap includes:

- **Mobile Application**: Dedicated apps for iOS and Android
- **AI-Powered Analytics**: Predictive models for gold price trends
- **Blockchain Integration**: Enhanced transparency through distributed ledger
- **Regional Expansion**: Growth into additional African markets
- **Gold-Backed Tokens**: Digital assets backed by physical gold
- **Financial Services**: Financing options for miners and suppliers

## Acknowledgements

This project builds upon the excellent foundation of several open-source projects:

- [Next.js](https://nextjs.org/) by Vercel
- [Shadcn UI](https://ui.shadcn.com/) component system
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Prisma](https://www.prisma.io/) for database operations
- [NextAuth.js](https://next-auth.js.org/) for authentication

Special thanks to the open-source community for making these tools available.
</a>

<p align="center">
  A comprehensive digital platform for gold trading in East Africa
</p>

<p align="center">
  <a href="https://eagoldexchange.live">
    <img src="https://img.shields.io/badge/website-eagoldexchange.live-FFD700?style=flat&logo=safari&logoColor=fff" alt="East African Gold Exchange Website" />
  </a>
</p>

<p align="center">
  <a href="#project-overview"><strong>Project Overview</strong></a> ·
  <a href="#key-features"><strong>Key Features</strong></a> ·
  <a href="#technical-stack"><strong>Technical Stack</strong></a> ·
  <a href="#installation"><strong>Installation</strong></a> ·
  <a href="#business-model"><strong>Business Model</strong></a>
</p>
<br/>

## Project Overview

East African Gold Exchange (EAGOLD) is a comprehensive digital platform designed to facilitate gold trading, investment, and market intelligence specifically focused on the East African region. The platform bridges the gap between gold miners, suppliers, buyers, and investors, providing a secure and transparent marketplace for gold transactions.

The platform aims to revolutionize gold trading in East Africa by digitizing traditionally analog processes and creating transparency in a market that has historically lacked technological infrastructure.

## Key Features

- **Gold Marketplace**: Connect gold miners and suppliers directly with buyers and investors
- **Live Market Intelligence**: Real-time gold price tracking and trend analysis
- **Secure Transactions**: Verified users and secure payment processing
- **Supplier & Buyer Profiles**: Dedicated areas for both sides of the transaction
- **Notification System**: Stay updated on price changes and transaction status
- **Administrative Dashboard**: Comprehensive management interface
- **Authentication & Authorization**: Secure user accounts with role-based access

## Technical Stack

The East African Gold Exchange platform is built on a modern, scalable technology stack:

- **Frontend**: Next.js 14 with React and TypeScript
- **Styling**: Tailwind CSS with custom gold-themed design system
- **Database**: PostgreSQL via Prisma ORM (hosted on Neon.tech)
- **Authentication**: NextAuth.js with multiple providers
- **Deployment**: Vercel with continuous integration
- **APIs**: RESTful endpoints for gold prices and marketplace interactions
- **Email**: React Email templates with Resend

## Installation

### Prerequisites

- Node.js 18.x or later
- PostgreSQL database (or Neon.tech account)
- Stripe account for payment processing
- Resend account for email functionality

### Setup Steps

1. Clone the repository:

```sh
git clone https://github.com/yourusername/eagoldexchange.git
cd eagoldexchange
```

2. Install dependencies:

```sh
npm install
# or
pnpm install
```

3. Configure environment variables:

```sh
cp .env.example .env.local
```

4. Update `.env.local` with your specific credentials:
   - Database connection string
   - Auth provider credentials
   - Stripe API keys
   - Resend API key

5. Run database migrations:

```sh
npx prisma migrate dev
```

6. Start the development server:

```sh
npm run dev
# or
pnpm dev
```

## Business Model

The East African Gold Exchange operates on a multi-faceted business model:

## Business Model

The East African Gold Exchange operates on a multi-faceted business model:

1. **Transaction Fees**: A small percentage fee on each successful gold transaction
2. **Subscription Plans**: Premium features for serious traders and institutional investors
3. **Market Intelligence**: Advanced analytics and reports for paid subscribers
4. **Verification Services**: Enhanced trust through verified supplier and buyer profiles
5. **Advertising**: Targeted placement for related services (refining, security, logistics)

The platform creates value by bringing transparency, security, and efficiency to the East African gold market, traditionally fragmented and opaque. By digitizing transactions and providing real-time market data, EAGOLD reduces friction, lowers costs, and expands market access for all participants.

## Platform Architecture

The East African Gold Exchange platform is built with scalability and reliability in mind:

### Core Components

- **Marketplace Engine**: Connects verified buyers and suppliers
- **Price Tracking System**: Real-time gold price updates with historical data
- **User Management**: Role-based access control system
- **Payment Processing**: Secure transaction handling with escrow capabilities 
- **Notification Service**: Real-time alerts for market changes and transactions
- **Content Management**: Educational resources about gold trading

### Technical Implementation

The platform uses a modern tech stack that includes:

- **Next.js 14**: Server components for improved performance
- **Prisma ORM**: Type-safe database queries and migrations
- **PostgreSQL**: Reliable, scalable database for transaction records
- **NextAuth.js**: Secure authentication with multiple providers
- **Tailwind CSS**: Custom gold-themed design system
- **Stripe**: Payment processing infrastructure
- **React Email**: Templated notifications and communications

### Security Features

- End-to-end encryption for sensitive data
- Multi-factor authentication for user accounts
- Regular security audits and penetration testing
- Compliance with financial regulations and KYC requirements

## Author

Created by [@miickasmt](https://twitter.com/miickasmt) in 2023, released under the [MIT license](https://github.com/shadcn/taxonomy/blob/main/LICENSE.md).

## Credits

This project was inspired by shadcn's [Taxonomy](https://github.com/shadcn-ui/taxonomy), Steven Tey’s [Precedent](https://github.com/steven-tey/precedent), and Antonio Erdeljac's [Next 13 AI SaaS](https://github.com/AntonioErdeljac/next13-ai-saas).

- Shadcn ([@shadcn](https://twitter.com/shadcn))
- Steven Tey ([@steventey](https://twitter.com/steventey))
- Antonio Erdeljac ([@YTCodeAntonio](https://twitter.com/AntonioErdeljac))
