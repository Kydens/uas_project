const config = require('./core/config');
const app = require('./core/server');

// GET Index
app.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'W-learning',
    layout: 'index',
    style: 'css/styleIndex.css',
  });
});

// GET Create Account
app.get('/createAccount', (req, res) => {
  res.render('pages/createacc', {
    title: 'W-Learning',
    layout: 'createacc',
    style: 'css/styleCreateAcc.css',
  });
});

// GET Home Page
app.get('/home', (req, res) => {
  res.render('pages/home', {
    title: 'Home',
    layout: 'home',
    style: 'css/styleHome.css',
    script: 'js/scriptHome.js',
  });
});

// GET Algorithm Page
app.get('/webprogramming', (req, res) => {
  res.render('pages/class', {
    title: 'Web Programming',
    layout: 'class',
    style: 'css/styleClass.css',
    img: 'assets/webpro.jpg',
    classCode: 'WP245',
    dosen: 'Janson Hendryli',
    asdos: 'Hans Edison',
    date: '28-11-2022',
    announce: 'Minggu 15',
    isiDosen: 'Maaf telat mengabarkan, untuk pertemuan minggu ini silahkan menyelesaikan project masing-masing. Tidak ada online meet. Terima kasih.',
    isiAsdos: 'Selamat Malam. Besok praktikum dipindahkan menjadi hari Rabu jam 11:30 karena saya ada kunjungan ke wisma BCA, apakah ada yang berhalangan?',
  });
});

// GET Grades Page
app.get('/grades', (req, res) => {
  res.render('pages/grades', {
    title: 'Grades',
    layout: 'grades',
    style: 'css/styleGrades.css',
  });
});

// GET Assignment Page
app.get('/assignment', (req, res) => {
  res.render('pages/assignment', {
    title: 'Assignment',
    layout: 'assignment',
    style: 'css/styleAssignment.css',
    script: 'js/scriptAssignment.js',
  });
});

// GET Calendar Page
app.get('/calendar', (req, res) => {
  res.render('pages/calendar', {
    title: 'Calendar',
    layout: 'calendar',
    style: 'css/styleCalendar.css',
    script: 'js/scriptCalendar.js',
  });
});

// GET Setting Page
app.get('/settings', (req, res) => {
  res.render('pages/setting', {
    title: 'Settings',
    layout: 'setting',
    style: 'css/styleSetting.css',
    script: 'js/scriptSetting.js',
  });
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log(`Server runs at port ${config.port}`);
  }
});
