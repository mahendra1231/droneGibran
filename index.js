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
      <title>Dashboard - My App</title>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
      <style>
        body {
          background-color: #f8f9fa;
        }
        .container {
          margin-top: 50px;
        }
        .card {
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container mt-5">
        <h1>Welcome to Dashboard - My App</h1>
        <p>App is running on port 3000</p>
        <a href="/dashboard" class="btn btn-primary">Go to Dashboard</a>
      </div>
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
      <title>Dashboard</title>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
      <style>
        body {
          background-color: #f8f9fa;
        }
        .container {
          margin-top: 50px;
        }
        .card {
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container mt-5">
        <h1>Welcome to the Dashboard</h1>
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card 1</h5>
                <p class="card-text">Some information for the dashboard</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card 2</h5>
                <p class="card-text">More information for the dashboard</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card 3</h5>
                <p class="card-text">Additional details for the dashboard</p>
              </div>
            </div>
          </div>
        </div>
        <a href="/" class="btn btn-secondary mt-3">Back to Home</a>
      </div>
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
