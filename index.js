const express = require('express');
const app = express();
const path = require('path');

// Middleware untuk melayani file statis (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Halaman utama
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Website Undiksha - Dashboard</title>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f6f9;
        }
        .navbar {
          background-color: #0066b2;
        }
        .navbar-brand {
          font-size: 24px;
          color: white !important;
        }
        .container {
          margin-top: 50px;
        }
        .card {
          margin-top: 20px;
        }
        footer {
          background-color: #0066b2;
          color: white;
          padding: 20px 0;
          position: absolute;
          width: 100%;
          bottom: 0;
        }
        .footer-text {
          text-align: center;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="#">Undiksha</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/dashboard">Dashboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <div class="container">
        <h1 class="text-center">Welcome to Undiksha Dashboard</h1>
        <p class="text-center">App running on port 3000</p>
        <div class="text-center">
          <a href="/dashboard" class="btn btn-primary btn-lg">Go to Dashboard</a>
        </div>
      </div>

      <!-- Footer -->
      <footer>
        <div class="footer-text">
          <p>&copy; 2024 Universitas Pendidikan Ganesha. All Rights Reserved.</p>
        </div>
      </footer>

      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </body>
    </html>
  `);
});

// Halaman dasbor
app.get('/dashboard', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dashboard - Undiksha</title>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f6f9;
        }
        .navbar {
          background-color: #0066b2;
        }
        .navbar-brand {
          font-size: 24px;
          color: white !important;
        }
        .container {
          margin-top: 50px;
        }
        .card {
          margin-top: 20px;
        }
        footer {
          background-color: #0066b2;
          color: white;
          padding: 20px 0;
          position: absolute;
          width: 100%;
          bottom: 0;
        }
        .footer-text {
          text-align: center;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="#">Undiksha</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Dashboard Content -->
      <div class="container">
        <h1 class="text-center">Undiksha Dashboard</h1>
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Statistics</h5>
                <p class="card-text">View the statistical data of Undiksha.</p>
                <a href="#" class="btn btn-info">View Stats</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">News</h5>
                <p class="card-text">Stay updated with the latest news from Undiksha.</p>
                <a href="#" class="btn btn-info">Latest News</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Events</h5>
                <p class="card-text">Check out the upcoming events at Undiksha.</p>
                <a href="#" class="btn btn-info">Upcoming Events</a>
              </div>
            </div>
          </div>
        </div>
        <a href="/" class="btn btn-secondary mt-3">Back to Home</a>
      </div>

      <!-- Footer -->
      <footer>
        <div class="footer-text">
          <p>&copy; 2024 Universitas Pendidikan Ganesha. All Rights Reserved.</p>
        </div>
      </footer>

      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </body>
    </html>
  `);
});

// Mulai server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
