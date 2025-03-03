# Dine Quest

A modern restaurant discovery platform built with Next.js, React, and Tailwind CSS. Dine Quest helps users find and explore restaurants with an intuitive and responsive user interface.

![Dine Quest](public/placeholder.svg?height=400&width=600)

## Features

- **Restaurant Discovery**: Browse through a curated list of restaurants
- **Detailed Restaurant Pages**: View comprehensive information about each restaurant including photos, menu items, and reviews
- **Search Functionality**: Find restaurants by name, cuisine, or location
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS and Radix UI components for a sleek user experience

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **TypeScript**: For type safety and better developer experience

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/dine-quest.git
   cd dine-quest
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application

## Project Structure

- `/app`: Main application code using Next.js App Router
  - `/page.tsx`: Home page
  - `/restaurant/[slug]`: Individual restaurant pages
  - `/restaurants/search`: Restaurant search page
- `/components`: Reusable UI components
- `/public`: Static assets
- `/lib`: Utility functions and shared code

## Deployment

The application can be easily deployed on [Vercel](https://vercel.com), the platform from the creators of Next.js:

1. Push your code to a Git repository (GitHub, GitLab, BitBucket)
2. Import the project into Vercel
3. Vercel will detect that you're using Next.js and set up the optimal build settings for you

For more deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com) for accessible UI components
