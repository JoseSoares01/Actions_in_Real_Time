
---

# Real-Time Financial Market Dashboard

## Description
This project is a **web application** built using **HTML**, **CSS**, and **JavaScript** to display real-time prices for five key financial assets: **S&P500 (Stock Market), BTC/USD (Cryptocurrency), EUR/USD, EUR/BRL, and USD/BRL (Forex)**. The application fetches data from external sources like **Finviz** and **Investing.com**, updating the prices automatically every 30 seconds.

## Features
- Display of real-time financial data for:
  - **S&P500** (Stock Market)
  - **BTC/USD** (Cryptocurrency)
  - **EUR/USD** (Forex)
  - **EUR/BRL** (Forex)
  - **USD/BRL** (Forex)
- Responsive design with five cards, each representing a specific asset.
- Data is fetched from trusted financial websites (Finviz and Investing.com).
- Automatic price updates every 30 seconds.

## Technologies Used
- **HTML** for the structure of the web page.
- **CSS** for styling and responsive design.
- **JavaScript** for fetching real-time data and updating the page dynamically.

## Getting Started

### Prerequisites
To run this project, you need:
- A modern web browser.
- Optional: **Node.js** if you plan to run a backend for handling CORS or to use additional packages.

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/financial-dashboard.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd financial-dashboard
   ```

3. **Install dependencies** (if using Node.js):
   ```bash
   npm install
   ```

### Running the Project
1. **Open the `index.html`** file in your web browser.
2. Watch the real-time price updates on the dashboard.

### Optional: Running with a Local Server
If you're using Node.js or need to bypass CORS issues, you can serve the app locally:
```bash
npm start
```

## Project Structure
```
/financial-dashboard
│
├── /css               # Contains the CSS styles
│   └── style.css
│
├── /js                # Contains JavaScript files
│   └── script.js
│
├── index.html         # Main HTML file
├── .gitignore         # Git ignore file
├── README.md          # Project documentation
└── package.json       # For Node.js dependencies (optional)
```

## How It Works
- **HTML** defines the structure of the dashboard with 5 cards for the different financial assets.
- **CSS** makes the design responsive and visually appealing.
- **JavaScript** periodically fetches data from external sources, such as **Finviz** and **Investing.com**, to update the displayed prices.

## Issues and Considerations
- **CORS Restrictions**: You might encounter CORS issues when fetching data directly from external websites. Consider using a backend server or a proxy if needed.
- **API Availability**: Ensure that data sources (Finviz, Investing.com) allow data scraping or provide public APIs.

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to adjust the content depending on how your project evolves!
